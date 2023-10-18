import React from "react";
import Link from "next/link";
import Logout from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import { sidebarLinks } from "@/data/navigation";
import { useLogout } from "@/services/auth/queries";

const Sidebar: React.FC = () => {
  const { mutate: handleLogout, isLoading } = useLogout();
  return (
    <Drawer
      sx={{
        flexShrink: 0,
        width: 256,
        "& .MuiDrawer-paper": {
          width: 256,
          boxSizing: "border-box",
        },
      }}
      variant='permanent'
      anchor='left'
    >
      <nav>
        <ul className='flex flex-col gap-y-2 m-2'>
          {sidebarLinks.map(({ Icon, ...link }, i) => (
            <Link
              className='p-2 gap-4 bg-primary-light hover:bg-primary transition-colors rounded flex items-center'
              href={link.uri}
              key={i}
            >
              <span>{<Icon />}</span>
              {link.title}
            </Link>
          ))}
        </ul>
      </nav>
      <Button
        onClick={handleLogout as () => void}
        disabled={isLoading}
        className='mt-auto w-full py-8 text-center justify-center items-center flex gap-2 text-secondary'
      >
        <Logout /> <p>Logout</p>
      </Button>
    </Drawer>
  );
};

export default Sidebar;
