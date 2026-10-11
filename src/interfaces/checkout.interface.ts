import type { OrderItem } from "./orders.interface";

export interface IOrderSuccessDialogProps {
  orderSuccess: boolean;
  setOrderSuccess: (value: boolean) => void;
}
export interface CheckoutOrder {
  id: string;
  date: string;
  status: "Processing" | "Shipped" | "Delivered" | "Cancelled";
  total: number;
  items: OrderItem[];
}
