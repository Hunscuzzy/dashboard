import React from "react";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import { sidebarLinks } from "@/data/navigation";
import { Logout } from "@mui/icons-material";
import logout from "@/services/auth/logout";

const Sidebar: React.FC = () => {
  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
      variant='permanent'
      anchor='left'
    >
      <nav>
        <ul className='flex flex-col gap-y-8'>
          {sidebarLinks.map(({ Icon, ...link }, i) => (
            <Link
              className='p-4 gap-4 bg-primary-light hover:bg-primary transition-colors rounded flex items-center'
              href={link.uri}
              key={i}
            >
              <span>{<Icon />}</span>
              {link.title}
            </Link>
          ))}
        </ul>
      </nav>
      <button
        onClick={logout}
        className='mt-auto w-full py-8 text-center justify-center items-center flex gap-2 text-secondary'
      >
        <Logout /> <p>Logout</p>
      </button>
    </Drawer>
  );
};

export default Sidebar;
