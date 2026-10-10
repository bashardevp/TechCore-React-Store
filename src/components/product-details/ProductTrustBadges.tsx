import { Box, Typography } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import AutorenewIcon from "@mui/icons-material/Autorenew";

function ProductTrustBadges() {
  const trustBadges = [
    {
      icon: <LocalShippingOutlinedIcon />,
      color: "#6366f1",
      label: "Free Shipping",
    },
    {
      icon: <VerifiedUserOutlinedIcon />,
      color: "#6366f1",
      label: "2 Year Warranty",
    },
    {
      icon: <AutorenewIcon />,
      color: "#6366f1",
      label: "30-Day Returns",
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 2,
        width: "100%",
        marginBottom: 2,
      }}
    >
      {trustBadges.map((badge, index) => (
        <Box
          key={index}
          sx={{
            p: { xs: 1, sm: 1.5 },
            borderRadius: "12px",
            bgcolor: "#f8fafc",
            border: "1px solid #f1f5f9",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 0.5,
          }}
        >
          <Box sx={{ color: badge.color, display: "flex" }}>{badge.icon}</Box>

          <Typography
            variant="caption"
            sx={{
              display: "block",
              fontWeight: 700,
              color: badge.color,
              fontSize: { xs: "0.65rem", sm: "0.70rem" },
            }}
          >
            {badge.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default ProductTrustBadges;
