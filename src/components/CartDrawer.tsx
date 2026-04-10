import { X, Plus, Minus, Trash2, Gift, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { getProductImage } from "@/lib/images";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, total, promoCode, promoDiscount, applyPromoCode, totalItems } = useCart();
  const [codeInput, setCodeInput] = useState("");
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-background/60 backdrop-blur-sm z-50" onClick={() => setIsOpen(false)} />
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-card border-l border-border z-50 flex flex-col animate-fade-in-up">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="font-heading text-xl font-bold">Panier ({totalItems})</h2>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-muted rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">Votre panier est vide</p>
          ) : (
            items.map(item => (
              <div key={`${item.productId}-${item.weight}`} className="flex gap-3 p-3 bg-muted/30 rounded-lg">
                <img
                  src={getProductImage(item.image)}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-semibold truncate">
                        {item.isGift && <Gift className="w-4 h-4 inline text-accent mr-1" />}
                        {item.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">{item.weight}</p>
                    </div>
                    {!item.isGift && (
                      <button onClick={() => removeItem(item.productId, item.weight)} className="text-muted-foreground hover:text-honey-sale p-1">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  {item.isGift ? (
                    <span className="text-xs font-bold text-accent">🎁 OFFERT</span>
                  ) : (
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button onClick={() => updateQuantity(item.productId, item.weight, item.quantity - 1)} className="w-7 h-7 flex items-center justify-center bg-muted rounded-md hover:bg-border">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.productId, item.weight, item.quantity + 1)} className="w-7 h-7 flex items-center justify-center bg-muted rounded-md hover:bg-border">
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-bold text-primary">{(item.price * item.quantity).toFixed(3)} DT</span>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t border-border space-y-3">
            <div className="flex gap-2">
              <input
                value={codeInput}
                onChange={e => setCodeInput(e.target.value)}
                placeholder="Code promo"
                className="flex-1 px-3 py-2 bg-muted rounded-lg text-sm border border-border focus:border-primary focus:outline-none"
              />
              <button onClick={() => applyPromoCode(codeInput)} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90">
                Appliquer
              </button>
            </div>
            {promoCode && (
              <p className="text-xs text-accent">✅ Code {promoCode} appliqué: −{promoDiscount * 100}%</p>
            )}
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Sous-total</span>
              <span>{subtotal.toFixed(3)} DT</span>
            </div>
            {promoDiscount > 0 && (
              <div className="flex justify-between text-sm text-accent">
                <span>Réduction</span>
                <span>−{(subtotal * promoDiscount).toFixed(3)} DT</span>
              </div>
            )}
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-primary">{total.toFixed(3)} DT</span>
            </div>
            <button
              onClick={() => { setIsOpen(false); navigate("/checkout"); }}
              className="w-full py-3 bg-gradient-gold text-primary-foreground font-bold rounded-lg text-base hover:opacity-90 transition-opacity"
            >
              Commander — Paiement à la livraison
            </button>
            <a
              href={`https://wa.me/21623218453?text=${encodeURIComponent("Bonjour, je souhaite passer une commande. Mon panier: " + items.filter(i => !i.isGift).map(i => `${i.name} (${i.weight}) x${i.quantity}`).join(", ") + `. Total: ${total.toFixed(3)} DT`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold rounded-lg text-base hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-5 h-5" />
              Commander par WhatsApp
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
