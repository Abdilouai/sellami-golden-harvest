import { Link } from "react-router-dom";
import { Phone, ChevronRight, Star, Leaf, Truck, Shield, Gift } from "lucide-react";
import { products, categories } from "@/data/products";
import { useTranslation } from "react-i18next";
import ProductCard from "@/components/ProductCard";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const trustItemsKeys = [
  "home.trust1",
  "home.trust2",
  "home.trust3",
  "home.trust4",
  "home.trust5",
];

const testimonials = [
  { name: "Fatma B.", text: "Le meilleur miel que j'ai goûté ! Qualité exceptionnelle et livraison rapide.", rating: 5, region: "Tunis" },
  { name: "Ahmed M.", text: "Miel de montagne extraordinaire, on sent la pureté. Je recommande à 100%.", rating: 5, region: "Sousse" },
  { name: "Salma K.", text: "Le coffret cadeau était magnifique. Ma mère a adoré ! Merci Sellami Honey.", rating: 5, region: "Sfax" },
  { name: "Mohamed T.", text: "Depuis que j'ai découvert leur miel de jujubier, je ne peux plus m'en passer.", rating: 5, region: "Nabeul" },
];

const Index = () => {
  const { t } = useTranslation();
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-dark overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="container relative z-10 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient-gold glow-text">{t('home.title1')}</span>
                <br />
                <span className="text-foreground text-3xl md:text-5xl opacity-90 mt-2 block">&bull; Sellami Honey &bull;</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg mt-6">
                {t('home.subtitle')}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/nos-miels"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-gold text-primary-foreground font-bold rounded-lg text-base hover:opacity-90 transition-opacity min-h-[48px]"
                >
                  {t('home.btn_discover')}
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+21623218453"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-primary text-primary font-bold rounded-lg text-base hover:bg-primary/10 transition-colors min-h-[48px]"
                >
                  <Phone className="w-5 h-5" />
                  {t('home.btn_call')}
                </a>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <img src={logo} alt="Sellami Honey" className="w-72 h-72 object-contain glow-gold rounded-full animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary/10 border-y border-primary/20 overflow-hidden py-3">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...trustItemsKeys, ...trustItemsKeys, ...trustItemsKeys].map((item, i) => (
            <span key={i} className="inline-block px-6 text-sm font-medium text-primary">
              {i % 5 === 0 ? "🐝 " : i % 5 === 1 ? "🚚 " : i % 5 === 2 ? "💰 " : i % 5 === 3 ? "✅ " : "📦 "}
              {t(item)}
            </span>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-20 bg-honeycomb">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-10 text-gradient-gold">
            {t('home.cat_title')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map(cat => (
              <Link
                key={cat.name}
                to={`/nos-miels?cat=${cat.name}`}
                className="flex flex-col items-center gap-3 p-6 bg-card rounded-xl border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all group"
              >
                <span className="text-4xl group-hover:scale-110 transition-transform">{cat.icon}</span>
                <span className="text-sm font-semibold text-center">{cat.name}</span>
                <span className="text-xs text-muted-foreground">{cat.nameAr}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gradient-gold">
              {t('home.best_title')}
            </h2>
            <Link to="/nos-miels" className="text-sm text-primary hover:text-accent transition-colors font-medium flex items-center gap-1">
              {t('home.view_all')} <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Sellami */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-gold">
            {t('home.why_title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Leaf className="w-8 h-8" />, titleKey: "home.why1_title", descKey: "home.why1_desc" },
              { icon: <Shield className="w-8 h-8" />, titleKey: "home.why2_title", descKey: "home.why2_desc" },
              { icon: <Truck className="w-8 h-8" />, titleKey: "home.why3_title", descKey: "home.why3_desc" },
            ].map(item => (
              <div key={item.titleKey} className="text-center p-8 rounded-xl border border-border hover:border-primary/30 transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full text-primary">
                  {item.icon}
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{t(item.titleKey)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-10 bg-gradient-gold">
        <div className="container text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Gift className="w-10 h-10 text-primary-foreground" />
            <p className="text-xl md:text-2xl font-heading font-bold text-primary-foreground">
              {t('home.promo_text')}
            </p>
            <Link
              to="/nos-miels"
              className="px-6 py-3 bg-primary-foreground text-primary font-bold rounded-lg hover:opacity-90 transition-opacity min-h-[48px]"
            >
              {t('home.promo_btn')}
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-honeycomb">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-gradient-gold">
            {t('home.testim_title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 bg-card rounded-xl border border-border">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 italic">"{t.text}"</p>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.region}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default Index;
