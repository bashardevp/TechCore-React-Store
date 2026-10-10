import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import type { IOrderSuccessDialogProps } from "../interfaces/checkout.interface";

function OrderSuccessDialog({
  orderSuccess,
  setOrderSuccess,
}: IOrderSuccessDialogProps) {
  return (
    <>
      <Dialog
        open={orderSuccess}
        onClose={() => setOrderSuccess(false)}
        slotProps={{
          paper: {
            sx: {
              borderRadius: "24px",
              p: 2,
              maxWidth: 420,
              textAlign: "center",
            },
          },
        }}
      >
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            pt: 3,
          }}
        >
          <CheckCircleIcon sx={{ fontSize: 72, color: "#10b981" }} />
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              color: "#0f172a",
              fontSize: { xs: 18, md: 22 },
            }}
          >
            Order Placed Successfully!
          </Typography>
          <Typography variant="body2" sx={{ color: "#64748b" }}>
            Thank you for your purchase. We have received your order and are
            processing it.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", pb: 3, px: 3 }}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => setOrderSuccess(false)}
            sx={{
              py: 1.2,
              borderRadius: "12px",
              bgcolor: "#0f172a",
              color: "#ffffff",
              fontWeight: 700,
              textTransform: "none",
              "&:hover": { bgcolor: "#1e293b" },
            }}
          >
            Continue Shopping
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default OrderSuccessDialog;
