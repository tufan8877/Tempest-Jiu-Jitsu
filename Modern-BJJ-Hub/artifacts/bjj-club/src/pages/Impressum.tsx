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
          
          <h3>BJJ Academy e.V.</h3>
          <p>
            Kampfstraße 42<br />
            10115 Berlin<br />
            Deutschland
          </p>
          
          <h3>Vertreten durch:</h3>
          <p>
            Prof. Ricardo Santos (1. Vorsitzender)<br />
            Lukas Weber (2. Vorsitzender)
          </p>
          
          <h3>Kontakt:</h3>
          <p>
            Telefon: +49 123 4567890<br />
            E-Mail: info@bjj-academy.de
          </p>
          
          <h3>Registereintrag:</h3>
          <p>
            Eintragung im Vereinsregister.<br />
            Registergericht: Amtsgericht Charlottenburg<br />
            Registernummer: VR 123456 B
          </p>
          
          <h3>Umsatzsteuer-ID:</h3>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE 999 999 999
          </p>
          
          <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h3>
          <p>
            Ricardo Santos<br />
            Kampfstraße 42<br />
            10115 Berlin
          </p>
          
          <h3>Streitschlichtung</h3>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
          
          <h3>Haftung für Inhalte</h3>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </div>
      </div>
    </div>
  );
}
