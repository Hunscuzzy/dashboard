import { useMutation } from "react-query";
import signIn from "@/services/auth/signIn";
import signUp from "@/services/auth/signup";
import { SignInFormData, SignUpFormData } from "@/services/auth/types";

export const useSignIn = () => {
  const mutation = useMutation((formValues: SignInFormData) =>
    signIn(formValues)
  );

  return {
    ...mutation,
    signIn: mutation.mutate,
  };
};

export const useSignUp = () => {
  const mutation = useMutation((formValues: SignUpFormData) =>
    signUp(formValues)
  );

  return {
    ...mutation,
    signUp: mutation.mutate,
  };
};
