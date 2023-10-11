import firebase_app from "@/config/firebase";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function logout() {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Error signing out: ", error);
  }
}
