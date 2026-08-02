import { motion } from "framer-motion";
import { Link } from "wouter";
import { staggerContainer, fadeIn } from "@/components/ui/animations";
import { Button } from "@/components/ui/button";
import leonidImage from "../../../../Leonid Bild.jpeg";

const INSTRUCTORS = [
  {
    name: "Leonid Maslovskyi",
    rank: "Schwarzgurt 1. Dan",
    role: "Cheftrainer",
    bio: [
      "Mein Name ist Leonid Maslovskyi. Ich bin 38 Jahre alt, komme aus der Ukraine und lebe seit 16 Jahren in Österreich. Seit über 12 Jahren trainiere ich Brazilian Jiu-Jitsu und bin Schwarzgurt unter Peter Pecija (ZR Team Vienna).",
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
              <motion.div variants={fadeIn} className="mx-auto max-w-3xl space-y-5 text-xl text-muted-foreground leading-relaxed">
                <p className="text-2xl md:text-3xl font-display uppercase text-foreground">Tempest</p>
                <p>Ein Sturm entsteht nicht aus einem einzigen Wind.</p>
                <p>Er entsteht, wenn viele Kräfte zu einer werden.</p>
                <p className="font-semibold text-foreground">Genau das ist Tempest.</p>
                <p>
                  Jeder beginnt seinen eigenen Weg. Doch gemeinsam werden wir stärker, mutiger und zu einer Kraft, die nur schwer aufzuhalten ist.
                </p>
                <p className="pt-2 font-bold uppercase tracking-[0.16em] text-primary">
                  Train together. Grow together. Become the Storm.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-24">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-5xl md:text-7xl font-display uppercase"
          >
            Unser Trainer
          </motion.h2>

          <div className="max-w-6xl mx-auto mt-16">
            {INSTRUCTORS.map((instructor, i) => (
              <motion.article
                key={instructor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="grid grid-cols-1 overflow-hidden border border-border bg-background lg:grid-cols-[minmax(320px,420px)_1fr]"
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

      <section className="py-24 text-center container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display uppercase mb-6">Werde Teil des Teams</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Wirf deine Zweifel über Bord. Komm vorbei und lerne uns kennen.
        </p>
        <Button size="lg" asChild>
          <Link href="/mitglied-werden">Mitglied werden</Link>
        </Button>
      </section>
    </div>
  );
}
