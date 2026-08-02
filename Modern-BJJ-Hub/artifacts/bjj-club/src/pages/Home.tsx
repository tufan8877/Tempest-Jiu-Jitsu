import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer, SectionHeader } from "@/components/ui/animations";
import { Shield, Users, Trophy, ChevronRight } from "lucide-react";
import leonidAndProfImage from "../../../../Leonid und Prof.jpeg";

const FEATURES = [
  {
    icon: <Users size={32} className="text-primary" />,
    title: "Gemeinschaft",
    description: "Trainiere mit Gleichgesinnten in einer respektvollen und unterstützenden Atmosphäre. Auf der Matte sind wir alle gleich."
  },
  {
    icon: <Shield size={32} className="text-primary" />,
    title: "Disziplin",
    description: "BJJ ist mehr als Sport. Es ist eine Schule für den Charakter. Lerne Fokus, Geduld und echte mentale Stärke."
  },
  {
    icon: <Trophy size={32} className="text-primary" />,
    title: "Elite Trainer",
    description: "Lerne von erfahrenen Schwarzgurten, die ihr Wissen mit Leidenschaft und Präzision an dich weitergeben."
  }
];

const SCHEDULE = [
  { day: "Montag", classes: [{ name: "BJJ Basics", time: "18:00 - 19:30" }, { name: "BJJ Advanced", time: "19:30 - 21:00" }] },
  { day: "Dienstag", classes: [{ name: "BJJ All Levels", time: "18:30 - 20:00" }, { name: "Sparring", time: "20:00 - 21:00" }] },
  { day: "Mittwoch", classes: [{ name: "No-Gi Grappling", time: "18:30 - 20:00" }, { name: "Open Mat", time: "20:00 - 21:30" }] },
  { day: "Donnerstag", classes: [{ name: "BJJ Basics", time: "18:00 - 19:30" }, { name: "Technikkurs", time: "19:30 - 21:00" }] },
  { day: "Freitag", classes: [{ name: "BJJ All Levels", time: "18:00 - 19:30" }, { name: "Wettkampftraining", time: "19:30 - 21:00" }] },
  { day: "Samstag", classes: [{ name: "BJJ Basics", time: "10:00 - 11:30" }, { name: "Open Mat", time: "11:30 - 13:00" }] },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}hero-bg.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />

        <div className="container relative z-10 px-6 pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeIn} className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-primary" />
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">
                Elite Brazilian Jiu-Jitsu
              </span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] mb-8 uppercase">
              Schmiede <br />
              <span className="text-transparent stroke-text" style={{ WebkitTextStroke: "2px hsl(var(--foreground))" }}>Deinen</span> <br />
              Charakter
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl">
              Werde Teil von Tempest Jiu-Jitsu Vienna. Der Ort in Österreich für ernsthafte Kampfkünstler, die nach Exzellenz streben. Bereit für die Matte?
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/kontakt">Probetraining vereinbaren</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/ueber-uns">Mehr erfahren</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <SectionHeader
                title="Die Kunst des Kampfes"
                subtitle="Was ist BJJ?"
              />
              <motion.div variants={fadeIn} className="space-y-6 text-muted-foreground text-lg">
                <p>
                  Brazilian Jiu-Jitsu ist eine der effektivsten Kampfkünste der Welt. Es basiert auf Hebelwirkung, Technik und Timing statt auf roher Kraft.
                </p>
                <p>
                  Auf der Matte lernst du nicht nur, wie du dich verteidigst, sondern auch, wie du unter Druck ruhig bleibst. Es ist ein physisches Schachspiel, das Körper und Geist gleichermaßen fordert.
                </p>
                <div className="pt-4">
                  <Button variant="link" className="px-0 flex items-center gap-2 group" asChild>
                    <Link href="/ueber-uns">
                      Unsere Philosophie <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/3] w-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/20 transform translate-x-4 translate-y-4" />
              <img
                src={leonidAndProfImage}
                alt="Leonid Maslovskyi mit seinem BJJ-Professor"
                className="absolute inset-0 w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                loading="eager"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Warum bei uns?"
            subtitle="Tempest Jiu-Jitsu Vienna"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="bg-background p-10 border border-border group hover:border-primary transition-colors"
              >
                <div className="mb-6 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-display uppercase mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Trainingszeiten"
              subtitle="Wann wir rollen"
              align="center"
            />

            <div className="mt-16 space-y-4">
              {SCHEDULE.map((dayData, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col md:flex-row border border-border bg-card overflow-hidden group hover:border-primary/50 transition-colors"
                >
                  <div className="bg-muted px-8 py-6 md:w-1/3 flex items-center justify-between md:justify-start group-hover:bg-primary/10 transition-colors">
                    <h4 className="font-display text-xl uppercase tracking-wider">{dayData.day}</h4>
                  </div>
                  <div className="p-6 md:w-2/3 flex flex-col sm:flex-row gap-6 sm:gap-12">
                    {dayData.classes.map((c, j) => (
                      <div key={j} className="flex-1">
                        <p className="text-primary font-bold mb-1">{c.time}</p>
                        <p className="font-semibold text-lg">{c.name}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">Alle Kurse finden in unserem Dojo in der Kampfstraße 42 statt.</p>
              <Button asChild>
                <Link href="/kontakt">Jetzt Platz sichern</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 opacity-10">
          <span className="text-[20rem] font-display font-bold leading-none select-none">BJJ</span>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-display uppercase mb-6">Bereit für die Matte?</h2>
            <p className="text-xl mb-10 text-primary-foreground/90">
              Der beste Tag, um mit Brazilian Jiu-Jitsu anzufangen, war vor 10 Jahren. Der zweitbeste Tag ist heute. Komm vorbei und teste es selbst.
            </p>
            <Button size="lg" variant="secondary" className="text-primary hover:text-primary hover:bg-white" asChild>
              <Link href="/kontakt">Kostenloses Probetraining</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
