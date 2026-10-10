import { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import TrustBadges from "./TrustBadges";
import type { OrderSummaryProps } from "./interfaces/interface";

function OrderSummary({
  subtotal,
  shipping,
  discount,
  setDiscount,
  placeOrder,
  total,
}: OrderSummaryProps) {
  const [promoCode, setPromoCode] = useState("");
  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === "DISCOUNT10") {
      setDiscount(subtotal * 0.1);
    } else setDiscount(0);
  };
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, sm: 4 },
          borderRadius: "24px",
          border: "1px solid #e2e8f0",
          bgcolor: "#ffffff",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
          display: "flex",
          flexDirection: "column",
          gap: 2.5,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 800, color: "#0f172a" }}>
          Order Summary
        </Typography>

        {/* Promo Code Input */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <TextField
            placeholder="Promo Code"
            size="small"
            fullWidth
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
                bgcolor: "#f8fafc",
              },
            }}
          />
          <Button
            variant="outlined"
            onClick={handleApplyPromo}
            sx={{
              borderRadius: "10px",
              borderColor: "#e2e8f0",
              color: "#0f172a",
              fontWeight: 700,
              textTransform: "none",
              px: 2.5,
              "&:hover": { borderColor: "#0f172a", bgcolor: "#f1f5f9" },
            }}
          >
            Apply
          </Button>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        {/* Order Calculations */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body2" sx={{ color: "#64748b" }}>
              Subtotal
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, color: "#0f172a" }}
            >
              ${subtotal.toFixed(2)}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body2" sx={{ color: "#64748b" }}>
              Estimated Shipping
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                color: shipping === 0 ? "#10b981" : "#0f172a",
              }}
            >
              {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
            </Typography>
          </Box>

          {discount > 0 && (
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                variant="body2"
                sx={{ color: "#10b981", fontWeight: 600 }}
              >
                Discount Applied
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: 700, color: "#10b981" }}
              >
                -${discount.toFixed(2)}
              </Typography>
            </Box>
          )}
        </Box>

        <Divider />

        {/* Total Price */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 800, color: "#0f172a" }}>
            Total
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 800, color: "#0f172a" }}>
            ${total.toFixed(2)}
          </Typography>
        </Box>

        {/* Place Order CTA Button */}
        <Button
          variant="contained"
          fullWidth
          size="large"
          onClick={placeOrder}
          sx={{
            py: 1.8,
            mt: 1,
            borderRadius: "14px",
            bgcolor: "#0f172a",
            color: "#ffffff",
            fontSize: "1rem",
            fontWeight: 700,
            textTransform: "none",
            boxShadow: "0 10px 20px rgba(15, 23, 42, 0.15)",
            "&:hover": {
              bgcolor: "#1e293b",
              boxShadow: "0 14px 24px rgba(15, 23, 42, 0.25)",
            },
          }}
        >
          Place Order
        </Button>

        {/* Security & Guarantee Trust Badges */}
        <TrustBadges />
      </Paper>
    </>
  );
}

export default OrderSummary;
