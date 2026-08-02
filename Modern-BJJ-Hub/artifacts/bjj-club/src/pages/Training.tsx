import { motion } from "framer-motion";
import { Link } from "wouter";
import { Clock, CalendarDays, Dumbbell, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer } from "@/components/ui/animations";

const TRAINING_DAYS = [
  {
    day: "Montag",
    sessions: [
      { name: "BJJ Basics", time: "18:00 – 19:30", level: "Einsteiger & Grundlagen" },
      { name: "BJJ Advanced", time: "19:30 – 21:00", level: "Fortgeschrittene" },
    ],
  },
  {
    day: "Dienstag",
    sessions: [
      { name: "BJJ All Levels", time: "18:30 – 20:00", level: "Alle Levels" },
      { name: "Sparring", time: "20:00 – 21:00", level: "Freies Rollen" },
    ],
  },
  {
    day: "Mittwoch",
    sessions: [
      { name: "No-Gi Grappling", time: "18:30 – 20:00", level: "Alle Levels" },
      { name: "Open Mat", time: "20:00 – 21:30", level: "Freies Training" },
    ],
  },
  {
    day: "Donnerstag",
    sessions: [
      { name: "BJJ Basics", time: "18:00 – 19:30", level: "Einsteiger & Grundlagen" },
      { name: "Technikkurs", time: "19:30 – 21:00", level: "Alle Levels" },
    ],
  },
  {
    day: "Freitag",
    sessions: [
      { name: "BJJ All Levels", time: "18:00 – 19:30", level: "Alle Levels" },
      { name: "Wettkampftraining", time: "19:30 – 21:00", level: "Ambitionierte & Wettkämpfer" },
    ],
  },
  {
    day: "Samstag",
    sessions: [
      { name: "BJJ Basics", time: "10:00 – 11:30", level: "Einsteiger & Grundlagen" },
      { name: "Open Mat", time: "11:30 – 13:00", level: "Freies Training" },
    ],
  },
];

const NOTES = [
  {
    icon: <Dumbbell size={24} />,
    title: "Für jedes Level",
    text: "Einsteiger können jederzeit beginnen. Unsere Einheiten sind klar aufgebaut und werden individuell angepasst.",
  },
  {
    icon: <Clock size={24} />,
    title: "Bitte früher kommen",
    text: "Komm beim ersten Training etwa 15 Minuten vor Beginn, damit wir dir alles in Ruhe zeigen können.",
  },
  {
    icon: <Sparkles size={24} />,
    title: "Probetraining",
    text: "Für dein erstes Training brauchst du nur bequeme Sportkleidung, Wasser und Motivation.",
  },
];

export default function Training() {
  return (
    <div className="min-h-screen bg-background pt-28 md:pt-32">
      <section className="relative overflow-hidden border-b border-border py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.16),transparent_42%)]" />
        <div className="container relative mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div variants={fadeIn} className="mb-5 flex items-center justify-center gap-3">
              <div className="h-[2px] w-10 bg-primary" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Wann wir trainieren
              </span>
              <div className="h-[2px] w-10 bg-primary" />
            </motion.div>
            <motion.h1 variants={fadeIn} className="mb-6 text-5xl font-display uppercase sm:text-6xl md:text-7xl">
              Trainingszeiten
            </motion.h1>
            <motion.p variants={fadeIn} className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Finde die passende Einheit für dein Level. Technik, Sparring, No-Gi und Open Mat – gemeinsam werden wir stärker.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl space-y-5">
            {TRAINING_DAYS.map((day, index) => (
              <motion.article
                key={day.day}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.06 }}
                className="overflow-hidden border border-border bg-card transition-colors hover:border-primary/60"
              >
                <div className="grid md:grid-cols-[220px_1fr]">
                  <div className="flex items-center gap-4 border-b border-border bg-muted px-6 py-6 md:border-b-0 md:border-r md:px-8">
                    <CalendarDays className="text-primary" size={25} />
                    <h2 className="text-2xl font-display uppercase">{day.day}</h2>
                  </div>
                  <div className="grid gap-0 sm:grid-cols-2">
                    {day.sessions.map((session, sessionIndex) => (
                      <div
                        key={`${day.day}-${session.name}`}
                        className={`p-6 md:p-8 ${sessionIndex === 0 ? "border-b border-border sm:border-b-0 sm:border-r" : ""}`}
                      >
                        <div className="mb-3 flex items-center gap-2 text-primary">
                          <Clock size={18} />
                          <span className="font-bold">{session.time}</span>
                        </div>
                        <h3 className="mb-2 text-xl font-display uppercase">{session.name}</h3>
                        <p className="text-sm text-muted-foreground">{session.level}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {NOTES.map((note, index) => (
              <motion.div
                key={note.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="border border-border bg-background p-7"
              >
                <div className="mb-5 text-primary">{note.icon}</div>
                <h3 className="mb-3 text-xl font-display uppercase">{note.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{note.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Bereit für deine erste Einheit?
            </span>
            <h2 className="mb-6 text-4xl font-display uppercase sm:text-5xl md:text-6xl">
              Komm zum Probetraining
            </h2>
            <p className="mb-9 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Schreib uns kurz, welche Einheit dich interessiert. Wir melden uns bei dir und helfen dir beim Einstieg.
            </p>
            <Button size="lg" asChild>
              <Link href="/kontakt">Probetraining vereinbaren</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
