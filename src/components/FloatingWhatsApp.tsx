import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/21623218453"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 animate-float"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
};

export default FloatingWhatsApp;
