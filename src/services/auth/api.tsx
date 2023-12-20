import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { SignInFormData, SignUpFormData } from "./types";

export async function signIn({ email, password }: SignInFormData) {
  return signInWithEmailAndPassword(auth, email, password);
}

export const signUpUser = async ({ email, password }: SignUpFormData) => {
  createUserWithEmailAndPassword(auth, email, password);
};

export const setUserDoc = async (
  userUid: string,
  { firstname, lastname }: { firstname: string; lastname: string }
) => {
  setDoc(doc(db, "users", userUid), { firstname, lastname });
};

export async function logout() {
  signOut(auth);
}
