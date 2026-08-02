import { motion } from "framer-motion";
import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeader, staggerContainer, fadeIn } from "@/components/ui/animations";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein."),
  email: z.string().email("Bitte gib eine gültige E-Mail-Adresse ein."),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein."),
});

type FormValues = z.infer<typeof formSchema>;

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
                    <h4 className="mb-1 font-bold uppercase tracking-wider">Dojo</h4>
                    <p className="text-muted-foreground">Kampfstraße 42<br />10115 Berlin</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex items-start gap-4">
                  <div className="rounded-sm bg-muted p-4 text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold uppercase tracking-wider">Telefon</h4>
                    <p className="text-muted-foreground">+49 123 4567890</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex items-start gap-4">
                  <div className="rounded-sm bg-muted p-4 text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold uppercase tracking-wider">E-Mail</h4>
                    <p className="text-muted-foreground">info@bjj-academy.de</p>
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
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border bg-muted py-16 text-center md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.12),transparent_60%)]" />
        <div className="container relative mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <span className="mb-3 block text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Deine Reise beginnt hier
            </span>
            <h2 className="mb-4 text-4xl font-display uppercase sm:text-5xl md:text-6xl">
              Hier beginnt dein Weg
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Jeder Schwarzgurt hat einmal als Weißgurt begonnen. Der erste Schritt ist, auf die Matte zu kommen.
            </p>

            <div className="mb-10 flex flex-wrap items-end justify-center gap-4 md:gap-8">
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

            <Button size="lg" className="px-10" asChild>
              <Link href="/mitglied-werden">Jetzt Mitglied werden</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
