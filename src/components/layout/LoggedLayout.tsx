import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";

const LoggedLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='flex'>
      <Sidebar />
      <Main>{children}</Main>
    </div>
  );
};

export default LoggedLayout;
