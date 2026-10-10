import { Box, Button, Container, Typography } from "@mui/material";
import {
  HomeRounded,
  ArrowBackRounded,
  SearchOffRounded,
} from "@mui/icons-material";

import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 6,
        background:
          "radial-gradient(circle at top, #eff6ff, #f8fafc 60%, #ffffff)",
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Icon */}
          <Box
            sx={{
              width: 110,
              height: 110,
              borderRadius: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #dbeafe, #ede9fe)",
              color: "#4f46e5",
              mb: 3,
              boxShadow: "0 15px 40px rgba(79,70,229,0.12)",
            }}
          >
            <SearchOffRounded sx={{ fontSize: 60 }} />
          </Box>

          {/* Error Code */}
          <Typography
            sx={{
              fontSize: { xs: "5rem", sm: "7rem" },
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-5px",
              background: "linear-gradient(135deg, #4f46e5, #9333ea)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            404
          </Typography>

          {/* Heading */}
          <Typography
            variant="h4"
            sx={{
              mt: 3,
              fontWeight: 800,
              color: "#0f172a",
              fontSize: {
                xs: "1.6rem",
                sm: "2rem",
              },
            }}
          >
            Oops! Page Not Found
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              mt: 2,
              mb: 4,
              maxWidth: 400,
              color: "#64748b",
              fontSize: "1rem",
              lineHeight: 1.8,
            }}
          >
            Looks like this page took a wrong turn. Don't worry, let's get you
            back to shopping!
          </Typography>

          {/* Action Buttons */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Button
              component={Link}
              to="/"
              variant="contained"
              startIcon={<HomeRounded />}
              sx={{
                px: 3,
                py: 1.4,
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 700,
                bgcolor: "#4f46e5",
                boxShadow: "0 8px 20px rgba(79,70,229,0.22)",
                "&:hover": {
                  bgcolor: "#4338ca",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.2s ease",
              }}
            >
              Back to Home
            </Button>

            <Button
              onClick={() => navigate(-1)}
              variant="outlined"
              startIcon={<ArrowBackRounded />}
              sx={{
                px: 3,
                py: 1.4,
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 700,
                color: "#334155",
                borderColor: "#cbd5e1",
                "&:hover": {
                  borderColor: "#4f46e5",
                  bgcolor: "#eef2ff",
                },
              }}
            >
              Go Back
            </Button>
          </Box>

          {/* Footer Text */}
          <Typography
            sx={{
              mt: 5,
              color: "#94a3b8",
              fontSize: "0.85rem",
            }}
          >
            Error Code: 404 · Page unavailable
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default NotFound;
