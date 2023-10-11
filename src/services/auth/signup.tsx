import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import firebase_app from "@/config/firebase";

const auth = getAuth(firebase_app);
const db = getFirestore();

export default async function signUp(
  email: string,
  password: string,
  firstname: string,
  lastname: string
) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
    const user = result.user;

    await setDoc(doc(db, "users", user.uid), {
      firstname,
      lastname,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}
