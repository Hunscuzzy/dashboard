"use client";
import { useAuthContext } from "@/context/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Sidebar from "./_components/Sidebar";

const queryClient = new QueryClient();

export default function LoggedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuthContext();
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    if (user == null) router.push("/login");
  }, [user, pathname, router]);
  return (
    <QueryClientProvider client={queryClient}>
      <div className='flex'>
        <Sidebar />
        {children}
      </div>
    </QueryClientProvider>
  );
}
