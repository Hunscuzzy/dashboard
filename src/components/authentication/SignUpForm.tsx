"use client";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import signUp from "@/services/auth/signup";

interface FormData {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}

const SignUpForm: React.FC<{ onSubmit: () => void }> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit: handleRhfSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleSubmit = useCallback(
    async (data: FormData) => {
      const { result, error } = await signUp(
        data.email,
        data.password,
        data.firstname,
        data.lastname
      );
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
      <Button variant='contained' type='submit'>
        Log In
      </Button>
    </form>
  );
};

export default SignUpForm;
