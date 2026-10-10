import {
  Box,
  Card,
  CardMedia,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import type { CartItemCardProps } from "./interfaces/interface";

function CartItemCard({
  cartItems,
  updateQuantity,
  removeFromCart,
}: CartItemCardProps) {
  return (
    <>
      {" "}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
        {cartItems.map((item) => (
          <Card
            key={item.id}
            elevation={0}
            sx={{
              p: 2,
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "center" },
              borderRadius: "16px",
              border: "1px solid #f1f5f9",
              bgcolor: "#ffffff",
              gap: 2,
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                borderColor: "#cbd5e1",
                boxShadow: "0 6px 16px rgba(0,0,0,0.04)",
              },
            }}
          >
            {/* Left Side Box (Image & Product Info) */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 2.5,
                width: { xs: "100%", sm: "60%" },
              }}
            >
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: "12px",
                  bgcolor: "#f8fafc",
                  p: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <CardMedia
                  component="img"
                  alt={item.product?.name}
                  image={item.product?.image}
                  sx={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>

              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    color: "#0f172a",
                    lineHeight: 1.3,
                    mb: 0.5,
                  }}
                >
                  {item.product?.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#64748b", fontWeight: 600 }}
                >
                  ${item.product?.price?.toFixed(2) ?? "0.00"}
                </Typography>
              </Box>
            </Box>

            {/* Right Side Box (Quantity Stepper, Total & Remove) */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: { xs: "100%", sm: "40%" },
                pt: { xs: 1.5, sm: 0 },
                borderTop: { xs: "1px solid #f1f5f9", sm: "none" },
              }}
            >
              {/*Quantity Controls */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  p: "3px",
                  bgcolor: "#f8fafc",
                }}
              >
                <IconButton
                  size="small"
                  onClick={() =>
                    updateQuantity(item.id, Math.max(1, item.quantity - 1))
                  }
                  disabled={item.quantity <= 1}
                  sx={{
                    bgcolor: "#ffffff",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                    borderRadius: "8px",
                    p: "4px",
                    "&:disabled": { opacity: 0.4 },
                  }}
                >
                  <RemoveIcon fontSize="small" />
                </IconButton>

                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 700,
                    px: 1.8,
                    color: "#0f172a",
                    minWidth: 24,
                    textAlign: "center",
                  }}
                >
                  {item.quantity}
                </Typography>

                <IconButton
                  size="small"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  sx={{
                    bgcolor: "#ffffff",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                    borderRadius: "8px",
                    p: "4px",
                  }}
                >
                  <AddIcon fontSize="small" />
                </IconButton>
              </Box>

              {/* Item Subtotal Price */}
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 800, color: "#0f172a", ml: 2 }}
              >
                ${((item.product?.price || 0) * item.quantity).toFixed(2)}
              </Typography>

              {/* Remove Button */}
              <Tooltip title="Remove item" placement="top">
                <IconButton
                  onClick={() => removeFromCart(item.id)}
                  sx={{
                    color: "#94a3b8",
                    "&:hover": { color: "#ef4444", bgcolor: "#fef2f2" },
                  }}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          </Card>
        ))}
      </Box>
    </>
  );
}

export default CartItemCard;
