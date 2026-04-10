import { Link } from "react-router-dom";
import { Phone, Facebook, Instagram, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 448 512" fill="currentColor" stroke="none" className={className} width="24" height="24">
    <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z"/>
  </svg>
);

const Footer = () => {
  const { t } = useTranslation();
  return (
  <footer className="bg-card border-t border-border">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Sellami Honey" className="h-16 w-auto" />
            <span className="font-heading text-lg font-bold text-gradient-gold">Sellami Honey</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t('footer.desc')}
          </p>
        </div>

        <div>
          <h3 className="font-heading text-base font-bold mb-4 text-primary">{t('footer.nav')}</h3>
          <div className="space-y-2">
            {[["nav.home", "/"], ["nav.products", "/nos-miels"], ["nav.promos", "/promotions"], ["nav.about", "/a-propos"], ["nav.contact", "/contact"]].map(([keyLabel, path]) => (
              <Link key={path} to={path} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                {t(keyLabel)}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-base font-bold mb-4 text-primary">{t('footer.contact')}</h3>
          <div className="space-y-3">
            <a href="tel:+21623218453" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" /> +216 23 218 453
            </a>
            <a href="https://wa.me/21623218453" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
          <div className="flex gap-3 mt-4">
            <a href="https://www.facebook.com/share/18KgdYtdR7/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-muted rounded-full hover:bg-primary/20 transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5 text-primary" />
            </a>
            <a href="https://www.instagram.com/sellami_honey1/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-muted rounded-full hover:bg-primary/20 transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5 text-primary" />
            </a>
            <a href="https://www.tiktok.com/@boughadenboughaden99?_r=1&_t=ZS-95Qxk156wbq" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-muted rounded-full hover:bg-primary/20 transition-colors" aria-label="TikTok">
              <TiktokIcon className="w-4 h-4 text-primary" />
            </a>
            <a href="https://wa.me/21623218453" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-muted rounded-full hover:bg-primary/20 transition-colors" aria-label="WhatsApp">
              <MessageCircle className="w-5 h-5 text-primary" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-base font-bold mb-4 text-primary">{t('footer.delivery')}</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>🚚 {t('footer.trust1')}</p>
            <p>💰 {t('footer.trust2')}</p>
            <p>🏦 {t('footer.trust3')}</p>
            <p>📦 {t('footer.trust4')}</p>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          {t('footer.copyright')}
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
