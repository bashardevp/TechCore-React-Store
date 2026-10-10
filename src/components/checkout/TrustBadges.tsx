import { Box, Typography } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";

function TrustBadges() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.2,
          mt: 2,
          pt: 2,
          borderTop: "1px solid #f1f5f9",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <LocalShippingOutlinedIcon sx={{ color: "#64748b", fontSize: 20 }} />
          <Typography
            variant="caption"
            sx={{ color: "#64748b", fontWeight: 500 }}
          >
            Free delivery on orders over $150
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <ShieldOutlinedIcon sx={{ color: "#64748b", fontSize: 20 }} />
          <Typography
            variant="caption"
            sx={{ color: "#64748b", fontWeight: 500 }}
          >
            Encrypted & 100% secure checkout
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default TrustBadges;
