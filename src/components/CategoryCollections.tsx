import {
  Box,
  Typography,
  Grid,
  Paper,
  ButtonBase,
  Chip,
  Container,
} from "@mui/material";
// MUI Icons
import HeadphonesIcon from "@mui/icons-material/Headphones";
import EarbudsIcon from "@mui/icons-material/Earbuds";
import MouseIcon from "@mui/icons-material/Mouse";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";

const CategoryCollections = () => {
  const categories = [
    {
      id: "headphones",
      name: "Headphones",
      icon: <HeadphonesIcon sx={{ fontSize: 32 }} />,
      color: "#3b82f6",
      bgColor: "#eff6ff",
    },
    {
      id: "earphones",
      name: "Earphones",
      icon: <EarbudsIcon sx={{ fontSize: 32 }} />,
      color: "#ec4899",
      bgColor: "#fdf2f8",
    },
    {
      id: "mouse",
      name: "Mouse",
      icon: <MouseIcon sx={{ fontSize: 32 }} />,
      color: "#8b5cf6",
      bgColor: "#f5f3ff",
    },
    {
      id: "keyboard",
      name: "Keyboard",
      icon: <KeyboardIcon sx={{ fontSize: 32 }} />,
      color: "#f59e0b",
      bgColor: "#fffbeb",
    },
    {
      id: "accessories",
      name: "Accessories",
      icon: <SettingsInputComponentIcon sx={{ fontSize: 32 }} />,
      color: "#10b981",
      bgColor: "#ecfdf5",
    },
  ];
  //
  return (
    <Box sx={{ py: 8, backgroundColor: "#ffffff" }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Chip
            label="Shop by Category"
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
              fontSize: { xs: "2rem", md: "2.75rem" },
              mb: 1,
            }}
          >
            Explore Our Collections
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#64748b", maxWidth: "600px", mx: "auto" }}
          >
            Find exactly what you're looking for from our curated categories
          </Typography>
        </Box>

        <Grid
          container
          spacing={5}
          sx={{
            width: { xs: "100%", sm: "80%" },
            mx: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {categories.map((item) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={item.id}>
              <Paper
                elevation={1}
                component={ButtonBase}
                sx={{
                  width: "100%",
                  p: 4,
                  borderRadius: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  transition: "all 0.4s ease",
                  border: "1px solid #f1f5f9",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.05)",
                    borderColor: item.color,
                    "& .icon-box": {
                      backgroundColor: item.color,
                      color: "#ffffff",
                    },
                  },
                }}
              >
                <Box
                  className="icon-box"
                  sx={{
                    width: 70,
                    height: 70,
                    borderRadius: "20px",
                    backgroundColor: item.bgColor,
                    color: item.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 700, color: "#1e293b" }}
                >
                  {item.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CategoryCollections;
