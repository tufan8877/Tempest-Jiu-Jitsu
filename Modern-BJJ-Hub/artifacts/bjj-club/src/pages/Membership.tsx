import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check, Shield, Users, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader, staggerContainer, fadeIn } from "@/components/ui/animations";

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
  "Schreib uns eine kurze Nachricht.",
  "Vereinbare dein persönliches Probetraining.",
  "Lerne das Team und das Training kennen.",
  "Starte deinen Weg bei Tempest Jiu-Jitsu Vienna.",
];

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
              Werde Teil von Tempest Jiu-Jitsu Vienna und beginne deinen Weg in einem Team, das gemeinsam trainiert, wächst und stärker wird.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border bg-card py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/3]"
            >
              <div className="absolute inset-0 -translate-x-3 -translate-y-3 bg-primary/20 md:-translate-x-4 md:-translate-y-4" />
              <img
                src={`${import.meta.env.BASE_URL}about-belt.jpg`}
                alt="Brazilian Jiu-Jitsu Gürtel bei Tempest Jiu-Jitsu Vienna"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <SectionHeader title="Die Wurzeln" subtitle="Tradition & Moderne" />
              <motion.div variants={fadeIn} className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Gegründet im Jahr 2015, hat sich Tempest Jiu-Jitsu Vienna schnell zu einer renommierten Adresse für Kampfsport entwickelt.
                </p>
                <p>
                  Wir verbinden die traditionellen Werte des Brazilian Jiu-Jitsu – Respekt, Hingabe und Loyalität – mit modernen Trainingsmethoden und Sportwissenschaft. Unser Ziel ist es, nicht nur gute Kämpfer hervorzubringen, sondern auch starke Persönlichkeiten.
                </p>
                <p>
                  Egal, ob du Fitness suchst, Selbstverteidigung lernen möchtest oder sportliche Ziele verfolgst: Bei uns findest du den richtigen Einstieg.
                </p>
              </motion.div>
            </motion.div>
          </div>
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
              <span className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-primary">So einfach geht es</span>
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
              <span className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-primary">Bereit?</span>
              <h2 className="mb-5 text-4xl font-display uppercase">Jetzt starten</h2>
              <p className="mb-8 leading-relaxed text-muted-foreground">
                Melde dich bei uns und vereinbare dein Probetraining. Wir beantworten deine Fragen und begleiten dich beim Einstieg.
              </p>
              <Button size="lg" className="w-full" asChild>
                <Link href="/kontakt">Probetraining vereinbaren</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
