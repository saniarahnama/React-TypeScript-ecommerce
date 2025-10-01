import { useState, useEffect } from "react";
import { product } from "../interfaces/product";
import customers from "../data/Customer.json";
import productsData from "../data/Products.json";

export interface CartItem extends product {
  quantity: number;
  image: string;
}

const useCart = (userName?: string) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    if (!userName) return; 
    const customer = customers.find((c) => c.userName === userName);

    if (customer?.items?.length) {
      const mappedProducts: CartItem[] = customer.items
        .map((id) => {
          const prod = productsData.find((p) => p.id === id);
          return prod ? { ...prod, quantity: 1, image: prod.image || "" } : null;
        })
        .filter((p): p is CartItem => p !== null);

      setCart(mappedProducts);
    } else {
      setCart([]);
    }
  }, [userName]);

  useEffect(() => {
    if (userName) {
      localStorage.setItem(`cart_${userName}`, JSON.stringify(cart));
    }
  }, [cart, userName]);

  const addToCart = (product: product) => {
    if (!product) return;
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, image: product.image || "" }];
    });
  };

  const decreaseQuantity = (id: number) => {
    
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const increaseQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const getQuantityById = (id: number) => {
    const found = cart.find((item) => item.id === id);
    return found ? found.quantity : 0;
  };

  return {
    cart,
    addToCart,
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
    clearCart,
    totalQuantity,
    totalPrice,
    getQuantityById,
    
 
  };
};

export default useCart;
