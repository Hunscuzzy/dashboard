import React from "react";
import { Control, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  name: string;
  control: Control<any, any>;
  rules?: Record<string, any>;
  label?: string;
  placeholder?: string;
  className?: string;
}

const FormDatepicker: React.FC<Props> = ({
  name,
  control,
  rules,
  label,
  className,
  placeholder,
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
            placeholderText={placeholder}
            selected={value ? new Date(value) : null}
            onChange={(date: Date) => onChange(date)}
            className={
              error
                ? "border-red"
                : "border border-grey-light hover:border-grey rounded p-4"
            }
          />
          {error && <p>{error.message}</p>}
        </div>
      )}
    />
  );
};

export default FormDatepicker;
