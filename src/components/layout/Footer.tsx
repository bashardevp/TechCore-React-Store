import { Link as RouterLink } from "react-router-dom";
import { Box, Container, Link, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const footerLinks = [
  {
    title: "Explore",
    links: [{ label: "Home", to: "/" }],
  },
  {
    title: "Your account",
    links: [
      { label: "Shopping cart", to: "/checkout" },
      { label: "Your orders", to: "/orders" },
    ],
  },
];

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        color: "#e2e8f0",
        backgroundColor: "#071a2b",
        borderTop: "4px solid #156178",
      }}
    >
      <Container maxWidth="xl" sx={{ py: { xs: 5, md: 3 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "2fr 1fr 1fr" },
            gap: { xs: 4, md: 8 },
          }}
        >
          <Box sx={{ gridColumn: { xs: "1 / -1", md: "auto" } }}>
            <Link
              component={RouterLink}
              to="/"
              underline="none"
              color="inherit"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                mb: 2,
              }}
            >
              <Box
                component="img"
                src="/images/logo.png"
                alt=""
                sx={{ display: "block", height: 38, width: "auto" }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "0.90rem", sm: "1.25rem" },
                }}
              >
                Tech, thoughtfully chosen.
              </Typography>
            </Link>
            <Typography
              variant="body2"
              sx={{ maxWidth: 360, color: "#94a3b8", lineHeight: 1.8 }}
            >
              Find the everyday essentials that make your setup work better.
            </Typography>
            <Link
              component={RouterLink}
              to="/"
              underline="none"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.75,
                mt: 2.5,
                color: "#67d1d7",
                fontWeight: 700,
                "&:hover": { color: "#a5f3fc" },
              }}
            >
              Discover the collection <ArrowForwardIcon fontSize="small" />
            </Link>
          </Box>

          {footerLinks.map((section) => (
            <Box component="nav" aria-label={section.title} key={section.title}>
              <Typography
                variant="subtitle2"
                sx={{
                  mb: 2,
                  color: "#ffffff",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {section.title}
              </Typography>
              <Box sx={{ display: "grid", gap: 1.5 }}>
                {section.links.map((link) => (
                  <Link
                    component={RouterLink}
                    to={link.to}
                    underline="none"
                    color="inherit"
                    key={link.label}
                    sx={{
                      width: "fit-content",
                      color: "#94a3b8",
                      transition: "color 160ms ease",
                      "&:hover": { color: "#ffffff" },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            flexDirection: { xs: "column", sm: "row" },
            gap: 1.5,
            mt: { xs: 5, md: 3 },
            pt: 2.5,
            borderTop: "1px solid rgba(148, 163, 184, 0.2)",
          }}
        >
          <Typography variant="caption" sx={{ color: "#94a3b8" }}>
            © {new Date().getFullYear()} All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: "#64748b" }}>
            Made for your everyday setup.
          </Typography>
        </Box>
        <Box
          sx={{
            mt: 2,
            overflow: "hidden",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              display: "block",
              color: "#67d1d7",
              fontWeight: 700,
              textAlign: "center",
              fontSize: { sm: "0.75rem", md: "0.875rem" },
              animation: "footerCreditPulse 2s ease-in-out infinite",
              "@keyframes footerCreditPulse": {
                "0%, 100%": { transform: "scale(1)" },
                "50%": { transform: "scale(1.08)" },
              },
              "@media (prefers-reduced-motion: reduce)": {
                animation: "none",
              },
            }}
          >
            Developed by Malik Mubashir Nawaz
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
