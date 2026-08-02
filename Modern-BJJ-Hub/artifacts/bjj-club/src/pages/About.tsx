import { motion } from "framer-motion";
import { Link } from "wouter";
import { SectionHeader, staggerContainer, fadeIn } from "@/components/ui/animations";
import { Button } from "@/components/ui/button";
import leonidImage from "../../../../Leonid Bild.jpeg";

const INSTRUCTORS = [
  {
    name: "Leonid Maslovskyi",
    rank: "Schwarzgurt 1. Dan",
    role: "Cheftrainer",
    bio: [
      "Mein Name ist Leonid Maslovskyi. Ich bin 38 Jahre alt, komme aus der Ukraine und lebe seit 16 Jahren in Österreich. Seit über 12 Jahren trainiere ich Brazilian Jiu-Jitsu und bin Schwarzgurt unter Peter Pezia (ZR Team Vienna).",
      "Für mich ist Jiu-Jitsu mehr als nur ein Sport – es ist eine Lebenseinstellung. Ich glaube an Disziplin, Respekt und gegenseitige Unterstützung.",
      "Schritt für Schritt werden wir stärker. Gemeinsam helfen wir uns, nicht nur auf der Matte, sondern auch im Alltag zu wachsen.",
      "Mein Ziel ist es, ein Team aufzubauen, in dem jeder den anderen unterstützt, sein Potenzial entfaltet und die beste Version seiner selbst wird."
    ]
  }
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-background">
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.span variants={fadeIn} className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
                Tempest Jiu-Jitsu Vienna
              </motion.span>
              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-display uppercase mb-8">
                Unsere Philosophie
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl text-muted-foreground leading-relaxed">
                Wir glauben, dass Brazilian Jiu-Jitsu mehr als nur ein Sport ist. Es ist ein Werkzeug zur persönlichen Entwicklung. Auf der Matte gibt es keine Ausreden, keine Abkürzungen – nur die ehrliche Arbeit an sich selbst.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/3]"
            >
              <div className="absolute inset-0 bg-primary/20 transform -translate-x-4 -translate-y-4" />
              <img
                src={`${import.meta.env.BASE_URL}about-belt.jpg`}
                alt="BJJ Belt"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <SectionHeader title="Die Wurzeln" subtitle="Tradition & Moderne" />
              <motion.div variants={fadeIn} className="space-y-6 text-muted-foreground text-lg">
                <p>
                  Gegründet im Jahr 2015, hat sich Tempest Jiu-Jitsu Vienna schnell zu einer der renommiertesten Adressen für Kampfsport in der Region entwickelt.
                </p>
                <p>
                  Wir verbinden die traditionellen Werte des Brazilian Jiu-Jitsu – Respekt, Hingabe, Loyalität – mit modernen Trainingsmethoden und Sportwissenschaft. Unser Ziel ist es, nicht nur gute Kämpfer hervorzubringen, sondern auch gute Menschen.
                </p>
                <p>
                  Egal, ob du Fitness suchst, dich selbst verteidigen lernen willst oder Ambitionen hast, Weltmeister zu werden: Du bist hier richtig.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeader title="Das Team" subtitle="Unser Trainer" align="center" />

          <div className="max-w-6xl mx-auto mt-16">
            {INSTRUCTORS.map((instructor, i) => (
              <motion.article
                key={instructor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="grid grid-cols-1 overflow-hidden border border-border bg-card lg:grid-cols-[minmax(320px,420px)_1fr]"
              >
                <div className="relative min-h-[520px] overflow-hidden bg-muted lg:min-h-[680px]">
                  <img
                    src={leonidImage}
                    alt={`${instructor.name}, Cheftrainer bei Tempest Jiu-Jitsu Vienna`}
                    className="absolute inset-0 h-full w-full object-cover object-[50%_18%]"
                    loading="eager"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-card/80 to-transparent lg:hidden" />
                </div>

                <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
                  <div className="mb-8 flex flex-col gap-2">
                    <span className="text-primary font-bold uppercase text-xs tracking-widest">{instructor.role}</span>
                    <h3 className="text-4xl md:text-5xl font-display uppercase">{instructor.name}</h3>
                    <span className="inline-block bg-muted text-muted-foreground text-xs font-bold px-3 py-1 mt-2 self-start uppercase">
                      {instructor.rank}
                    </span>
                  </div>

                  <div className="space-y-5 text-muted-foreground text-base leading-relaxed md:text-lg">
                    {instructor.bio.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted text-center border-y border-border">
        <div className="container mx-auto px-6">
          <h3 className="font-display uppercase text-2xl mb-8">Der Weg auf der Matte</h3>
          <div className="flex justify-center items-center flex-wrap gap-4 md:gap-8">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 md:w-24 h-4 bg-white border border-gray-300"></div>
              <span className="text-xs font-bold uppercase tracking-wider">Weiß</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 md:w-24 h-4 bg-blue-600"></div>
              <span className="text-xs font-bold uppercase tracking-wider">Blau</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 md:w-24 h-4 bg-purple-700"></div>
              <span className="text-xs font-bold uppercase tracking-wider">Lila</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 md:w-24 h-4 bg-[#8b5a2b]"></div>
              <span className="text-xs font-bold uppercase tracking-wider">Braun</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 md:w-24 h-4 bg-black border border-gray-800 flex justify-end items-center">
                <div className="h-full w-4 bg-red-600"></div>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider">Schwarz</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 text-center container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display uppercase mb-6">Werde Teil des Teams</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Wirf deine Zweifel über Bord. Komm vorbei und lerne uns kennen.
        </p>
        <Button size="lg" asChild>
          <Link href="/kontakt">Nachricht schreiben</Link>
        </Button>
      </section>
    </div>
  );
}
