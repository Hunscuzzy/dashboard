import { doc, getFirestore, setDoc } from "firebase/firestore";
import firebase_app from "@/config/firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { SignInFormData, SignUpFormData } from "./types";

const auth = getAuth(firebase_app);
const db = getFirestore(firebase_app);

export async function signIn({ email, password }: SignInFormData) {
  let result = null,
    error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export const signUpUser = async ({ email, password }: SignUpFormData) => {
  let error = null;
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result;
  } catch (e) {
    error = e;
  }

  return { error };
};

export const setUserDoc = async (
  userUid: string,
  { firstname, lastname }: { firstname: string; lastname: string }
) => {
  let error = null;
  try {
    await setDoc(doc(db, "users", userUid), { firstname, lastname });
  } catch (e) {
    error = e;
  }
  return { error };
};

export async function logout() {
  let error = null;
  try {
    await signOut(auth);
  } catch (e) {
    error = e;
  }
  return { error };
}
