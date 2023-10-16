"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useAuth } from "../_contexts/AuthContext";

const queryClient = new QueryClient();

export default function LoggedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      router.push("/dashboard");
    }
  }, [currentUser, router]);
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
