import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { UpdateUserDataArgs } from "./types";

export const fetchUserData = async (userId: string) => {
  const db = getFirestore();
  const docRef = doc(db, "users", userId);
  const userDoc = await getDoc(docRef);
  return userDoc.data();
};

export const updateUserData = async ({ uid, formData }: UpdateUserDataArgs) => {
  const db = getFirestore();
  return setDoc(doc(db, "users", uid), formData, { merge: true });
};
