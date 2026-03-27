import { Leaf, Heart, Shield } from "lucide-react";
import logo from "@/assets/logo.png";

const AboutPage = () => (
  <div className="min-h-screen">
    <section className="py-16 md:py-24 bg-gradient-dark">
      <div className="container text-center">
        <img src={logo} alt="Sellami Honey" className="w-32 h-32 mx-auto mb-6 glow-gold rounded-full" />
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-gradient-gold mb-4">À Propos de Sellami Honey</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Depuis des générations, la famille Sellami apiculte dans les régions naturelles de Tunisie,
          perpétuant un savoir-faire artisanal qui garantit un miel d'une pureté exceptionnelle.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container max-w-3xl space-y-8">
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Nos ruches sont installées dans les régions les plus préservées de Tunisie — les montagnes de
            <strong className="text-foreground"> Kasserine</strong>, les collines de
            <strong className="text-foreground"> Zaghouan</strong>, les forêts de
            <strong className="text-foreground"> Béja</strong> et les plaines de
            <strong className="text-foreground"> Siliana</strong>.
          </p>
          <p>
            Chaque pot de miel Sellami est le fruit d'un travail passionné et respectueux de la nature.
            Nous ne pratiquons aucun traitement chimique, n'ajoutons ni sucre ni additifs. Notre miel
            est récolté à maturité, extrait à froid et mis en pot avec le plus grand soin.
          </p>
          <p>
            Notre engagement : vous offrir un miel 100% naturel, traçable, et d'une qualité
            exceptionnelle — directement de l'apiculteur à votre table.
          </p>
        </div>
      </div>
    </section>

    <section className="py-16 bg-card">
      <div className="container">
        <h2 className="font-heading text-3xl font-bold text-center mb-12 text-gradient-gold">Nos Valeurs</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: <Leaf className="w-8 h-8" />, title: "Pureté", desc: "100% naturel, sans additifs, sans sucre ajouté. Un miel pur comme la nature l'a fait." },
            { icon: <Heart className="w-8 h-8" />, title: "Tradition", desc: "Un savoir-faire familial transmis de génération en génération, ancré dans la terre tunisienne." },
            { icon: <Shield className="w-8 h-8" />, title: "Santé", desc: "Des produits de la ruche aux vertus reconnues, pour votre bien-être au quotidien." },
          ].map(v => (
            <div key={v.title} className="text-center p-8 rounded-xl border border-border">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full text-primary">
                {v.icon}
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
