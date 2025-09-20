import { createContext, useContext, ReactNode } from "react";
import useCart, { CartItem } from "../hooks/useCart";

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: any) => void;
  decreaseQuantity: (id: number) => void;
  increaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  totalQuantity: number;
  totalPrice: number;
  getQuantityById: (id: number) => number;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({
  children,
  userName,
}: {
  children: ReactNode;
  userName?: string;
}) => {
  const cart = useCart(userName);
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useCartContext must be used within a CartProvider");
  return context;
};
