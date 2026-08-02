import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer, SectionHeader } from "@/components/ui/animations";
import { Shield, Users, Trophy, ChevronRight } from "lucide-react";
import introImage from "../../../../Leonid und Prof.jpeg";

const FEATURES = [
  {
    icon: <Users size={32} className="text-primary" />,
    title: "Gemeinschaft",
    description:
      "Trainiere mit Gleichgesinnten in einer respektvollen und unterstützenden Atmosphäre. Auf der Matte sind wir alle gleich.",
  },
  {
    icon: <Shield size={32} className="text-primary" />,
    title: "Disziplin",
    description:
      "BJJ ist mehr als Sport. Es ist eine Schule für den Charakter. Lerne Fokus, Geduld und echte mentale Stärke.",
  },
  {
    icon: <Trophy size={32} className="text-primary" />,
    title: "Elite Trainer",
    description:
      "Lerne von erfahrenen Schwarzgurten, die ihr Wissen mit Leidenschaft und Präzision an dich weitergeben.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 md:h-screen md:items-start md:pt-24">
        <div
          className="absolute inset-0 bg-cover bg-[62%_center] bg-no-repeat md:bg-center"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}hero-bg.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />

        <div className="container relative z-10 mx-auto px-6 py-12 md:pt-28 md:pb-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl md:-translate-y-24 lg:-translate-y-28"
          >
            <motion.div variants={fadeIn} className="mb-5 flex items-center gap-3 md:mb-6 md:gap-4">
              <div className="h-[2px] w-9 bg-primary md:w-12" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary sm:text-sm sm:tracking-[0.2em]">
                Tempest Jiu-Jitsu Vienna
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="mb-6 text-5xl font-display font-bold uppercase leading-[0.9] sm:text-6xl md:mb-8 md:text-7xl lg:text-8xl"
            >
              Schmiede <br />
              <span
                className="text-transparent stroke-text"
                style={{ WebkitTextStroke: "2px hsl(var(--foreground))" }}
              >
                Deinen
              </span>{" "}
              <br />
              Charakter
            </motion.h1>

            <motion.p variants={fadeIn} className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg md:mb-10 md:text-xl">
              Werde Teil von Tempest Jiu-Jitsu Vienna. Der Ort in Österreich für ernsthafte Kampfkünstler, die nach Exzellenz streben. Bereit für die Matte?
            </motion.p>

            <motion.div variants={fadeIn} className="flex max-w-xl flex-col gap-4 sm:flex-row">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/kontakt">Probetraining vereinbaren</Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <Link href="/ueber-uns">Mehr erfahren</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <SectionHeader title="Die Kunst des Kampfes" subtitle="Was ist BJJ?" />
              <motion.div variants={fadeIn} className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg md:space-y-6">
                <p>
                  Brazilian Jiu-Jitsu ist eine der effektivsten Kampfkünste der Welt. Es basiert auf Hebelwirkung, Technik und Timing statt auf roher Kraft.
                </p>
                <p>
                  Auf der Matte lernst du nicht nur, wie du dich verteidigst, sondern auch, wie du unter Druck ruhig bleibst. Es ist ein physisches Schachspiel, das Körper und Geist gleichermaßen fordert.
                </p>
                <div className="pt-2 md:pt-4">
                  <Button variant="link" className="group flex items-center gap-2 px-0" asChild>
                    <Link href="/ueber-uns">
                      Unsere Philosophie{" "}
                      <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
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
              className="relative mx-auto aspect-[4/5] w-full max-w-[520px] lg:ml-auto"
            >
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-primary/20 md:translate-x-4 md:translate-y-4" />
              <div className="absolute inset-0 overflow-hidden border border-border bg-[#2b2e34]">
                <img
                  src={introImage}
                  alt="Leonid und Prof bei Tempest Jiu-Jitsu Vienna"
                  className="h-full w-full object-cover object-[50%_12%] grayscale transition-all duration-700 hover:grayscale-0"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-16 md:py-24">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Warum bei uns?"
            subtitle="Tempest Jiu-Jitsu Vienna"
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="group border border-border bg-background p-8 transition-colors hover:border-primary md:p-10"
              >
                <div className="mb-6 transform transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="mb-4 text-2xl font-display uppercase">{feature.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted py-16 text-center md:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-3 block text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Deine Entwicklung im Brazilian Jiu-Jitsu
            </span>
            <h2 className="mb-10 text-4xl font-display uppercase sm:text-5xl md:text-6xl">
              Der Weg auf der Matte
            </h2>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-7 md:gap-12">
            <div className="flex flex-col items-center gap-3">
              <div className="h-5 w-24 border border-gray-300 bg-white md:w-32" />
              <span className="text-xs font-bold uppercase tracking-wider">Weiß</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="h-5 w-24 bg-blue-600 md:w-32" />
              <span className="text-xs font-bold uppercase tracking-wider">Blau</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="h-5 w-24 bg-purple-700 md:w-32" />
              <span className="text-xs font-bold uppercase tracking-wider">Lila</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="h-5 w-24 bg-[#8b5a2b] md:w-32" />
              <span className="text-xs font-bold uppercase tracking-wider">Braun</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-5 w-24 items-center justify-end border border-gray-800 bg-black md:w-32">
                <div className="h-full w-5 bg-red-600" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider">Schwarz</span>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Jeder Gürtel steht für Erfahrung, Disziplin und persönliches Wachstum. Entscheidend ist nicht, wie schnell du vorankommst, sondern dass du deinen Weg konsequent weitergehst.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground md:py-24">
        <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/3 opacity-10">
          <span className="select-none text-[20rem] font-display font-bold leading-none">BJJ</span>
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="mb-6 text-4xl font-display uppercase sm:text-5xl md:text-6xl">Bereit für die Matte?</h2>
            <p className="mb-8 text-lg text-primary-foreground/90 md:mb-10 md:text-xl">
              Der beste Tag, um mit Brazilian Jiu-Jitsu anzufangen, war vor 10 Jahren. Der zweitbeste Tag ist heute. Komm vorbei und teste es selbst.
            </p>
            <Button size="lg" variant="secondary" className="text-primary hover:bg-white hover:text-primary" asChild>
              <Link href="/kontakt">Kostenloses Probetraining</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
