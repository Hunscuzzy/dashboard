import { useCallback, useMemo } from "react";
import { Home } from "@mui/icons-material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import INTERNALS_LINKS from "@/config/routes";

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();
  const pathNames = useMemo(
    () => pathname.split("/").filter((path) => path),
    [pathname]
  );

  const getKeyByValue = useCallback((value: string) => {
    return Object.keys(INTERNALS_LINKS).find(
      (key) => INTERNALS_LINKS[key] === `/${value}`
    );
  }, []);

  if (pathname === "/dashboard") return null;
  return (
    <Breadcrumbs className='mb-2' aria-label='breadcrumb'>
      <Link href={INTERNALS_LINKS.DASHBOARD}>
        <Home className='text-10 mb-1' /> Dashboard
      </Link>
      {pathNames?.map((path, i) => {
        if (i + 1 !== pathNames.length) {
          return (
            <Link key={i} href={path}>
              {getKeyByValue(path)}
            </Link>
          );
        } else {
          return (
            <p key={i} className='font-bold'>
              {getKeyByValue(path)}
            </p>
          );
        }
      })}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
