import type { ProductDetailsProduct } from "../../../interfaces/productDetails.interface";

export interface IProductActions {
  handleAddToCart: () => void;
  handleBuyNow: () => void;
  quantityInCart: number;
}

export interface ProductDetailsCartItem {
  id: number;
  quantity: number;
}

export type ProductSnackbarSeverity = "success" | "info" | "warning" | "error";

export interface IProductImageSectionProps {
  product: ProductDetailsProduct;
}

export interface IProductInfoProps {
  product: ProductDetailsProduct;
  productInCart?: ProductDetailsCartItem;
  quantityInCart: number;
  showSnackbar: (message: string, severity?: ProductSnackbarSeverity) => void;
}
