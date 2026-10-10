import { Box, Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import type { IProductActions } from "./interfaces/interface";
function ProductActions({
  handleAddToCart,
  handleBuyNow,
  quantityInCart,
}: IProductActions) {
  return (
    <>
      <Box
        sx={{
          pt: 1,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 1, sm: 2 },
        }}
      >
        {/* Add to Cart Button */}
        <Button
          size="large"
          variant="contained"
          onClick={handleAddToCart}
          startIcon={
            <AddShoppingCartIcon sx={{ fontSize: { xs: 18, sm: 22 } }} />
          }
          sx={{
            flex: 1,
            py: { xs: 1.2, sm: 1.8 },
            borderRadius: "14px",
            bgcolor: "#0f172a",
            color: "#ffffff",
            fontWeight: 700,
            fontSize: { xs: "0.8rem", sm: "0.95rem" },
            textTransform: "none",
            boxShadow: "0 10px 20px rgba(15, 23, 42, 0.15)",
            "&:hover": {
              bgcolor: "#1e293b",
              boxShadow: "0 14px 24px rgba(15, 23, 42, 0.25)",
            },
          }}
        >
          Add to Cart {quantityInCart > 0 ? `(${quantityInCart})` : ""}
        </Button>

        {/* Buy Now Button */}
        <Button
          size="large"
          variant="contained"
          onClick={handleBuyNow}
          startIcon={
            <ShoppingBagOutlinedIcon sx={{ fontSize: { xs: 18, sm: 22 } }} />
          }
          sx={{
            flex: 1,
            py: { xs: 1.2, sm: 1.8 },
            borderRadius: "14px",
            bgcolor: "#6366f1",
            color: "#ffffff",
            fontWeight: 700,
            fontSize: { xs: "0.8rem", sm: "0.95rem" },
            textTransform: "none",
            boxShadow: "0 10px 20px rgba(99, 102, 241, 0.25)",
            "&:hover": {
              bgcolor: "#4f46e5",
              boxShadow: "0 14px 24px rgba(99, 102, 241, 0.35)",
            },
          }}
        >
          Buy Now
        </Button>
      </Box>
    </>
  );
}

export default ProductActions;
