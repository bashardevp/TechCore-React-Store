import { Box, Typography, Chip } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import Product from "../components/ProductCard";
import CategoryCollections from "../components/CategoryCollections";
import { getProducts } from "../data/products";

function Home() {
  const products = getProducts();
  return (
    <>
      <HeroBanner />
      <CategoryCollections />
      {/* Product*/}
      <Box id="best-selling-products" sx={{ textAlign: "center", mb: 6 }}>
        <Chip
          label="Trending Products"
          size="small"
          sx={{
            backgroundColor: "#f1f5f9",
            color: "#64748b",
            fontWeight: 700,
            mb: 2,
            px: 1,
          }}
        />
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            color: "#0f172a",
            fontSize: { xs: "1.75rem", md: "2.75rem" },
            mb: 1,
          }}
        >
          Best Selling Products
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#64748b", maxWidth: "600px", mx: "auto" }}
        >
          Discouver our most popular products, loved by our customers for their
          quality and performance.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          width: { xs: "95%", sm: "80%" },
          maxWidth: "xxl",
          margin: "0 auto",
          padding: 2,
        }}
      >
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Box>
    </>
  );
}

export default Home;
