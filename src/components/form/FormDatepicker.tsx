import React, { useCallback } from "react";
import { Control, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { timestampToDate } from "@/utils/date";

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
  const convertToDate = useCallback((value: any) => {
    if (!value) return null;
    if (value?.toDate) {
      return timestampToDate(value);
    }
    return new Date(value);
  }, []);

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const selectedDate = convertToDate(value);
        return (
          <div className={className}>
            {label && <label>{label}</label>}
            <DatePicker
              placeholderText={placeholder}
              selected={selectedDate}
              onChange={(date: Date) => onChange(date)}
              className={
                error
                  ? "border-red"
                  : "border border-grey-light hover:border-grey rounded p-4"
              }
            />
            {error && <p>{error.message}</p>}
          </div>
        );
      }}
    />
  );
};

export default FormDatepicker;
