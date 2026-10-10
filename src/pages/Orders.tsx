import { useMemo, useState } from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

import { useCart } from "../context/CartContext";
import type { OrderFilter, OrderStatus } from "../interfaces/orders.interface";

const statusIcon: Record<OrderStatus, React.ReactElement> = {
  Delivered: <CheckCircleIcon />,
  Shipped: <LocalShippingOutlinedIcon />,
  Processing: <ScheduleOutlinedIcon />,
  Cancelled: <CancelOutlinedIcon />,
};

function Orders() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<OrderFilter>("All");

  const { ordersItems } = useCart();
  const searchOrders = useMemo(
    () =>
      ordersItems.filter(
        (orderItem) =>
          (filter === "All" || orderItem.status === filter) &&
          (orderItem.id.toLowerCase().includes(query.toLowerCase()) ||
            orderItem.items.some((item) =>
              item.name.toLowerCase().includes(query.toLowerCase()),
            )),
      ),
    [filter, ordersItems, query],
  );

  return (
    <Box sx={{ bgcolor: "#f8fafc", minHeight: "100vh", py: { xs: 3, md: 6 } }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "#0f172a",
              fontSize: { xs: "1.8rem", md: "2.35rem" },
              mb: 1,
            }}
          >
            My Orders
          </Typography>
          <Typography sx={{ color: "#64748b" }}>
            Track your recent purchases and view order details.
          </Typography>
        </Box>

        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, sm: 2.5 },
            mb: 3,
            borderRadius: "20px",
            border: "1px solid #e2e8f0",
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            sx={{alignItems: { xs: "stretch", md: "center" }, justifyContent: "space-between" }}

          >
            <TextField
              fullWidth
              size="small"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by order number or product..."
              slotProps={{
                input: {
                  startAdornment: (
                    <SearchIcon sx={{ mr: 1, color: "#94a3b8" }} />
                  ),
                },
              }}
              sx={{
                maxWidth: { md: 430 },
                "& .MuiOutlinedInput-root": { borderRadius: "12px" },
              }}
            />
            <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
              {(
                [
                  "All",
                  "Processing",
                  "Shipped",
                  "Delivered",
                  "Cancelled",
                ] as const
              ).map((item) => (
                <Button
                  key={item}
                  onClick={() => setFilter(item)}
                  variant={filter === item ? "contained" : "outlined"}
                  size="small"
                  sx={{
                    borderRadius: "10px",
                    textTransform: "none",
                    fontWeight: 700,
                    borderColor: "#e2e8f0",
                    bgcolor: filter === item ? "#0f172a" : "#fff",
                    color: filter === item ? "#fff" : "#475569",
                  }}
                >
                  {item}
                </Button>
              ))}
            </Stack>
          </Stack>
        </Paper>

        <Stack spacing={2.5}>
          {searchOrders.map((order) => (
            <Paper
              key={order.id}
              elevation={0}
              sx={{
                borderRadius: "22px",
                border: "1px solid #e2e8f0",
                overflow: "hidden",
              }}
            >
              <Box sx={{ p: { xs: 2, sm: 3 } }}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{
                    justifyContent: "space-between",
                    alignItems: { xs: "flex-start", sm: "center" },
                  }}
                >
                  <Box>
                    <Typography sx={{ fontWeight: 800 }}>{order.id}</Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#94a3b8", mt: 0.5 }}
                    >
                      Placed on {order.date}
                    </Typography>
                  </Box>
                  <Chip
                    icon={statusIcon[order.status]}
                    label={order.status}
                    color={
                      order.status === "Delivered"
                        ? "success"
                        : order.status === "Shipped"
                          ? "info"
                          : order.status === "Processing"
                            ? "warning"
                            : "error"
                    }
                    size="small"
                    sx={{ fontWeight: 700 }}
                  />
                </Stack>
                <Divider sx={{ my: 2.5 }} />
                <Stack spacing={1.5}>
                  {order.items.map((item, i) => (
                    <Stack
                      key={i}
                      direction="row"
                      spacing={2}
                      sx={{ alignItems: "center" }}
                    >
                      <Box
                        sx={{
                          width: 68,
                          height: 68,
                          borderRadius: "14px",
                          bgcolor: "#f8fafc",
                          border: "1px solid #f1f5f9",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          overflow: "hidden",
                          flexShrink: 0,
                        }}
                      >
                        {item.image ? (
                          <Box
                            component="img"
                            src={item.image}
                            alt={item.name}
                            sx={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        ) : (
                          <ShoppingBagOutlinedIcon sx={{ color: "#94a3b8" }} />
                        )}
                      </Box>
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography
                          sx={{
                            fontWeight: 700,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {item.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#64748b" }}>
                          Qty: {item.quantity}
                        </Typography>
                      </Box>
                      <Typography sx={{ fontWeight: 800 }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
                <Divider sx={{ my: 2.5 }} />
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{justifyContent: "space-between", alignItems: { xs: "flex-start", sm: "center" } }}
                >
                  <Typography variant="body2" sx={{ color: "#64748b" }}>
                    {order.items.reduce((s, i) => s + i.quantity, 0)} item(s)
                  </Typography>

                  <Box>
                    <Typography variant="caption" sx={{ color: "#94a3b8" }}>
                      Order total
                    </Typography>
                    <Typography sx={{ fontWeight: 800 }}>
                      ${order.total.toFixed(2)}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Paper>
          ))}
          {!ordersItems.length && (
            <Paper
              elevation={0}
              sx={{
                p: 6,
                textAlign: "center",
                borderRadius: "22px",
                border: "1px solid #e2e8f0",
              }}
            >
              <ShoppingBagOutlinedIcon
                sx={{ fontSize: 48, color: "#94a3b8" }}
              />
              <Typography variant="h6" sx={{ fontWeight: 800 }}>
                No orders found
              </Typography>
              <Typography sx={{ color: "#64748b" }}>
                Try another search or filter.
              </Typography>
            </Paper>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
export default Orders;

//
//
