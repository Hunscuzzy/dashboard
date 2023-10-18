import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import FormInputText from "@/components/form/FormInputText";

const AddEntryForm: React.FC = () => {
  const { handleSubmit: handleRhfSubmit, control } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
    },
  });

  const handleSubmit = useCallback(() => {
    console.log("formData");
  }, []);

  return (
    <form
      className='flex flex-col gap-4'
      onSubmit={handleRhfSubmit(handleSubmit)}
    >
      <FormInputText
        label='Firstname'
        control={control}
        name='firstname'
        rules={{ required: "Firstname is required" }}
      />
      <FormInputText
        label='Lastname'
        control={control}
        name='lastname'
        rules={{ required: "Lastname is required" }}
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

export default AddEntryForm;
