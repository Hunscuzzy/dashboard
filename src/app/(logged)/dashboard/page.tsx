"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";
import LoggedLayout from "@/components/layout/LoggedLayout";

const Dashboard: React.FC = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/login");
  }, [user, router]);

  return (
    <LoggedLayout>
      <h1>Dashboard</h1>
    </LoggedLayout>
  );
};

export default Dashboard;
