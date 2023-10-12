import React, { ReactNode } from "react";
import clsx from "clsx";

const Section: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        className,
        "p-4 border border-opacity-20 rounded-md bg-white"
      )}
    >
      {children}
    </div>
  );
};

export default Section;
