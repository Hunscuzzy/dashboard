"use client";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { SignUpFormData } from "@/services/auth/types";
import { useSignUp } from "@/services/auth/queries";

const SignUpForm: React.FC<{ onSubmit: () => void }> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit: handleRhfSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const { mutate: signUp, isLoading, isError } = useSignUp();

  const handleSubmit = useCallback(
    async (formData: SignUpFormData) => {
      signUp(formData);
      if (!isError) {
        onSubmit();
      }
    },
    [onSubmit, isError, signUp]
  );
  return (
    <form
      className='flex flex-col gap-4'
      onSubmit={handleRhfSubmit(handleSubmit)}
    >
      <div className='flex gap-4'>
        <TextField
          fullWidth
          type='text'
          label='Firstname'
          {...register("firstname", { required: "Firstname is required" })}
          error={Boolean(errors.firstname)}
          helperText={errors.firstname?.message as string}
        />
        <TextField
          fullWidth
          type='text'
          label='Lastname'
          {...register("lastname", { required: "Lastname is required" })}
          error={Boolean(errors.lastname)}
          helperText={errors.lastname?.message as string}
        />
      </div>
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
        startIcon={isLoading ? <CircularProgress color='secondary' /> : null}
        variant='contained'
        type='submit'
      >
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
