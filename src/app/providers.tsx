"use client";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@mui/material";
import { AuthProvider } from "./_contexts/AuthContext";
import { NotificationProvider } from "./_contexts/NotificationContext";
import Notifications from "@/components/misc/Notifications";
import theme from "@/config/theme";

export function Providers({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <NotificationProvider>
          <QueryClientProvider client={queryClient}>
            {children}
            <Notifications />
          </QueryClientProvider>
        </NotificationProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
