import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Startseite" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleLogoClick = () => {
    setMobileMenuOpen(false);

    if (location === "/") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-border py-4"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="group flex shrink-0 items-center"
          aria-label="Tempest Jiu-Jitsu Vienna – zur Startseite und nach oben"
        >
          <img
            src={`${import.meta.env.BASE_URL}tempest-logo-header.svg`}
            alt="Tempest Jiu-Jitsu Vienna"
            className={cn(
              "w-auto object-contain transition-all duration-300 group-hover:scale-[1.02]",
              isScrolled ? "h-10 md:h-12" : "h-12 md:h-14"
            )}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold uppercase tracking-wider transition-colors hover:text-primary",
                location === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild>
            <Link href="/kontakt">Jetzt anmelden</Link>
          </Button>
        </nav>

        <button
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menü öffnen oder schließen"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-6 flex flex-col gap-6 shadow-xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-lg font-display font-bold uppercase tracking-wider",
                location === link.href ? "text-primary" : "text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="w-full">
            <Link href="/kontakt">Jetzt anmelden</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
