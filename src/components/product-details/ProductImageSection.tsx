import { Box, CardMedia, Chip, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useWishlist } from "../../context/WishlistContext";
import type { IProductImageSectionProps } from "./interfaces/interface";

function ProductImageSection({ product }: IProductImageSectionProps) {
  const { isFavorite, toggleWishlist } = useWishlist();
  const favorite = product?.id ? isFavorite(product.id) : false;

  return (
    <>
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#f8fafc",
          width: { xs: "100%", md: "50%" },
          display: "flex",
          cursor: "pointer",
          flexDirection: "column",
          "&:hover": {
            borderColor: "#cbd5e1",
            "& .product-image": {
              transform: "scale(1.05)",
              filter: "brightness(0.80)",
            },
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            borderRadius: "20px",
            bgcolor: "#f8fafc",
            border: "1px solid #f1f5f9",
            height: { xs: 300, sm: 380, md: 500 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: { xs: 1.5, sm: 1.5, md: 2 },
            overflow: "hidden",
          }}
        >
          {/* Floating Badges */}
          <Box
            sx={{
              position: "absolute",
              top: { xs: 20, sm: 20, md: 25 },
              left: { xs: 25, sm: 28, md: 30 },
              zIndex: 2,
              display: "flex",
              gap: 1,
              flexWrap: "wrap",
            }}
          >
            <Chip
              label={product?.name || "Featured"}
              size="small"
              sx={{
                bgcolor: "#0f172a",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: { xs: "0.6rem", sm: "0.7rem" },
                height: { xs: 22, sm: 26 },
              }}
            />
            <Chip
              label="In Stock"
              size="small"
              sx={{
                bgcolor: "#ecfdf5",
                color: "#059669",
                fontWeight: 700,
                fontSize: { xs: "0.6rem", sm: "0.7rem" },
                height: { xs: 22, sm: 26 },
                border: "1px solid #a7f3d0",
              }}
            />
          </Box>

          {/* Wishlist Button */}
          <IconButton
            onClick={() => product?.id && toggleWishlist(product.id)}
            size="small"
            sx={{
              position: "absolute",
              top: { xs: 8, sm: 20 },
              right: { xs: 8, sm: 20 },
              zIndex: 2,
              bgcolor: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
              "&:hover": { bgcolor: "#ffffff", transform: "scale(1.08)" },
              transition: "all 0.2s ease",
            }}
          >
            {favorite ? (
              <FavoriteIcon
                sx={{ color: "#ef4444", fontSize: { xs: 18, sm: 22 } }}
              />
            ) : (
              <FavoriteBorderIcon
                sx={{ color: "#64748b", fontSize: { xs: 18, sm: 22 } }}
              />
            )}
          </IconButton>

          {/* Main Product Image */}
          <CardMedia
            className="product-image"
            component="img"
            image={product?.image}
            alt={product?.name || "Product"}
            sx={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
              borderRadius: "20px",
              transition: "transform 0.4s ease-in-out",
            }}
          />
        </Box>
      </Box>
    </>
  );
}

export default ProductImageSection;
