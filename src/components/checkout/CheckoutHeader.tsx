import { Box, Typography } from "@mui/material";

function CheckoutHeader() {
  return (
    <Box
      sx={{
        mb: { xs: 3, md: 4 },
        px: { xs: 1, sm: 0 },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          color: "#0f172a",
          fontSize: { xs: "1.4rem", sm: "1.75rem", md: "2.25rem" },
          lineHeight: 1.2,
          mb: 1,
          wordBreak: "break-word",
        }}
      >
        Shopping Cart & Checkout
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#64748b",
          fontSize: { xs: "0.875rem", sm: "1rem" },
          lineHeight: 1.5,
        }}
      >
        Review your selected items and complete your order
      </Typography>
    </Box>
  );
}

export default CheckoutHeader;
