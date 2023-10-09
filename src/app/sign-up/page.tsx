"use client";
import React, { FormEvent, ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import signUp from "@/services/auth/signup";
import INTERNALS_LINKS from "@/config/routes";

interface SignUpResult {
  result?: any;
  error?: unknown;
}

const Page: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { result, error }: SignUpResult = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push(INTERNALS_LINKS.DASHBOARD);
  };

  const handleChange =
    (setState: React.Dispatch<React.SetStateAction<string>>) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setState(event.target.value);
    };

  return (
    <div className='bg-primary flex flex-col justify-center items-center'>
      <h1 className='mb-2'>Sign up</h1>
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor='email' />
          <p>Email</p>
          <input
            onChange={handleChange(setEmail)}
            required
            type='email'
            name='email'
            id='email'
            placeholder='example@mail.com'
          />
        </div>
        <div>
          <label htmlFor='password' />
          <p>Password</p>
          <input
            onChange={handleChange(setPassword)}
            required
            type='password'
            name='password'
            id='password'
            placeholder='password'
          />
        </div>
        <button type='submit'>Sign up</button>
      </form>
    </div>
  );
};

export default Page;
