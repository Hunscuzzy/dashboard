"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useAuthContext } from "@/context/AuthContext";

const queryClient = new QueryClient();

export default function LoggedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
