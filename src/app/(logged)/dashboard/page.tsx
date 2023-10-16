"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/_contexts/AuthContext";

const Dashboard: React.FC = () => {
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (currentUser == null) router.push("/login");
  }, [currentUser, router]);

  return <h1>Dashboard</h1>;
};

export default Dashboard;
