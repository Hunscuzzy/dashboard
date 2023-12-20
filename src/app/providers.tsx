"use client";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./_contexts/AuthContext";
import { NotificationProvider } from "./_contexts/NotificationContext";
import Notifications from "@/components/misc/Notifications";

export function Providers({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <AuthProvider>
      <NotificationProvider>
        <QueryClientProvider client={queryClient}>
          {children}
          <Notifications />
        </QueryClientProvider>
      </NotificationProvider>
    </AuthProvider>
  );
}
