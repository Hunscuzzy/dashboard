"use client";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Sidebar from "./_components/Sidebar";
import Breadcrumb from "./_components/Breadcrumb";
import { useAuth } from "../_contexts/AuthContext";

export default function LoggedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentUser } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (currentUser == null) router.push("/login");
  }, [currentUser, pathname, router]);
  return (
    <div className='flex h-full'>
      <Sidebar />
      <div className='flex-1 min-h-screen p-8 bg-primary-light/20'>
        <Breadcrumb />
        {children}
      </div>
    </div>
  );
}
