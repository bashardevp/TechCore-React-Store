import { Box, Typography, Button, Container } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const bannerBg = "/images/banner3.png";
function HeroBanner() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "400px", sm: "480px", md: "600px" },
        backgroundImage: `url(${bannerBg})`,
        backgroundSize: { xs: "auto 160%", sm: "cover" },
        backgroundPosition: { xs: "left center", sm: "center" },
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            maxWidth: { xs: "320px", sm: "400px", md: "500px", xl: "600px" },
            color: "#0a4470",
            pl: { xs: 1, sm: 2, md: 4 },
          }}
        >
          {/* Main Heading */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3.2rem" },
              letterSpacing: "1px",
              lineHeight: 1.1,
              mb: 2,
              textTransform: "uppercase",
            }}
          >
            UPGRADE YOUR TECH SETUP
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="body1"
            sx={{
              color: "#0f0f0f",
              mb: 3,
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              fontWeight: 300,
            }}
          >
            Curated wireless showcase modern premium electronics store.
          </Typography>

          {/* CTA Button */}
          <Button
            component="a"
            href="#best-selling-products"
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              backgroundColor: "#156178",
              fontWeight: "bold",
              px: 4,
              py: 1.2,
              borderRadius: "8px",
              textTransform: "none",
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: "#0d1c58",
              },
            }}
          >
            Shop Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default HeroBanner;
