"use client";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Home from "@mui/icons-material/Home";
import Link from "next/link";
import { QueryClient, QueryClientProvider } from "react-query";
import { useAuthContext } from "@/context/AuthContext";
import INTERNALS_LINKS from "@/config/routes";
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
  const pathNames = pathname.split("/").filter((path) => path);

  const getKeyByValue = (value: string) => {
    console.log(Object.keys(INTERNALS_LINKS));
    console.log(value);
    return Object.keys(INTERNALS_LINKS).find((key) => {
      return INTERNALS_LINKS[key] === `/${value}`;
    });
  };

  useEffect(() => {
    if (user == null) router.push("/login");
  }, [user, pathname, router]);
  return (
    <QueryClientProvider client={queryClient}>
      <div className='flex h-full'>
        <Sidebar />
        <div className='flex-1 min-h-screen p-8 bg-primary-light/20'>
          <Breadcrumbs className='mb-2' aria-label='breadcrumb'>
            <Link href={INTERNALS_LINKS.DASHBOARD}>
              <Home className='text-10' /> Dashboard
            </Link>
            {pathNames?.map((path, i) => {
              if (i + 1 !== pathNames.length) {
                return <Link href={path}>{getKeyByValue(path)}</Link>;
              } else {
                return <p className='font-bold'>{getKeyByValue(path)}</p>;
              }
            })}
          </Breadcrumbs>
          {children}
        </div>
      </div>
    </QueryClientProvider>
  );
}
