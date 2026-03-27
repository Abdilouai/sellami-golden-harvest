import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { governorates } from "@/data/products";
import { getProductImage } from "@/lib/images";
import { MessageCircle, Check } from "lucide-react";

const CheckoutPage = () => {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", gouvernorat: "", address: "", notes: "", payment: "cod" });

  const regularItems = items.filter(i => !i.isGift);

  if (submitted) {
    const orderMsg = encodeURIComponent(
      `✅ Confirmation de commande Sellami Honey\n\nNom: ${form.name}\nTél: ${form.phone}\nAdresse: ${form.address}, ${form.gouvernorat}\nPaiement: ${form.payment === "cod" ? "À la livraison" : "Virement bancaire"}\n\nArticles:\n${items.map(i => `- ${i.name} (${i.weight}) x${i.quantity}${i.isGift ? " 🎁 OFFERT" : ""}`).join("\n")}\n\nTotal: ${total.toFixed(3)} DT`
    );
    return (
      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="container max-w-lg text-center space-y-6">
          <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
            <Check className="w-8 h-8 text-accent" />
          </div>
          <h1 className="font-heading text-2xl font-bold">Commande envoyée !</h1>
          <p className="text-muted-foreground">Merci {form.name}. Confirmez votre commande par WhatsApp pour un traitement rapide.</p>
          <a href={`https://wa.me/21623218453?text=${orderMsg}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] text-primary-foreground font-bold rounded-lg min-h-[48px]">
            <MessageCircle className="w-5 h-5" />
            Confirmer par WhatsApp
          </a>
          <button onClick={() => navigate("/")} className="block mx-auto text-sm text-primary hover:text-accent">
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-2xl">
        <h1 className="font-heading text-3xl font-bold mb-8 text-gradient-gold">Finaliser la commande</h1>

        <div className="mb-8 space-y-3">
          {items.map(item => (
            <div key={`${item.productId}-${item.weight}`} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
              <img src={getProductImage(item.image)} alt={item.name} className="w-12 h-12 rounded-md object-cover" loading="lazy" />
              <div className="flex-1">
                <p className="text-sm font-semibold">{item.name} {item.isGift && "🎁"}</p>
                <p className="text-xs text-muted-foreground">{item.weight} × {item.quantity}</p>
              </div>
              <p className="text-sm font-bold text-primary">{item.isGift ? "OFFERT" : `${(item.price * item.quantity).toFixed(3)} DT`}</p>
            </div>
          ))}
          <div className="flex justify-between text-lg font-bold pt-2">
            <span>Total</span>
            <span className="text-primary">{total.toFixed(3)} DT</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Nom complet *" className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm focus:border-primary focus:outline-none min-h-[48px]" />
          <input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="Numéro de téléphone *" className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm focus:border-primary focus:outline-none min-h-[48px]" />
          <select required value={form.gouvernorat} onChange={e => setForm({ ...form, gouvernorat: e.target.value })} className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm focus:border-primary focus:outline-none min-h-[48px]">
            <option value="">Gouvernorat *</option>
            {governorates.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
          <input required value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} placeholder="Adresse complète *" className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm focus:border-primary focus:outline-none min-h-[48px]" />
          <textarea value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} placeholder="Notes (optionnel)" rows={3} className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm focus:border-primary focus:outline-none resize-none" />

          <div>
            <p className="text-sm font-semibold mb-2">Mode de paiement:</p>
            <div className="space-y-2">
              <label className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer min-h-[48px] ${form.payment === "cod" ? "border-primary bg-primary/5" : "border-border"}`}>
                <input type="radio" name="payment" value="cod" checked={form.payment === "cod"} onChange={() => setForm({ ...form, payment: "cod" })} className="accent-[hsl(var(--primary))]" />
                <span className="text-sm font-medium">💰 Paiement à la livraison</span>
              </label>
              <label className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer min-h-[48px] ${form.payment === "bank" ? "border-primary bg-primary/5" : "border-border"}`}>
                <input type="radio" name="payment" value="bank" checked={form.payment === "bank"} onChange={() => setForm({ ...form, payment: "bank" })} className="accent-[hsl(var(--primary))]" />
                <span className="text-sm font-medium">🏦 Virement bancaire</span>
              </label>
            </div>
          </div>

          <button type="submit" disabled={regularItems.length === 0} className="w-full py-3.5 bg-gradient-gold text-primary-foreground font-bold rounded-lg text-base hover:opacity-90 transition-opacity min-h-[48px] disabled:opacity-50">
            Confirmer la commande — {total.toFixed(3)} DT
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
