"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";
import Section from "../_components/Section";
import EditionForm from "./_components/EditionForm";

const Settings: React.FC = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/login");
  }, [user, router]);

  return (
    <div className=''>
      <Section>
        <EditionForm />
      </Section>
    </div>
  );
};

export default Settings;
