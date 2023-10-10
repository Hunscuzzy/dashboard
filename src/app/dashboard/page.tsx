"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";
import LoggedLayout from "@/components/layout/LoggedLayout";

const Page: React.FC = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/login");
  }, [user]);

  return (
    <LoggedLayout>
      <h1>Only logged in users can view this page</h1>
    </LoggedLayout>
  );
};

export default Page;
