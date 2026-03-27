import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Phone, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Accueil", path: "/" },
  { label: "Nos Miels", path: "/nos-miels" },
  { label: "Promotions", path: "/promotions" },
  { label: "À Propos", path: "/a-propos" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();

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
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
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
            aria-label="Panier"
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
            {navLinks.map(link => (
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
                {link.label}
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
