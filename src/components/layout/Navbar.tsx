import * as React from "react";
import {
  AppBar,
  Box,
  Badge,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useLocation, useNavigate } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
const logo = "/images/logo.png";

export default function MenuAppBar() {
  const { wishlistItems } = useWishlist(); 
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const totalItems = cartItems.length;

  // Check current route
  const isHomePage = location.pathname === "/";

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        position={isHomePage ? "fixed" : "static"}
        elevation={0}
        sx={{
          backgroundColor: isHomePage
            ? isScrolled
              ? "rgba(7, 26, 43, 0.94)"
              : "rgba(7, 26, 43, 0.18)"
            : "#071A2B",
          backgroundImage:
            isHomePage && !isScrolled
              ? "linear-gradient(180deg, rgba(7, 26, 43, 0.72) 0%, rgba(7, 26, 43, 0.18) 100%)"
              : "none",
          backdropFilter: isHomePage && isScrolled ? "blur(10px)" : "none",
          color: "#fff",
          boxShadow:
            isHomePage && !isScrolled ? "none" : "0 1px 8px rgba(0,0,0,0.12)",
          transition:
            "background-color 200ms ease, backdrop-filter 200ms ease, box-shadow 200ms ease",
        }}
      >
        <Toolbar>
          <Box
            sx={{ display: "flex", alignItems: "center", flexGrow: 1, gap: 2 }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              component="img"
              src={logo}
              alt="logo"
              sx={{
                height: 40,
                cursor: "pointer",
                filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.65))",
              }}
              onClick={() => navigate("/")}
            ></Box>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                cursor: "pointer",
                textShadow: "0 1px 4px rgba(0,0,0,0.75)",
                display: { xs: "none", sm: "block" },
              }}
              onClick={() => navigate("/")}
            >
              Home
            </Typography>
          </Box>

          <Box>
            <IconButton color="inherit" onClick={() => navigate("/wishlist")}>
              <Badge badgeContent={wishlistItems.length} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>
          </Box>

          <Box>
            <IconButton color="inherit" onClick={() => navigate("/checkout")}>
              <Badge badgeContent={totalItems} max={2} color="success">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  navigate("/orders");
                }}
              >
                Orders
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
