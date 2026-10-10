import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type SyntheticEvent,
} from "react";
import { Snackbar, Alert } from "@mui/material";
import type { SnackbarCloseReason } from "@mui/material/Snackbar";
import type { ISnackbarContextType } from "./interfaces/interface";
import type { ISnackbarState, ISnackbarSeverity } from "./interfaces/interface";
const SnackbarContext = createContext<ISnackbarContextType | null>(null);

export default function SnackbarProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [snackbar, setSnackbar] = useState<ISnackbarState>({
    open: false,
    message: "",
    severity: "success",
  });

  const showSnackbar = (
    message: string,
    severity: ISnackbarSeverity = "success",
  ) => {
    setSnackbar({
      open: true,
      message,
      severity,
    });
  };

  const hideSnackbar = (
    _event: SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar((prev) => ({
      ...prev,
      open: false,
    }));
  };

  return (
    <SnackbarContext value={{ showSnackbar }}>
      {children}

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={hideSnackbar}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Alert
          onClose={hideSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </SnackbarContext>
  );
}

export function useSnackbar() {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
}
