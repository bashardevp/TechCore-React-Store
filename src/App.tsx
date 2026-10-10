import { useLayoutEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import { Box } from "@mui/material";
import CartProvider from "./context/CartContext.tsx";
import WishlistProvider from "./context/WishlistContext.tsx";
import SnackbarProvider from "./context/SnackbarContext.tsx";
import Navbar from "./components/layout/Navbar.tsx";
import Footer from "./components/layout/Footer.tsx";
import { Home, ProductDetails, Orders, NotFound } from "./pages";
import Checkout from "./pages/Checkout.tsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  //
  useLayoutEffect(() => {
    if (navigationType !== "POP") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [pathname, navigationType]);

  return null;
}

function App() {
  return (
    <>
      <SnackbarProvider>
        <WishlistProvider>
          <CartProvider>
            <Router>
              <ScrollToTop />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "100vh",
                }}
              >
                <Navbar />
                <Box
                  component="main"
                  sx={{
                    flex: 1,
                  }}
                >
                  <Routes>
                    <Route index element={<Home />} />
                    <Route path="/products/:id" element={<ProductDetails />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Box>
                <Footer />
              </Box>
            </Router>
          </CartProvider>
        </WishlistProvider>
      </SnackbarProvider>
    </>
  );
}

export default App;
