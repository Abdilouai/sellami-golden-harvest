import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingCart, MessageCircle, Phone, ChevronLeft, Plus, Minus, Shield, Zap, Heart, Droplets } from "lucide-react";
import { products } from "@/data/products";
import { getProductImage } from "@/lib/images";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

const benefitIcons: Record<string, React.ReactNode> = {
  "Anti-bactérien": <Shield className="w-5 h-5" />,
  "immunité": <Zap className="w-5 h-5" />,
  "Énergie": <Zap className="w-5 h-5" />,
  "Cicatrisation": <Heart className="w-5 h-5" />,
  default: <Droplets className="w-5 h-5" />,
};

const getBenefitIcon = (benefit: string) => {
  for (const [key, icon] of Object.entries(benefitIcons)) {
    if (key !== "default" && benefit.toLowerCase().includes(key.toLowerCase())) return icon;
  }
  return benefitIcons.default;
};

const ProductDetailPage = () => {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const { addItem } = useCart();
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold mb-4">Produit non trouvé</h1>
          <Link to="/nos-miels" className="text-primary hover:text-accent">Retour aux produits</Link>
        </div>
      </div>
    );
  }

  const variant = product.variants[selectedIdx];
  const hasDiscount = !!variant.originalPrice;
  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({ productId: product.id, name: product.name, weight: variant.weight, price: variant.price, image: product.image });
    }
  };

  const whatsappMsg = encodeURIComponent(
    `Bonjour, je souhaite commander: ${product.name} (${variant.weight}) x${quantity} — Total: ${(variant.price * quantity).toFixed(3)} DT`
  );

  return (
    <div className="min-h-screen">
      <div className="container py-4">
        <Link to="/nos-miels" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ChevronLeft className="w-4 h-4" /> Retour aux produits
        </Link>
      </div>

      <section className="container pb-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-card border border-border">
            <img src={getProductImage(product.image)} alt={product.name} className="w-full h-full object-cover" width={800} height={800} />
            {product.badge && (
              <span className="absolute top-4 left-4 px-3 py-1.5 bg-honey-sale text-foreground text-sm font-bold rounded-full">
                {product.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold">{product.name}</h1>
              <p className="text-muted-foreground mt-1" dir="rtl">{product.nameAr}</p>
              <p className="text-sm text-primary mt-2">📍 {product.origin}</p>
            </div>

            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Weight selector */}
            <div>
              <p className="text-sm font-semibold mb-2">Poids:</p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v, i) => (
                  <button
                    key={v.weight}
                    onClick={() => setSelectedIdx(i)}
                    className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors min-h-[44px] ${
                      i === selectedIdx ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-border"
                    }`}
                  >
                    {v.weight}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-primary">{variant.price.toFixed(3)} DT</span>
              {hasDiscount && (
                <span className="text-lg text-muted-foreground line-through">{variant.originalPrice!.toFixed(3)} DT</span>
              )}
            </div>

            {/* Free gift promo */}
            <div className="p-4 bg-accent/10 border border-accent/30 rounded-lg">
              <p className="text-sm font-semibold text-accent">🎁 Achetez 2 kg → 1 propolis OFFERT !</p>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <p className="text-sm font-semibold">Quantité:</p>
              <div className="flex items-center gap-3">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center bg-muted rounded-lg hover:bg-border">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg font-bold w-8 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center bg-muted rounded-lg hover:bg-border">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={handleAdd} className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gradient-gold text-primary-foreground font-bold rounded-lg text-base hover:opacity-90 transition-opacity min-h-[48px]">
                <ShoppingCart className="w-5 h-5" />
                Ajouter au panier
              </button>
              <a
                href={`https://wa.me/21623218453?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#25D366] text-primary-foreground font-bold rounded-lg text-base hover:opacity-90 transition-opacity min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5" />
                Commander par WhatsApp
              </a>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="font-heading text-lg font-bold mb-3">Bienfaits pour la santé</h3>
              <div className="grid grid-cols-2 gap-3">
                {product.benefits.map(b => (
                  <div key={b} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                    <span className="text-primary">{getBenefitIcon(b)}</span>
                    <span className="text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📅 {product.harvestDate}</p>
              <p>📦 {product.storage}</p>
              <p>🚚 Livraison à domicile sur toute la Tunisie</p>
              <p>💰 Paiement à la livraison</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile sticky bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-3 flex gap-2 lg:hidden z-40">
        <button onClick={handleAdd} className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-gold text-primary-foreground font-bold rounded-lg min-h-[48px]">
          <ShoppingCart className="w-5 h-5" />
          {variant.price.toFixed(3)} DT
        </button>
        <a href={`https://wa.me/21623218453?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="w-14 h-12 flex items-center justify-center bg-[#25D366] rounded-lg">
          <MessageCircle className="w-6 h-6 text-foreground" />
        </a>
      </div>

      {/* Related */}
      <section className="container py-12 lg:pb-12 pb-24">
        <h2 className="font-heading text-2xl font-bold mb-8 text-gradient-gold">Produits similaires</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {related.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
