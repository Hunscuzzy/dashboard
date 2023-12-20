import { useMutation } from "react-query";
import { signIn, signUpUser, setUserDoc, logout } from "./api";
import { SignInFormData, SignUpFormData } from "./types";
import { useNotification } from "@/app/_contexts/NotificationContext";

export const useSignIn = () => {
  const { addNotification } = useNotification();
  const mutation = useMutation((formData: SignInFormData) => signIn(formData), {
    onError: (error: Error) => {
      addNotification({
        id: "useSignIn",
        message: error.message,
        type: "error",
      });
    },
  });

  return mutation;
};

export const useSignUp = () => {
  const { addNotification } = useNotification();
  return useMutation((formData: SignUpFormData) => signUpUser(formData), {
    onError: (error: Error) => {
      addNotification({
        id: "useSignUp",
        message: error.message,
        type: "error",
      });
    },
  });
};

export const useSetUserDoc = () => {
  const { addNotification } = useNotification();
  return useMutation(
    ({
      userUid,
      userDetails,
    }: {
      userUid: string;
      userDetails: { firstname: string; lastname: string };
    }) => setUserDoc(userUid, userDetails),
    {
      onError: (error: Error) => {
        addNotification({
          id: "useSetUserDoc",
          message: error.message,
          type: "error",
        });
      },
    }
  );
};

export const useLogout = () => {
  return useMutation(() => logout());
};
