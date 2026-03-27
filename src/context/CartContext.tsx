import React, { createContext, useContext, useState, useCallback } from "react";

export interface CartItem {
  productId: string;
  name: string;
  weight: string;
  price: number;
  quantity: number;
  image: string;
  isGift?: boolean;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  promoCode: string;
  promoDiscount: number;
  setIsOpen: (open: boolean) => void;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (productId: string, weight: string) => void;
  updateQuantity: (productId: string, weight: string, quantity: number) => void;
  applyPromoCode: (code: string) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  total: number;
  totalWeightGrams: number;
}

const CartContext = createContext<CartContextType | null>(null);

const PROMO_CODES: Record<string, number> = {
  SELLAMI10: 0.1,
  SELLAMI20: 0.2,
};

const weightToGrams = (w: string): number => {
  if (w.includes("kg")) return parseFloat(w) * 1000;
  if (w.includes("g")) return parseFloat(w);
  return 0;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [promoDiscount, setPromoDiscount] = useState(0);

  const addItem = useCallback((item: Omit<CartItem, "quantity">) => {
    setItems(prev => {
      const existing = prev.find(i => i.productId === item.productId && i.weight === item.weight);
      if (existing) {
        return prev.map(i =>
          i.productId === item.productId && i.weight === item.weight
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((productId: string, weight: string) => {
    setItems(prev => prev.filter(i => !(i.productId === productId && i.weight === weight)));
  }, []);

  const updateQuantity = useCallback((productId: string, weight: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId, weight);
      return;
    }
    setItems(prev =>
      prev.map(i =>
        i.productId === productId && i.weight === weight ? { ...i, quantity } : i
      )
    );
  }, [removeItem]);

  const applyPromoCode = useCallback((code: string) => {
    const upper = code.toUpperCase();
    if (PROMO_CODES[upper]) {
      setPromoCode(upper);
      setPromoDiscount(PROMO_CODES[upper]);
    }
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    setPromoCode("");
    setPromoDiscount(0);
  }, []);

  const regularItems = items.filter(i => !i.isGift);
  const totalItems = regularItems.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = regularItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const totalWeightGrams = regularItems.reduce((sum, i) => sum + weightToGrams(i.weight) * i.quantity, 0);
  const total = subtotal * (1 - promoDiscount);

  // Auto-add free propolis gift when >= 2kg
  React.useEffect(() => {
    const hasGift = items.some(i => i.isGift);
    if (totalWeightGrams >= 2000 && !hasGift) {
      setItems(prev => [...prev, {
        productId: "gift-propolis",
        name: "Propolis 30g",
        weight: "30g",
        price: 0,
        quantity: 1,
        image: "honey-gelee-royale",
        isGift: true,
      }]);
    } else if (totalWeightGrams < 2000 && hasGift) {
      setItems(prev => prev.filter(i => !i.isGift));
    }
  }, [totalWeightGrams, items]);

  return (
    <CartContext.Provider value={{
      items, isOpen, promoCode, promoDiscount, setIsOpen, addItem, removeItem,
      updateQuantity, applyPromoCode, clearCart, totalItems, subtotal, total, totalWeightGrams,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
