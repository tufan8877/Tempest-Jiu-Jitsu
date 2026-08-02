import { Link } from "wouter";
import { Instagram, Facebook, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center mb-6"
              aria-label="Tempest Jiu-Jitsu Vienna – Startseite"
            >
              <img
                src={`${import.meta.env.BASE_URL}tempest-logo-header.svg`}
                alt="Tempest Jiu-Jitsu Vienna"
                className="h-auto w-full max-w-[230px] object-contain transition-transform duration-300 hover:scale-[1.02]"
              />
            </Link>
            <p className="text-muted-foreground text-sm">
              Elite Brazilian Jiu-Jitsu in Deutschland. Schmiede deinen Charakter auf der Matte.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6">Rechtliches</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/impressum" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Kampfstraße 42<br />10115 Berlin</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+49 123 4567890</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail size={18} className="text-primary shrink-0" />
                <span>info@bjj-academy.de</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} BJJ Academy. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
