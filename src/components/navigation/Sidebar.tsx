import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logout from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import { sidebarLinks } from "@/data/navigation";
import { useLogout } from "@/services/auth/queries";
import { Typography } from "@mui/material";

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
      <div className='px-2 py-4 h-full flex flex-col'>
        <div className='flex items-center mb-4 gap-4'>
          <Image
            alt='logo dashboard'
            src='/dashboard.png'
            height={50}
            width={50}
          />
          <Typography variant='h6'>Dashboard</Typography>
        </div>
        <nav>
          <ul className='flex flex-col gap-y-2'>
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
          color='error'
          variant='text'
          disabled={isLoading}
          className='mt-auto w-full py-2 text-center justify-center items-center flex gap-2'
        >
          <Logout /> <p>Logout</p>
        </Button>
      </div>
    </Drawer>
  );
};

export default Sidebar;
