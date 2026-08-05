import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ExternalLink, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeader, staggerContainer, fadeIn } from "@/components/ui/animations";
import { useToast } from "@/hooks/use-toast";

/*
 * WIX-KONTAKTFORMULAR
 * Sobald die Wix-Kontaktseite fertig ist, hier die vollständige URL eintragen.
 * Beispiel: https://deine-wix-seite.at/kontakt
 */
const WIX_CONTACT_URL = "";

const formSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein."),
  email: z.string().email("Bitte gib eine gültige E-Mail-Adresse ein."),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein."),
});

type FormValues = z.infer<typeof formSchema>;

function WixContactButton() {
  if (WIX_CONTACT_URL) {
    return (
      <Button type="button" size="lg" variant="outline" className="w-full" asChild>
        <a href={WIX_CONTACT_URL} target="_blank" rel="noopener noreferrer">
          Kontaktformular öffnen
          <ExternalLink size={18} />
        </a>
      </Button>
    );
  }

  return (
    <Button type="button" size="lg" variant="outline" className="w-full" disabled>
      Kontaktformular folgt
    </Button>
  );
}

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    toast({
      title: "Nachricht gesendet",
      description: "Wir melden uns in Kürze bei dir!",
    });
    form.reset();
  };

  return (
    <div className="flex min-h-screen flex-col bg-background pt-24">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeader title="Kontakt" subtitle="Tritt auf die Matte" align="center" />

          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-12"
            >
              <div>
                <motion.h3 variants={fadeIn} className="mb-6 text-2xl font-display uppercase">
                  Wir sind für dich da
                </motion.h3>
                <motion.p variants={fadeIn} className="mb-8 text-lg text-muted-foreground">
                  Hast du Fragen zum Training, möchtest du ein Probetraining vereinbaren oder einfach Hallo sagen? Schreib uns eine Nachricht.
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
                    <p className="text-muted-foreground">Mo, Mi, Fr: 18:00 - 21:00<br />Sa: 10:00 - 13:00</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="border border-border bg-card p-8 md:p-12"
            >
              <h3 className="mb-8 text-3xl font-display uppercase">Nachricht senden</h3>

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                    Dein Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    {...form.register("name")}
                    className="border-border bg-background focus-visible:ring-primary"
                  />
                  {form.formState.errors.name && (
                    <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                    Deine E-Mail
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    {...form.register("email")}
                    className="border-border bg-background focus-visible:ring-primary"
                  />
                  {form.formState.errors.email && (
                    <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                    Deine Nachricht
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Ich möchte gerne ein Probetraining vereinbaren..."
                    {...form.register("message")}
                    className="min-h-[150px] border-border bg-background focus-visible:ring-primary"
                  />
                  {form.formState.errors.message && (
                    <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Senden
                </Button>
              </form>

              <div className="my-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-border" />
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Alternativ</span>
                <div className="h-px flex-1 bg-border" />
              </div>

              <WixContactButton />
              {!WIX_CONTACT_URL && (
                <p className="mt-3 text-center text-xs leading-relaxed text-muted-foreground">
                  Die Verlinkung zum Wix-Kontaktformular wird ergänzt, sobald die Wix-Seite fertig ist.
                </p>
              )}
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
                src={`${import.meta.env.BASE_URL}about-belt.jpg`}
                alt="Brazilian Jiu-Jitsu bei Tempest Jiu-Jitsu Vienna"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <SectionHeader title="Wir hören dir zu" subtitle="Dein Kontakt zu Tempest" />
              <motion.div variants={fadeIn} className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Jede Reise auf der Matte beginnt mit einer Frage, einem ersten Besuch oder einer kurzen Nachricht.
                </p>
                <p>
                  Ob Probetraining, Trainingsablauf oder allgemeine Informationen: Wir nehmen uns Zeit für dein Anliegen und helfen dir persönlich weiter.
                </p>
                <p>
                  Schreib uns über das Formular oder direkt per E-Mail. Wir melden uns so schnell wie möglich bei dir.
                </p>
                <Button size="lg" asChild>
                  <a href="mailto:kontakt@tempestbjjvienna.at">E-Mail schreiben</a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
