import React from "react";
import { Control, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  name: string;
  control: Control<any, any>;
  rules?: Record<string, any>;
  label?: string;
  className?: string;
}

const FormDatepicker: React.FC<Props> = ({
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
        <div className={className}>
          {label && <label>{label}</label>}
          <DatePicker
            selected={value ? new Date(value) : null}
            onChange={(date: Date) => onChange(date)}
            className={error ? "error" : ""}
          />
          {error && <p>{error.message}</p>}
        </div>
      )}
    />
  );
};

export default FormDatepicker;
