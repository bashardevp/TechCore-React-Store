export interface CheckoutProduct {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface CartItem {
  id: number;
  quantity: number;
  product?: CheckoutProduct;
}

export interface CartItemCardProps {
  cartItems: CartItem[];
  updateQuantity: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
}

export interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  discount: number;
  setDiscount: (discount: number) => void;
  placeOrder: () => void;
  total: number;
}
