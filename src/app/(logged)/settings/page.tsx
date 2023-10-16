"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/_contexts/AuthContext";
import Section from "../_components/Section";
import EditionForm from "./_components/EditionForm";

const Settings: React.FC = () => {
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (currentUser == null) router.push("/login");
  }, [currentUser, router]);

  return (
    <div className=''>
      <Section>
        <EditionForm />
      </Section>
    </div>
  );
};

export default Settings;
