"use client";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import signIn from "@/services/auth/signIn";
import INTERNALS_LINKS from "@/config/routes";

const Page: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push(INTERNALS_LINKS.DASHBOARD);
  };
  return (
    <div className='bg-primary flex flex-col justify-center items-center'>
      <h1 className='mb-2'>Sign in</h1>
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor='email' />
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            required
            type='password'
            name='password'
            id='password'
            placeholder='password'
          />
        </div>
        <button type='submit'>Sign in</button>
      </form>
    </div>
  );
};

export default Page;
