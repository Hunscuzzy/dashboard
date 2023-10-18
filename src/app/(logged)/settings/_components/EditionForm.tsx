import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import {
  useUpdateUserMutation,
  useUserQuery,
} from "@/services/account/queries";
import { useAuth } from "@/app/_contexts/AuthContext";
import { AccountFormData } from "@/services/auth/types";
import FormInputText from "@/components/form/FormInputText";

const EditionForm: React.FC = () => {
  const { currentUser } = useAuth();
  const { data, isLoading } = useUserQuery(currentUser?.uid ?? "");
  const { mutate: updateUser } = useUpdateUserMutation();

  const {
    formState: { isDirty },
    handleSubmit: handleRhfSubmit,
    control,
    reset,
  } = useForm<AccountFormData>({
    defaultValues: {
      firstname: "",
      lastname: "",
    },
  });

  useEffect(() => {
    reset({
      firstname: data?.firstname || "",
      lastname: data?.lastname || "",
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
