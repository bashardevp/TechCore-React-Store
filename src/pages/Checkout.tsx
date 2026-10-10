import { useState } from "react";
import { Box, Typography, Container, Paper } from "@mui/material";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { useCart } from "../context/CartContext";
import {
  CheckoutHeader,
  EmptyCart,
  OrderSummary,
  CartItemCard,
} from "../components/checkout";
import OrderSuccessDialog from "../components/OrderSuccessDialog";
import type { CheckoutOrder } from "../interfaces/checkout.interface";

function Checkout() {
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [discount, setDiscount] = useState(0);

  const {
    getCartItemsWithProducts,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    addOrder,
    clearCart,
  } = useCart();

  const uniqueId = uuidv4();
  const cartItems = getCartItemsWithProducts() || [];
  const subtotal = getCartTotal() || 0;
  const shipping = subtotal > 0 ? (subtotal > 150 ? 0 : 15.0) : 0;
  const total = Math.max(0, subtotal + shipping - discount);

  function placeOrder() {
    const newOrder: CheckoutOrder = {
      id: `ORD-${dayjs().format("YYYYMMDD")}-${uniqueId.slice(0, 16)}`,
      date: dayjs().format("D MMM, YYYY h:mm:ss A"),
      status: "Shipped",
      total: total,
      items: cartItems.map((item) => ({
        name: item.product?.name || "Product",
        price: item.product?.price || 0,
        quantity: item.quantity,
        image: item.product?.image,
      })),
    };

    addOrder(newOrder);
    setOrderSuccess(true);
    clearCart();
  }

  if (cartItems.length === 0 && !orderSuccess) {
    return <EmptyCart />;
  }

  return (
    <Box sx={{ bgcolor: "#f8fafc", minHeight: "100vh", py: { xs: 3, md: 6 } }}>
      <Container maxWidth="lg">
        {/* Header */}
        <CheckoutHeader />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: 4,
            alignItems: "flex-start",
          }}
        >
          {}
          <Box sx={{ flex: { xs: "1 1 100%", lg: "1 1 65%" }, width: "100%" }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2, sm: 3 },
                borderRadius: "24px",
                border: "1px solid #e2e8f0",
                bgcolor: "#ffffff",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 3,
                  pb: 2,
                  borderBottom: "1px solid #f1f5f9",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, color: "#0f172a" }}
                >
                  Items (
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)})
                </Typography>
              </Box>

              {/* Cart Items */}
              <Box>
                <CartItemCard
                  cartItems={cartItems}
                  updateQuantity={updateQuantity}
                  removeFromCart={removeFromCart}
                />
              </Box>
            </Paper>
          </Box>

          {/* Order Summary & Checkout Section */}
          <Box sx={{ flex: { xs: "1 1 100%", lg: "1 1 35%" }, width: "100%" }}>
            <OrderSummary
              subtotal={subtotal}
              shipping={shipping}
              discount={discount}
              setDiscount={setDiscount}
              placeOrder={placeOrder}
              total={total}
            />
          </Box>
        </Box>
      </Container>

      {}
      <OrderSuccessDialog
        orderSuccess={orderSuccess}
        setOrderSuccess={setOrderSuccess}
      />
    </Box>
  );
}

export default Checkout;
