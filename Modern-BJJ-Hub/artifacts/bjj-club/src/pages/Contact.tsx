import { motion } from "framer-motion";
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
    // Simulate API call
    console.log("Form submitted:", data);
    toast({
      title: "Nachricht gesendet",
      description: "Wir melden uns in Kürze bei dir!",
    });
    form.reset();
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-background">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeader title="Kontakt" subtitle="Tritt auf die Matte" align="center" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 max-w-6xl mx-auto">
            
            {/* Contact Info */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-12"
            >
              <div>
                <motion.h3 variants={fadeIn} className="text-2xl font-display uppercase mb-6">
                  Wir sind für dich da
                </motion.h3>
                <motion.p variants={fadeIn} className="text-muted-foreground text-lg mb-8">
                  Hast du Fragen zum Training, möchtest du ein Probetraining vereinbaren oder einfach Hallo sagen? Schreib uns eine Nachricht.
                </motion.p>
              </div>

              <div className="grid gap-8">
                <motion.div variants={fadeIn} className="flex items-start gap-4">
                  <div className="bg-muted p-4 rounded-sm text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wider mb-1">Dojo</h4>
                    <p className="text-muted-foreground">Kampfstraße 42<br />10115 Berlin</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex items-start gap-4">
                  <div className="bg-muted p-4 rounded-sm text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wider mb-1">Telefon</h4>
                    <p className="text-muted-foreground">+49 123 4567890</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex items-start gap-4">
                  <div className="bg-muted p-4 rounded-sm text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wider mb-1">E-Mail</h4>
                    <p className="text-muted-foreground">info@bjj-academy.de</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex items-start gap-4">
                  <div className="bg-muted p-4 rounded-sm text-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wider mb-1">Trainingszeiten</h4>
                    <p className="text-muted-foreground">Mo, Mi, Fr: 18:00 - 21:00<br />Sa: 10:00 - 13:00</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border p-8 md:p-12"
            >
              <h3 className="text-3xl font-display uppercase mb-8">Nachricht senden</h3>
              
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                    Dein Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    {...form.register("name")} 
                    className="bg-background border-border focus-visible:ring-primary"
                  />
                  {form.formState.errors.name && (
                    <p className="text-destructive text-sm">{form.formState.errors.name.message}</p>
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
                    className="bg-background border-border focus-visible:ring-primary"
                  />
                  {form.formState.errors.email && (
                    <p className="text-destructive text-sm">{form.formState.errors.email.message}</p>
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
                    className="bg-background border-border focus-visible:ring-primary min-h-[150px]"
                  />
                  {form.formState.errors.message && (
                    <p className="text-destructive text-sm">{form.formState.errors.message.message}</p>
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

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-muted border-t border-border flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Berlin_city_map_-_vector.svg/1024px-Berlin_city_map_-_vector.svg.png')] bg-cover bg-center" />
        <div className="relative z-10 bg-background/90 backdrop-blur-sm p-6 border border-border text-center">
          <MapPin size={32} className="text-primary mx-auto mb-3" />
          <h4 className="font-display text-xl uppercase mb-1">BJJ Academy</h4>
          <p className="text-muted-foreground text-sm">Kampfstraße 42, 10115 Berlin</p>
        </div>
      </section>
    </div>
  );
}
