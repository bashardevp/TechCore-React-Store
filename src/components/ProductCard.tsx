import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  Tooltip,
  Chip,
  IconButton,
  Rating,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// MUI Icons
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

// Contexts
import { useSnackbar } from "../context/SnackbarContext";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

// Interface
import type { ProductCardProduct } from "./interface";

function ProductCard({ product }: { product: ProductCardProduct }) {
  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();
  const { isFavorite, toggleWishlist } = useWishlist();
  const { cartItems, addToCart } = useCart();
  const favorite = product?.id ? isFavorite(product.id) : false;

  const productInCart = cartItems.find(
    (cartItem) => cartItem.id === product?.id,
  );
  const productQuantity = productInCart?.quantity || 0;

  // Navigate to details page on card click
  const handleCardClick = () => {
    if (product?.id) {
      navigate(`/products/${product.id}`);
    }
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (product?.id) {
      toggleWishlist(product.id);
    }
  };
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (product?.id) {
      addToCart(product.id);
      showSnackbar(
        `${product?.name.slice(0, 20) || "Item"} added to your cart!`,
        "success",
      );
    }
  };

  return (
    <>
      <Card
        onClick={handleCardClick}
        sx={{
          width: "100%",
          maxWidth: 360,
          borderRadius: "20px",
          overflow: "hidden",
          backgroundColor: "#ffffff",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          cursor: "pointer",
          position: "relative",
          border: "1px solid #f1f5f9",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.03)",
            borderColor: "#cbd5e1",
            "& .product-image": {
              transform: "scale(1.05)",
            },
          },
        }}
      >
        {/* Top Badges & Wishlist Button */}
        <Box
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            zIndex: 2,
            display: "flex",
            gap: 1,
          }}
        >
          <Chip
            label="New"
            size="small"
            sx={{
              bgcolor: "#0f172a",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "0.65rem",
              height: "22px",
            }}
          />
        </Box>

        <IconButton
          size="small"
          onClick={handleFavoriteClick}
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            zIndex: 2,
            bgcolor: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(6px)",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.06)",
            "&:hover": { bgcolor: "#ffffff", color: "#ef4444" },
          }}
        >
          {favorite ? (
            <FavoriteIcon fontSize="small" sx={{ color: "#ef4444" }} />
          ) : (
            <FavoriteBorderIcon fontSize="small" sx={{ color: "#64748b" }} />
          )}
        </IconButton>

        {/* Product Image Container */}
        <Box
          sx={{
            overflow: "hidden",
            height: 220,
            bgcolor: "#f8fafc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardMedia
            className="product-image"
            component="img"
            image={product?.image}
            alt={product?.name || "Product"}
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              p: "8px 10px",
              borderRadius: "25px",
              transition: "transform 0.4s ease-in-out",
            }}
          />
        </Box>

        {/* Product Content & Details */}
        <CardContent
          sx={{
            p: 2.5,
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Rating */}
          <Box sx={{ mb: 1, display: "flex", alignItems: "center", gap: 0.5 }}>
            <Rating value={4.8} precision={0.1} size="small" readOnly />
            <Typography
              variant="caption"
              sx={{ color: "#64748b", fontWeight: 600 }}
            >
              (4.8)
            </Typography>
          </Box>

          {/* Name */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#0f172a",
              fontSize: "1.05rem",
              mb: 0.8,
              lineHeight: 1.3,
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {product?.name}
          </Typography>

          {/* Description */}
          <Typography
            variant="body2"
            sx={{
              color: "#64748b",
              mb: 2.5,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              fontSize: "0.85rem",
              lineHeight: 1.5,
            }}
          >
            {product?.description}
          </Typography>

          {/* Price & Add to Cart Action */}
          <Box
            sx={{
              mt: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              pt: 1,
            }}
          >
            <Box>
              <Typography
                variant="caption"
                sx={{
                  color: "#94a3b8",
                  textDecoration: "line-through",
                  display: "block",
                }}
              >
                ${((product?.price || 0) * 1.2).toFixed(2)}
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: 800, color: "#0f172a" }}
              >
                ${product?.price?.toFixed(2) ?? "0.00"}
              </Typography>
            </Box>

            <Tooltip title="Add to Cart" placement="top">
              <Button
                variant="contained"
                onClick={handleAddToCart}
                startIcon={<AddShoppingCartIcon />}
                sx={{
                  borderRadius: "12px",
                  bgcolor: "#0f172a",
                  color: "#ffffff",
                  px: 2,
                  py: 1,
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  boxShadow: "0 4px 12px rgba(15, 23, 42, 0.15)",
                  "&:hover": {
                    bgcolor: "#1e293b",
                    boxShadow: "0 6px 16px rgba(15, 23, 42, 0.25)",
                  },
                }}
              >
                Add {productQuantity > 0 ? `(${productQuantity})` : ""}
              </Button>
            </Tooltip>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

export default ProductCard;
