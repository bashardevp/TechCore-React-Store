import { Box, Chip, Divider, Rating, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProductActions from "./ProductActions";
import ProductTrustBadges from "./ProductTrustBadges";
import { useCart } from "../../context/CartContext";
import type { IProductInfoProps } from "./interfaces/interface";

function ProductInfo({
  product,
  productInCart,
  quantityInCart,
  showSnackbar,
}: IProductInfoProps) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (product?.id) {
      addToCart(product.id);
      showSnackbar(
        `${product?.name.slice(0, 20) || "Item"} added to your cart!`,
        "success",
      );
    }
  };

  const handleBuyNow = () => {
    if (product?.id) {
      if (!productInCart) {
        addToCart(product.id);
      }
      navigate("/checkout");
    }
  };

  return (
    <>
      <Box
        sx={{
          flex: 1,
          width: { xs: "100%", md: "50%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          {/* Product Title */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              color: "#0f172a",
              fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2.25rem" },
              lineHeight: 1.25,
              mb: { xs: 1, sm: 2 },
            }}
          >
            {product?.name}
          </Typography>

          {/* Rating & Reviews */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 0.8, sm: 1.5 },
              mb: { xs: 1.5, sm: 3 },
              flexWrap: "wrap",
            }}
          >
            <Rating value={4.8} precision={0.1} readOnly size="small" />
            <Typography
              variant="body2"
              sx={{
                color: "#64748b",
                fontWeight: 700,
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
              }}
            >
              {4.8}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#94a3b8",
                display: { xs: "none", sm: "inline" },
              }}
            >
              •
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#64748b",
                textDecoration: "underline",
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
              }}
            >
              {128} reviews
            </Typography>
          </Box>

          {/* Pricing Box */}
          <Box
            sx={{
              display: "flex",
              alignItems: "baseline",
              gap: { xs: 1, sm: 2 },
              mb: { xs: 1.5, sm: 3 },
              p: { xs: 1.2, sm: 2 },
              borderRadius: "16px",
              bgcolor: "#f8fafc",
              width: "fit-content",
              flexWrap: "wrap",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: "#6366f1",
                fontSize: { xs: "1.25rem", sm: "1.8rem", md: "2.25rem" },
              }}
            >
              ${product?.price?.toFixed(2) ?? "0.00"}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#94a3b8",
                textDecoration: "line-through",
                fontWeight: 600,
                fontSize: { xs: "0.8rem", sm: "1rem" },
              }}
            >
              ${((product?.price || 0) * 1.2).toFixed(2)}
            </Typography>
            <Chip
              label="Save 20%"
              size="small"
              sx={{
                bgcolor: "#fee2e2",
                color: "#ef4444",
                fontWeight: 800,
                fontSize: { xs: "0.65rem", sm: "0.75rem" },
                height: { xs: 20, sm: 24 },
              }}
            />
          </Box>

          <Divider sx={{ mb: { xs: 1.5, sm: 3 } }} />

          {/* Description */}
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 800, color: "#0f172a", mb: 0.5 }}
          >
            Description
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#475569",
              lineHeight: 1.6,
              fontSize: { xs: "0.85rem", sm: "0.95rem" },
              mb: { xs: 2, sm: 4 },
            }}
          >
            {product?.description}
          </Typography>

          {/* Trust Badges Grid */}
          <ProductTrustBadges />
        </Box>

        {/* Action Buttons Section */}
        <ProductActions
          handleAddToCart={handleAddToCart}
          handleBuyNow={handleBuyNow}
          quantityInCart={quantityInCart}
        />
      </Box>
    </>
  );
}

export default ProductInfo;
