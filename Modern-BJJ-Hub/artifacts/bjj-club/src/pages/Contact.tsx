import { motion } from "framer-motion";
import {
  ExternalLink,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SectionHeader,
  staggerContainer,
  fadeIn,
} from "@/components/ui/animations";

/*
 * WIX-KONTAKTFORMULAR
 * Sobald die Wix-Kontaktseite fertig ist, hier die vollständige URL eintragen.
 * Beispiel: https://deine-wix-seite.at/kontakt
 */
const WIX_CONTACT_URL = "";

const CONTACT_IMAGE = "data:image/jpeg;base64,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[...]";

function WixContactButton() {
  if (WIX_CONTACT_URL) {
    return (
      <Button size="lg" className="w-full" asChild>
        <a href={WIX_CONTACT_URL} target="_blank" rel="noopener noreferrer">
          Kontaktformular öffnen
          <ExternalLink size={18} />
        </a>
      </Button>
    );
  }

  return (
    <Button size="lg" className="w-full" disabled>
      Kontaktformular folgt
    </Button>
  );
}

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col bg-background pt-24">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Kontakt"
            subtitle="Tritt auf die Matte"
            align="center"
          />

          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-12"
            >
              <div>
                <motion.h3
                  variants={fadeIn}
                  className="mb-6 text-2xl font-display uppercase"
                >
                  Wir sind für dich da
                </motion.h3>
                <motion.p
                  variants={fadeIn}
                  className="mb-8 text-lg text-muted-foreground"
                >
                  Hast du Fragen zum Training, möchtest du ein Probetraining
                  vereinbaren oder einfach Hallo sagen? Nimm gerne Kontakt mit
                  uns auf.
                </motion.p>
              </div>

              <div className="grid gap-8">
                <motion.div variants={fadeIn} className="flex items-start gap-4">
                  <div className="rounded-sm bg-muted p-4 text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold uppercase tracking-wider">Standort</h4>
                    <p className="text-muted-foreground">Standort folgt bald</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex items-start gap-4">
                  <div className="rounded-sm bg-muted p-4 text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold uppercase tracking-wider">Telefon</h4>
                    <a href="tel:+436763196205" className="text-muted-foreground transition-colors hover:text-primary">
                      0676 3196205
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex items-start gap-4">
                  <div className="rounded-sm bg-muted p-4 text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold uppercase tracking-wider">E-Mail</h4>
                    <a href="mailto:kontakt@tempestbjjvienna.at" className="text-muted-foreground transition-colors hover:text-primary">
                      kontakt@tempestbjjvienna.at
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex items-start gap-4">
                  <div className="rounded-sm bg-muted p-4 text-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold uppercase tracking-wider">Trainingszeiten</h4>
                    <p className="text-muted-foreground">
                      Mo, Mi, Fr: 18:00 - 21:00
                      <br />
                      Sa: 10:00 - 13:00
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative flex min-h-[460px] flex-col justify-center overflow-hidden border border-border bg-card p-8 md:p-12"
            >
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative">
                <div className="mb-7 flex h-16 w-16 items-center justify-center bg-primary/10 text-primary">
                  <MessageCircle size={32} />
                </div>

                <span className="mb-3 block text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  Schnell und unkompliziert
                </span>
                <h3 className="mb-5 text-4xl font-display uppercase md:text-5xl">
                  Kontakt aufnehmen
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                  Du möchtest ein Probetraining vereinbaren oder hast Fragen zu
                  Tempest Jiu-Jitsu Vienna?
                </p>
                <p className="mb-9 leading-relaxed text-muted-foreground">
                  Nutze unser Kontaktformular auf Wix. Wir melden uns so schnell
                  wie möglich bei dir zurück.
                </p>

                <WixContactButton />

                {!WIX_CONTACT_URL && (
                  <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
                    Die Verlinkung wird ergänzt, sobald die Wix-Kontaktseite
                    fertig ist.
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-20 md:py-24">
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
                src={CONTACT_IMAGE}
                alt="Tempest Jiu-Jitsu Vienna – Schwarzgurt im weißen Gi"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <SectionHeader
                title="Wir hören dir zu"
                subtitle="Dein Kontakt zu Tempest"
              />
              <motion.div
                variants={fadeIn}
                className="space-y-6 text-lg leading-relaxed text-muted-foreground"
              >
                <p>
                  Jede Reise auf der Matte beginnt mit einer Frage, einem ersten
                  Besuch oder einer kurzen Nachricht.
                </p>
                <p>
                  Ob Probetraining, Trainingsablauf oder allgemeine
                  Informationen: Wir nehmen uns Zeit für dein Anliegen und
                  helfen dir persönlich weiter.
                </p>
                <p>
                  Nutze später unser Wix-Kontaktformular oder schreibe uns direkt
                  per E-Mail. Wir melden uns so schnell wie möglich bei dir.
                </p>
                <Button size="lg" asChild>
                  <a href="mailto:kontakt@tempestbjjvienna.at">
                    E-Mail schreiben
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
