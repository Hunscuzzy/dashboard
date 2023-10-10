import React, { ReactNode } from "react";

const LoggedLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className='bg-red'>{children}</div>;
};

export default LoggedLayout;
