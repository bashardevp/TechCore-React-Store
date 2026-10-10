import { useNavigate } from "react-router-dom";
import { Typography, Paper, Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function ProductNotFound() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        py: 10,
        px: 2,
        textAlign: "center",
        bgcolor: "#f8fafc",
        minHeight: "80vh",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          maxWidth: 500,
          mx: "auto",
          p: 5,
          borderRadius: "24px",
          border: "1px solid #e2e8f0",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
          Product Not Found
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#64748b",
            mb: 3,
          }}
        >
          The item you are looking for does not exist or has been removed.
        </Typography>

        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/")}
          sx={{
            borderRadius: "12px",
            bgcolor: "#0f172a",
            textTransform: "none",
            fontWeight: 700,
            "&:hover": {
              bgcolor: "#1e293b",
            },
          }}
        >
          Back to Store
        </Button>
      </Paper>
    </Box>
  );
}

export default ProductNotFound;
