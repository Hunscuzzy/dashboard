import React, { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import { Categories, RevenueEntry } from "@/services/entries/types";
import FormInputText from "@/components/form/FormInputText";
import FormSelect from "@/components/form/FormSelect";
import FormDatepicker from "@/components/form/FormDatepicker";
import { useCreateEntryMutation } from "@/services/entries/queries";

const EntryForm: React.FC = () => {
  const { mutate: createEntry } = useCreateEntryMutation();
  const { handleSubmit: handleRhfSubmit, control } = useForm<RevenueEntry>({
    // defaultValues: {
    //   category: "",
    // },
  });

  const categoryOptions = useMemo(
    () =>
      Object.keys(Categories).map((key) => ({
        label: key,
        value: Categories[key as keyof typeof Categories],
      })),
    []
  );

  const handleSubmit = useCallback(
    (formdata: RevenueEntry) => {
      createEntry(formdata);
    },
    [createEntry]
  );

  return (
    <form
      className='flex flex-col gap-4'
      onSubmit={handleRhfSubmit(handleSubmit)}
    >
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
        name='selectedDate'
        control={control}
        rules={{ required: "Date is required" }}
      />
      <div>
        <Button
          // startIcon={isLoading ? <CircularProgress color='secondary' /> : null}
          // disabled={!isDirty || isLoading}
          type='submit'
          className='fixed bottom-0'
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default EntryForm;
