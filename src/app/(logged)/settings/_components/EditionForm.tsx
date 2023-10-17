import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import {
  useUpdateUserMutation,
  useUserQuery,
} from "@/services/account/queries";
import { useAuth } from "@/app/_contexts/AuthContext";
import { AccountFormData } from "@/services/auth/types";

const EditionForm: React.FC = () => {
  const { currentUser } = useAuth();
  const { data, isLoading } = useUserQuery(currentUser?.uid ?? "");
  const { mutate: updateUser } = useUpdateUserMutation();

  const {
    formState: { isDirty },
    register,
    handleSubmit: handleRhfSubmit,
    formState: { errors },
    reset,
  } = useForm<AccountFormData>();

  useEffect(() => {
    reset({
      firstname: data?.firstname,
      lastname: data?.lastname,
    });
  }, [data, reset]);

  const handleSubmit = useCallback(
    (formData: AccountFormData) => {
      if (currentUser?.uid) {
        updateUser({
          uid: currentUser.uid,
          formData,
        });
      }
    },
    [currentUser, updateUser]
  );

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
          })}
          error={Boolean(errors.firstname)}
          helperText={errors.firstname?.message as string}
        />
        <TextField
          fullWidth
          label='Lastname'
          {...register("lastname", {
            required: "Lastname is required",
          })}
          error={Boolean(errors.lastname)}
          helperText={errors.lastname?.message as string}
        />
      </div>
      <Button
        startIcon={isLoading ? <CircularProgress color='secondary' /> : null}
        disabled={!isDirty || isLoading}
        type='submit'
      >
        Save
      </Button>
    </form>
  );
};

export default EditionForm;
