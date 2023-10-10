"use client";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";

const AuthWrapper = ({ children }: { children: ReactNode }) => {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/login");
  }, [user]);

  return user ? children : null;
};

export default AuthWrapper;
