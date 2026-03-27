import { Link } from "react-router-dom";
import { Phone, Facebook, Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Sellami Honey" className="h-16 w-auto" />
            <span className="font-heading text-lg font-bold text-gradient-gold">Sellami Honey</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Miel pur et artisanal de Tunisie. 100% naturel, sans additifs, sans sucre ajouté.
          </p>
          <p className="text-sm text-muted-foreground" dir="rtl">
            عسل تونسي طبيعي وحرفي. 100% طبيعي بدون إضافات
          </p>
        </div>

        <div>
          <h3 className="font-heading text-base font-bold mb-4 text-primary">Navigation</h3>
          <div className="space-y-2">
            {[["Accueil", "/"], ["Nos Miels", "/nos-miels"], ["Promotions", "/promotions"], ["À Propos", "/a-propos"], ["Contact", "/contact"]].map(([label, path]) => (
              <Link key={path} to={path} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-base font-bold mb-4 text-primary">Contact</h3>
          <div className="space-y-3">
            <a href="tel:+21623218453" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" /> +216 23 218 453
            </a>
            <a href="https://wa.me/21623218453" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
          <div className="flex gap-3 mt-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-muted rounded-full hover:bg-primary/20 transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5 text-primary" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-muted rounded-full hover:bg-primary/20 transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5 text-primary" />
            </a>
            <a href="https://wa.me/21623218453" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-muted rounded-full hover:bg-primary/20 transition-colors" aria-label="WhatsApp">
              <MessageCircle className="w-5 h-5 text-primary" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-base font-bold mb-4 text-primary">Livraison & Paiement</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>🚚 Livraison à domicile sur toute la Tunisie</p>
            <p>💰 Paiement à la livraison</p>
            <p>🏦 Virement bancaire disponible</p>
            <p>📦 Emballage cadeau disponible</p>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          © 2024 Sellami Honey — Apiculture Tunisienne 100% Locale. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
