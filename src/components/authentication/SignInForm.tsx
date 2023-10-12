"use client";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LocalDining from "@mui/icons-material/LocalDining";
import { SignInFormData } from "@/services/auth/types";
import { useSignIn } from "./effects";

const SignInForm: React.FC<{ onSubmit: () => void }> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit: handleRhfSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  const { signIn, isLoading, isError } = useSignIn();

  const handleSubmit = useCallback(
    async (formData: SignInFormData) => {
      await signIn(formData);
      if (!isError) {
        onSubmit();
      }
    },
    [onSubmit]
  );
  return (
    <form
      className='flex flex-col gap-4'
      onSubmit={handleRhfSubmit(handleSubmit)}
    >
      <div className='flex gap-4'>
        <TextField
          fullWidth
          label='Email'
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
          error={Boolean(errors.email)}
          helperText={errors.email?.message as string}
        />
        <TextField
          fullWidth
          type='password'
          label='Password'
          {...register("password", { required: "Password is required" })}
          error={Boolean(errors.password)}
          helperText={errors.password?.message as string}
        />
      </div>
      <Button
        startIcon={isLoading ? <LocalDining /> : null}
        variant='contained'
        type='submit'
      >
        Log In
      </Button>
    </form>
  );
};

export default SignInForm;
