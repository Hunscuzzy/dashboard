import React from "react";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import { sidebarLinks } from "@/data/navigation";

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
    </Drawer>
  );
};

export default Sidebar;
