import React, { ReactNode } from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";

interface Props {
  children: ReactNode;
  variant?: TypographyProps["variant"];
}

const Title: React.FC<Props> = ({ children, variant = "h1" }) => {
  return (
    <Typography component='h1' variant='h1'>
      {children}
    </Typography>
  );
};

export default Title;
