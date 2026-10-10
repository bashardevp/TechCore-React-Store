import type { CheckoutOrder } from "../../interfaces/checkout.interface";

export interface CartItem {
  id: number;
  quantity: number;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (productId: number) => void;
  getCartItemsWithProducts: () => Array<
    CartItem & { product: IProduct | undefined }
  >;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  getCartTotal: () => number;
  addOrder: (newOrder: CheckoutOrder) => void;
  ordersItems: CheckoutOrder[];
  clearCart: () => void;
}

export interface ISnackbarContextType {
  showSnackbar: (
    message: string,
    severity?: "success" | "error" | "warning" | "info",
  ) => void;
}
export interface ISnackbarState {
  open: boolean;
  message: string;
  severity: ISnackbarSeverity;
}
export type ISnackbarSeverity = "success" | "error" | "warning" | "info";

export interface IWishlistContextType {
  wishlistItems: number[];
  toggleWishlist: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
}
