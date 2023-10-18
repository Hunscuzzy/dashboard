import React from "react";
import { Control, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import clsx from "clsx";

interface Props {
  name: string;
  control: Control<any, any>;
  rules: Record<string, any>;
  label?: string;
  className?: string;
}

const FormInputText: React.FC<Props> = ({
  name,
  control,
  rules,
  label,
  className,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          fullWidth
          label={label}
          onChange={onChange}
          value={value}
          error={!!error}
          helperText={error?.message}
          className={clsx("w-full", className)}
        />
      )}
    />
  );
};

export default FormInputText;
