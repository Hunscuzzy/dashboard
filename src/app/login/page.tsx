"use client";
import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import INTERNALS_LINKS from "@/config/routes";
import SignInForm from "@/components/authentication/SignInForm";
import SignUpForm from "@/components/authentication/SignUpForm";

const Login: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const router = useRouter();

  const handleSubmit = useCallback(() => {
    return router.push(INTERNALS_LINKS.DASHBOARD);
  }, [router]);
  return (
    <div className='min-h-screen flex'>
      <div className='bg-primary-light flex-1 flex flex-col justify-center items-center p-16'>
        <h1 className='mb-8 text-2xl'>{isSignUp ? "Sign Up" : "Log In"}</h1>
        {isSignUp ? (
          <SignUpForm onSubmit={handleSubmit} />
        ) : (
          <SignInForm onSubmit={handleSubmit} />
        )}
        <p className='mt-4'>
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <span
            className='text-blue-500 cursor-pointer ml-1'
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Log In" : "Sign Up"}
          </span>
        </p>
      </div>
      <div className='bg-primary flex flex-col justify-center items-center flex-1 p-16'>
        <h1 className='text-2xl font-semibold'>Welcome!</h1>
        <p className='mt-4 text-center'>
          Discover exceptional financial tracking for your professional and
          personal needs.
        </p>
      </div>
    </div>
  );
};

export default Login;
