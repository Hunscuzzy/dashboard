import React, { ReactNode } from "react";

const Main: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className='p-4 flex-1'>{children}</div>;
};

export default Main;
