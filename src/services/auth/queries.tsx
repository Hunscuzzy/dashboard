import { useMutation } from "react-query";
import { signIn, signUpUser, setUserDoc, logout } from "./api";
import { SignInFormData, SignUpFormData } from "./types";

export const useSignIn = () => {
  return useMutation((formData: SignInFormData) => signIn(formData));
};

export const useSignUp = () => {
  return useMutation((formData: SignUpFormData) => signUpUser(formData));
};

export const useSetUserDoc = () => {
  return useMutation(
    ({
      userUid,
      userDetails,
    }: {
      userUid: string;
      userDetails: { firstname: string; lastname: string };
    }) => setUserDoc(userUid, userDetails)
  );
};

export const useLogout = () => {
  return useMutation(() => logout());
};
