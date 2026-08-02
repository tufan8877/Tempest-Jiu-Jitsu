import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check, CreditCard, ExternalLink, Shield, Users, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader, staggerContainer, fadeIn } from "@/components/ui/animations";

/*
 * WIX-ABO-LINK
 * Sobald die Wix-Mitgliedschaft eingerichtet ist, hier die vollständige
 * Wix-Adresse eintragen, zum Beispiel:
 * https://deine-wix-seite.at/plans-pricing
 *
 * Solange der Wert leer bleibt, führen die Buttons zur Kontaktseite.
 */
const WIX_MEMBERSHIP_URL = "";

const BENEFITS = [
  {
    icon: <Users size={28} />,
    title: "Starkes Team",
    text: "Trainiere in einer respektvollen Gemeinschaft, in der jeder den anderen unterstützt.",
  },
  {
    icon: <Shield size={28} />,
    title: "Technik & Disziplin",
    text: "Entwickle deine Technik, deinen Fokus und deine mentale Stärke Schritt für Schritt.",
  },
  {
    icon: <Trophy size={28} />,
    title: "Echte Entwicklung",
    text: "Egal ob Anfänger oder Fortgeschrittener: Wir helfen dir, dein persönliches Potenzial auszuschöpfen.",
  },
];

const STEPS = [
  "Wähle auf der Wix-Seite die passende Mitgliedschaft aus.",
  "Gib deine persönlichen Daten sicher bei Wix ein.",
  "Schließe deine Mitgliedschaft online ab.",
  "Komm zum Training und starte deinen Weg bei Tempest.",
];

function WixMembershipButton({ className = "" }: { className?: string }) {
  if (WIX_MEMBERSHIP_URL) {
    return (
      <Button size="lg" className={className} asChild>
        <a href={WIX_MEMBERSHIP_URL} target="_blank" rel="noopener noreferrer">
          Mitgliedschaft auswählen
          <ExternalLink size={18} />
        </a>
      </Button>
    );
  }

  return (
    <Button size="lg" className={className} asChild>
      <Link href="/kontakt">Mitgliedschaft anfragen</Link>
    </Button>
  );
}

export default function Membership() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <section className="relative overflow-hidden border-b border-border py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.17),transparent_45%)]" />
        <div className="container relative mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.span variants={fadeIn} className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Dein erster Schritt
            </motion.span>
            <motion.h1 variants={fadeIn} className="mb-7 text-5xl font-display uppercase sm:text-6xl md:text-7xl">
              Mitglied werden
            </motion.h1>
            <motion.p variants={fadeIn} className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Werde Teil von Tempest Jiu-Jitsu Vienna. Deine Mitgliedschaft kannst du künftig einfach und sicher über unsere Wix-Buchungsseite auswählen und abschließen.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-border bg-muted py-20 text-center md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.12),transparent_60%)]" />
        <div className="container relative mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl"
          >
            <span className="mb-3 block text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Deine Reise beginnt hier
            </span>
            <h2 className="mb-5 text-4xl font-display uppercase sm:text-5xl md:text-6xl">
              Vom ersten Schritt zum Schwarzgurt
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Jeder Weg beginnt als Weißgurt. Mit regelmäßigem Training, Geduld und Unterstützung wächst du Schritt für Schritt – auf der Matte und darüber hinaus.
            </p>

            <div className="mb-12 flex flex-wrap items-end justify-center gap-4 md:gap-8">
              <div className="flex flex-col items-center gap-3">
                <div className="h-5 w-20 border border-gray-300 bg-white md:w-28" />
                <span className="text-xs font-bold uppercase tracking-wider">Weiß</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="h-5 w-20 bg-blue-600 md:w-28" />
                <span className="text-xs font-bold uppercase tracking-wider">Blau</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="h-5 w-20 bg-purple-700 md:w-28" />
                <span className="text-xs font-bold uppercase tracking-wider">Lila</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="h-5 w-20 bg-[#8b5a2b] md:w-28" />
                <span className="text-xs font-bold uppercase tracking-wider">Braun</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-5 w-20 items-center justify-end border border-gray-800 bg-black md:w-28">
                  <div className="h-full w-5 bg-red-600" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider">Schwarz</span>
              </div>
            </div>

            <WixMembershipButton className="min-w-[240px]" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <SectionHeader title="Warum Tempest?" subtitle="Mehr als nur Training" align="center" />
          <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3 md:gap-8">
            {BENEFITS.map((benefit, index) => (
              <motion.article
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="border border-border bg-card p-8 transition-colors hover:border-primary"
              >
                <div className="mb-5 text-primary">{benefit.icon}</div>
                <h2 className="mb-3 text-2xl font-display uppercase">{benefit.title}</h2>
                <p className="leading-relaxed text-muted-foreground">{benefit.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <span className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-primary">Einfach online abschließen</span>
              <h2 className="mb-8 text-4xl font-display uppercase sm:text-5xl">Dein Weg ins Team</h2>
              <div className="space-y-5">
                {STEPS.map((step, index) => (
                  <div key={step} className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center bg-primary text-primary-foreground">
                      <Check size={18} />
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-bold uppercase tracking-wider text-primary">Schritt {index + 1}</p>
                      <p className="text-lg text-foreground">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-border bg-background p-8 text-center md:p-12">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center bg-primary/10 text-primary">
                <CreditCard size={28} />
              </div>
              <span className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-primary">Sicher über Wix</span>
              <h2 className="mb-5 text-4xl font-display uppercase">Mitgliedschaft wählen</h2>
              <p className="mb-8 leading-relaxed text-muted-foreground">
                Wähle auf unserer externen Wix-Seite dein gewünschtes Abo. Die Anmeldung und Bezahlung werden dort sicher abgewickelt.
              </p>
              <WixMembershipButton className="w-full" />
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Du wirst zum Abschluss auf eine externe Wix-Seite weitergeleitet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
