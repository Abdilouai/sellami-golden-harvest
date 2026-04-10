import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Phone, Menu, X, Globe } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";

const navLinksKeys = [
  { key: "home", path: "/" },
  { key: "products", path: "/nos-miels" },
  { key: "promos", path: "/promotions" },
  { key: "about", path: "/a-propos" },
  { key: "contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'ar' : 'fr';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Sellami Honey" className="h-12 md:h-16 w-auto" />
          <span className="font-heading text-lg md:text-xl font-bold text-gradient-gold hidden sm:block">
            Sellami Honey
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinksKeys.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-foreground/80"
              }`}
            >
              {t(`nav.${link.key}`)}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="hidden md:flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-primary transition-colors p-2"
          >
            <Globe className="w-4 h-4" />
            {i18n.language === 'fr' ? 'عربي' : 'FR'}
          </button>

          <a
            href="tel:+21623218453"
            className="hidden md:flex items-center gap-1.5 text-xs font-medium text-primary hover:text-accent transition-colors"
          >
            <Phone className="w-4 h-4" />
            23 218 453
          </a>

          <button
            onClick={() => setIsOpen(true)}
            className="relative p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label={t('nav.cart')}
          >
            <ShoppingCart className="w-5 h-5 text-foreground" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-[10px] font-bold bg-primary text-primary-foreground rounded-full">
                {totalItems}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in-up">
          <div className="container py-4 flex flex-col gap-3">
            <button
              onClick={() => { toggleLanguage(); setMobileOpen(false); }}
              className="py-3 px-4 rounded-lg text-base font-medium transition-colors hover:bg-muted text-foreground flex items-center gap-2"
            >
              <Globe className="w-5 h-5" />
              {i18n.language === 'fr' ? 'Passer en Arabe (عربي)' : 'Passer en Français (FR)'}
            </button>
            {navLinksKeys.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-muted text-foreground/80"
                }`}
              >
                {t(`nav.${link.key}`)}
              </Link>
            ))}
            <a
              href="tel:+21623218453"
              className="py-3 px-4 rounded-lg text-base font-medium text-primary flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              23 218 453
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
