import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Gift } from "lucide-react";

const PromotionsPage = () => {
  const onSale = products.filter(p => p.isOnSale);

  return (
    <div className="min-h-screen">
      <section className="py-12 bg-gradient-gold">
        <div className="container text-center">
          <Gift className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-2">Promotions & Offres Spéciales</h1>
          <p className="text-primary-foreground/80">Profitez de nos offres exceptionnelles sur le miel artisanal tunisien</p>
        </div>
      </section>

      <section className="py-8 bg-card">
        <div className="container text-center">
          <div className="p-6 bg-accent/10 border border-accent/30 rounded-xl inline-block">
            <p className="text-lg font-heading font-bold text-accent">🎁 Pour toute commande de 2 kg : 1 pot de propolis OFFERT !</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {onSale.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PromotionsPage;
