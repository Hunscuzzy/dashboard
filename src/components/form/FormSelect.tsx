import React from "react";
import { Control, Controller } from "react-hook-form";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import clsx from "clsx";

interface Props {
  name: string;
  control: Control<any, any>;
  rules?: Record<string, any>;
  label?: string;
  options: { label: string; value: string | number }[];
  className?: string;
}

const FormSelect: React.FC<Props> = ({
  name,
  control,
  rules,
  label,
  options,
  className,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl
          fullWidth
          variant='outlined'
          error={!!error}
          className={clsx("w-full", className)}
        >
          <InputLabel>{label}</InputLabel>
          <Select label={label} onChange={onChange} value={value}>
            {options.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};

export default FormSelect;
