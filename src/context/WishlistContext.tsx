import { createContext, useState, useContext, type ReactNode } from "react";
import type { IWishlistContextType } from "./interfaces/interface";

const WishlistContext = createContext<IWishlistContextType | null>(null);

export default function WishlistProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [wishlistItems, setWishlistItems] = useState<number[]>([]);

  const toggleWishlist = (productId: number) => {
    setWishlistItems((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  };

  const isFavorite = (productId: number) => {
    return wishlistItems.includes(productId);
  };

  return (
    <WishlistContext value={{ wishlistItems, toggleWishlist, isFavorite }}>
      {children}
    </WishlistContext>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
