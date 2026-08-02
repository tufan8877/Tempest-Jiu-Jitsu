import { SectionHeader } from "@/components/ui/animations";

export default function Impressum() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <SectionHeader title="Impressum" />
        
        <div className="prose prose-invert max-w-none prose-headings:font-display prose-headings:uppercase prose-a:text-primary hover:prose-a:text-primary/80">
          <p>
            Angaben gemäß § 5 TMG:
          </p>
          
          <h3>Tempest Jiu-Jitsu Vienna</h3>
          <p>
            Trainingsstandort wird in Kürze bekannt gegeben.
          </p>
          
          <h3>Vertreten durch:</h3>
          <p>
            Leonid (1. Vorsitzender)
          </p>
          
          <h3>Kontakt:</h3>
          <p>
            Telefon: <a href="tel:+436763196205">0676 3196205</a><br />
            E-Mail: <a href="mailto:kontakt@tempestbjjvienna.at">kontakt@tempestbjjvienna.at</a>
          </p>
          
          <h3>Registereintrag:</h3>
          <p>
            Eintragung im Vereinsregister.<br />
            Weitere Angaben folgen.
          </p>
          
          <h3>Verantwortlich für den Inhalt:</h3>
          <p>
            Leonid
          </p>
          
          <h3>Streitschlichtung</h3>
          <p>
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
          
          <h3>Haftung für Inhalte</h3>
          <p>
            Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </div>
      </div>
    </div>
  );
}
