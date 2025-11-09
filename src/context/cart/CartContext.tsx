"use client";
import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  removeItem: (id: number) => void;
};

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  increaseQty: () => {},
  decreaseQty: () => {},
  removeItem: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCartItems((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === item.id);
      if (existing) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const increaseQty = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id: number) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (!existing) return prev;

      if (existing.quantity > 1) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }

      return prev.filter((item) => item.id !== id);
    });
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, increaseQty, decreaseQty, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
export { CartContext };
