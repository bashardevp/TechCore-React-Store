import { createContext, useState, useContext, type ReactNode } from "react";
import { getProductById } from "../data/products";
import type { CheckoutOrder } from "../interfaces/checkout.interface";
import type { CartContextType, CartItem } from "./interfaces/interface";

const CartContext = createContext<CartContextType | null>(null);

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [ordersItems, setOrdersItems] = useState<CheckoutOrder[]>([]);

  function addToCart(productId: number) {
    const existing = cartItems.find((item) => item.id === productId);
    if (existing) {
      const currentQuantity = existing.quantity;
      const updatedCartItems = cartItems.map((item) =>
        item.id === productId
          ? { id: productId, quantity: currentQuantity + 1 }
          : item,
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { id: productId, quantity: 1 }]);
    }
  }

  function getCartItemsWithProducts() {
    return cartItems.map((item) => ({
      ...item,
      product: getProductById(item.id),
    }));
  }

  function removeFromCart(productId: number) {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  }

  function updateQuantity(productId: number, quantity: number) {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    );
  }

  function getCartTotal() {
    return cartItems.reduce((sum, item) => {
      const product = getProductById(item.id);
      const price = Math.max(0, product?.price ?? 0);
      const quantity = Math.max(0, item.quantity);
      return sum + (product ? price * quantity : 0);
    }, 0);
  }

  function addOrder(newOrder: CheckoutOrder) {
    setOrdersItems((prev) => [newOrder, ...prev]);
  }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        getCartItemsWithProducts,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        addOrder,
        ordersItems,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
