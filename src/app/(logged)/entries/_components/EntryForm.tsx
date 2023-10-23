import React, { useCallback, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { Categories, RevenueEntry } from "@/services/entries/types";
import FormInputText from "@/components/form/FormInputText";
import FormSelect from "@/components/form/FormSelect";
import FormDatepicker from "@/components/form/FormDatepicker";

const EntryForm: React.FC<{
  defaultValues: RevenueEntry;
  onSubmit: () => void;
  isLoading: boolean;
}> = ({ defaultValues, onSubmit, isLoading }) => {
  const {
    handleSubmit: handleRhfSubmit,
    control,
    reset,
    formState: { isDirty },
  } = useForm<RevenueEntry>({
    defaultValues: {
      category: undefined,
      amount: 0,
      date: undefined,
      description: undefined,
    },
  });

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  const categoryOptions = useMemo(
    () =>
      Object.keys(Categories).map((key) => ({
        label: key,
        value: Categories[key as keyof typeof Categories],
      })),
    []
  );

  return (
    <form className='flex flex-col gap-4' onSubmit={handleRhfSubmit(onSubmit)}>
      <FormSelect
        label='Category'
        control={control}
        name='category'
        options={categoryOptions}
      />
      <FormInputText
        label='Amount'
        control={control}
        name='amount'
        type='number'
      />
      <FormInputText
        multiline
        label='Description'
        control={control}
        name='description'
      />
      <FormDatepicker
        name='date'
        control={control}
        placeholder='Date'
        rules={{ required: "Date is required" }}
      />
      <div className='fixed bottom-0 flex'>
        <Button
          startIcon={isLoading ? <CircularProgress color='secondary' /> : null}
          disabled={!isDirty || isLoading}
          type='submit'
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default EntryForm;
