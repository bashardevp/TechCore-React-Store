export type OrderStatus = "Delivered" | "Shipped" | "Processing" | "Cancelled";
export type OrderFilter = "All" | OrderStatus;

export interface OrderItem {
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

// export interface Order {
//   id: string;
//   date: string;
//   status: OrderStatus;
//   total: number;
//   items: OrderItem[];
// }
