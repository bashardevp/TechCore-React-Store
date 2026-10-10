import { useNavigate, useParams } from "react-router-dom";
import { Paper, Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { getProductById } from "../data/products";
import { useSnackbar } from "../context/SnackbarContext";
import { useCart } from "../context/CartContext";
import {
  ProductInfo,
  ProductNotFound,
  ProductImageSection,
} from "../components/product-details";
import type { ProductDetailsProduct } from "../interfaces/productDetails.interface";
function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const { showSnackbar } = useSnackbar();

  const product: ProductDetailsProduct | undefined = getProductById(Number(id));

  const productInCart = cartItems.find(
    (cartItem) => cartItem.id === product?.id,
  );

  const quantityInCart = productInCart?.quantity || 0;

  if (!product) {
    return <ProductNotFound />;
  }
  return (
    <Box sx={{ bgcolor: "#f8fafc", minHeight: "100vh", py: { xs: 3, md: 6 } }}>
      <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Back Button */}
        <Box
          sx={{
            mb: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
            sx={{
              color: "#64748b",
              fontWeight: 700,
              textTransform: "none",
              borderRadius: "10px",
              px: 2,
              py: 0.8,
              bgcolor: "#ffffff",
              border: "1px solid #e2e8f0",
              boxShadow: "0 2px 6px rgba(0,0,0,0.02)",
              "&:hover": { bgcolor: "#f1f5f9", color: "#0f172a" },
            }}
          >
            Back to Products
          </Button>
        </Box>
        {/* Main Product Card Paper */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: "28px",
            border: "1px solid #e2e8f0",
            bgcolor: "#ffffff",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
            p: { xs: 2, sm: 3, md: 5 },
          }}
        >
          {/* Main Layout Container: Image on Left, Details on Right */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 3, md: 6 },
              alignItems: "stretch",
            }}
          >
            {/* Left Column: Image Showcase */}

            <ProductImageSection product={product} />

            {/* Right Column: Details & Actions */}
            <ProductInfo
              product={product}
              productInCart={productInCart}
              quantityInCart={quantityInCart}
              showSnackbar={showSnackbar}
            />
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default ProductDetails;
