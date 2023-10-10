import React, { ReactNode } from "react";

const Main: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <main className='p-4 flex-1'>{children}</main>;
};

export default Main;
