"use client";
import React, { ReactNode, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";

const AuthWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user } = useAuthContext();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (user == null && pathname !== "/") router.push("/login");
  }, [user, pathname]);

  return user ? children : null;
};

export default AuthWrapper;
