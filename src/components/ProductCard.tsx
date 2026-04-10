import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, MessageCircle } from "lucide-react";
import { Product } from "@/data/products";
import { getProductImage } from "@/lib/images";
import { useCart } from "@/context/CartContext";

const ProductCard = ({ product }: { product: Product }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const { addItem } = useCart();
  const variant = product.variants[selectedIdx];
  const hasDiscount = !!variant.originalPrice;

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      productId: product.id,
      name: product.name,
      weight: variant.weight,
      price: variant.price,
      image: product.image,
    });
  };

  const whatsappMsg = encodeURIComponent(
    `Bonjour, je suis intéressé(e) par: ${product.name} (${variant.weight}) à ${variant.price.toFixed(3)} DT`
  );

  return (
    <div className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5">
      <Link to={`/produit/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden">
          <img
            src={getProductImage(product.image)}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            width={400}
            height={400}
          />
          {product.badge && (
            <span className="absolute top-3 left-3 px-2.5 py-1 bg-honey-sale text-foreground text-xs font-bold rounded-full">
              {product.badge}
            </span>
          )}
          {product.isBestSeller && (
            <span className="absolute top-3 right-3 px-2.5 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
              Best Seller
            </span>
          )}
        </div>
      </Link>

      <div className="p-4 space-y-3">
        <Link to={`/produit/${product.slug}`}>
          <h3 className="font-heading text-base font-bold leading-tight hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">{product.nameAr}</p>
        </Link>

        <p className="text-xs text-muted-foreground line-clamp-2">{product.description}</p>

        {/* Weight selector */}
        <div className="flex flex-wrap gap-1.5">
          {product.variants.map((v, i) => (
            <button
              key={v.weight}
              onClick={() => setSelectedIdx(i)}
              className={`px-3 py-1.5 text-xs rounded-md font-medium transition-colors ${
                i === selectedIdx
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-border"
              }`}
            >
              {v.weight}
            </button>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-primary font-body">{variant.price.toFixed(3)} DT</span>
          {hasDiscount && (
            <span className="text-sm text-muted-foreground line-through">{variant.originalPrice!.toFixed(3)} DT</span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={handleAdd}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gradient-gold text-primary-foreground font-semibold text-sm rounded-lg hover:opacity-90 transition-opacity min-h-[44px]"
          >
            <ShoppingCart className="w-4 h-4" />
            Ajouter au panier
          </button>
          <a
            href={`https://wa.me/21623218453?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center bg-[#25D366] text-white rounded-lg hover:opacity-90 transition-opacity shrink-0"
            aria-label="Commander par WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
