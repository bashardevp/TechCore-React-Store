import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function EmptyCart() {
  const navigate = useNavigate();
  return (
    <>
      <Container maxWidth="xl" sx={{ py: 10, textAlign: "center" }}>
        <Paper
          elevation={0}
          sx={{
            p: 6,
            borderRadius: "24px",
            border: "1px solid #f1f5f9",
            bgcolor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: 90,
              height: 90,
              borderRadius: "50%",
              bgcolor: "#f1f5f9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#94a3b8",
            }}
          >
            <ShoppingBagOutlinedIcon sx={{ fontSize: 48 }} />
          </Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              color: "#0f172a",
              fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2.25rem" },
            }}
          >
            Your Cart is Empty
          </Typography>
          <Typography variant="body1" sx={{ color: "#64748b", maxWidth: 400 }}>
            Looks like you haven't added any products to your shopping cart yet.
          </Typography>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            // onClick={() => window.history.back()}
            onClick={() => navigate("/")}
            sx={{
              mt: 2,
              borderRadius: "12px",
              bgcolor: "#0f172a",
              color: "#ffffff",
              px: 4,
              py: 1.2,
              textTransform: "none",
              fontWeight: 700,
              boxShadow: "0 4px 12px rgba(15, 23, 42, 0.15)",
              "&:hover": { bgcolor: "#1e293b" },
            }}
          >
            Continue Shopping
          </Button>
        </Paper>
      </Container>
    </>
  );
}

export default EmptyCart;
