"use client";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import signUp from "@/services/auth/signup";

interface FormData {
  email: string;
  password: string;
}

const SignUpForm: React.FC<{ onSubmit: () => void }> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit: handleRhfSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleSubmit = useCallback(
    async (data: FormData) => {
      const { result, error } = await signUp(data.email, data.password);
      if (error) {
        return console.log(error);
      }
      onSubmit();
    },
    [onSubmit]
  );
  return (
    <form
      className='flex flex-col gap-4'
      onSubmit={handleRhfSubmit(handleSubmit)}
    >
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
      <Button variant='contained' type='submit'>
        Log In
      </Button>
    </form>
  );
};

export default SignUpForm;
