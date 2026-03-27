import { Phone, MessageCircle, Clock, MapPin, Facebook, Instagram } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", phone: "", product: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Nom: ${form.name}\nTéléphone: ${form.phone}\nProduit: ${form.product}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/21623218453?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      <section className="py-12 bg-gradient-dark">
        <div className="container text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-gradient-gold mb-2">Contactez-nous</h1>
          <p className="text-muted-foreground">Nous sommes à votre écoute pour toute question ou commande</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <a href="tel:+21623218453" className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/40 transition-colors min-h-[72px]">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full"><Phone className="w-6 h-6 text-primary" /></div>
                <div><p className="font-semibold">Appelez-nous</p><p className="text-sm text-muted-foreground">+216 23 218 453</p></div>
              </a>
              <a href="https://wa.me/21623218453?text=Bonjour%2C%20je%20souhaite%20des%20informations" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/40 transition-colors min-h-[72px]">
                <div className="w-12 h-12 flex items-center justify-center bg-[#25D366]/10 rounded-full"><MessageCircle className="w-6 h-6 text-[#25D366]" /></div>
                <div><p className="font-semibold">WhatsApp</p><p className="text-sm text-muted-foreground">Réponse rapide garantie</p></div>
              </a>
              <div className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full"><Clock className="w-6 h-6 text-primary" /></div>
                <div><p className="font-semibold">Horaires</p><p className="text-sm text-muted-foreground">Lun - Sam: 8h - 20h</p></div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full"><MapPin className="w-6 h-6 text-primary" /></div>
                <div><p className="font-semibold">Adresse</p><p className="text-sm text-muted-foreground">Tunisie</p></div>
              </div>
              <div className="flex gap-3">
                <a href="#" className="w-12 h-12 flex items-center justify-center bg-card border border-border rounded-full hover:border-primary/40"><Facebook className="w-5 h-5 text-primary" /></a>
                <a href="#" className="w-12 h-12 flex items-center justify-center bg-card border border-border rounded-full hover:border-primary/40"><Instagram className="w-5 h-5 text-primary" /></a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Votre nom" className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm focus:border-primary focus:outline-none min-h-[48px]" />
              <input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="Numéro de téléphone" className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm focus:border-primary focus:outline-none min-h-[48px]" />
              <input value={form.product} onChange={e => setForm({ ...form, product: e.target.value })} placeholder="Produit qui vous intéresse" className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm focus:border-primary focus:outline-none min-h-[48px]" />
              <textarea required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Votre message" rows={4} className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm focus:border-primary focus:outline-none resize-none" />
              <button type="submit" className="w-full py-3.5 bg-gradient-gold text-primary-foreground font-bold rounded-lg text-base hover:opacity-90 transition-opacity min-h-[48px]">
                Envoyer via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
