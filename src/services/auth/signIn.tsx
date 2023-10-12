import firebase_app from "@/config/firebase";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { SignInFormData } from "./types";

const auth = getAuth(firebase_app);

export default async function signIn({ email, password }: SignInFormData) {
  let result = null,
    error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
