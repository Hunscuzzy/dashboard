import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useUserQuery } from "@/services/account/useUserQuery";
import { useAuth } from "@/app/_contexts/AuthContext";

const EditionForm: React.FC = () => {
  const { currentUser } = useAuth();
  const { data, isLoading, isError } = useUserQuery(currentUser?.uid);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>An error occurred</p>;

  const {
    register,
    handleSubmit: handleRhfSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmit = useCallback(async (formData) => {
    console.log(formData);
    //   await signIn(formData);
    //   if (!isError) {
    //     onSubmit();
    //   }
  }, []);
  return (
    <form
      className='flex flex-col gap-4'
      onSubmit={handleRhfSubmit(handleSubmit)}
    >
      <div className='flex gap-2'>
        <TextField
          fullWidth
          label='Firstname'
          {...register("firstname", {
            required: "Firstname is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid Firstname",
            },
          })}
          error={Boolean(errors.email)}
          helperText={errors.email?.message as string}
        />
        <TextField
          fullWidth
          label='Lastname'
          {...register("lastname", {
            required: "Lastname is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid Lastname",
            },
          })}
          error={Boolean(errors.email)}
          helperText={errors.email?.message as string}
        />
      </div>
      <Button
        // startIcon={isLoading ? <CircularProgress color='secondary' /> : null}
        type='submit'
      >
        Save
      </Button>
    </form>
  );
};

export default EditionForm;
