import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
} from "firebase/firestore";
import firebase_app from "@/config/firebase";
import { RevenueEntry } from "./types";

const db = getFirestore(firebase_app);

export const fetchEntries = async () => {
  const q = query(collection(db, "entries"));
  const querySnapshot = await getDocs(q);
  const entries = querySnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      }) as RevenueEntry
  );
  return entries;
};

export const createEntry = async (newEntry: Omit<RevenueEntry, "id">) => {
  try {
    const docRef = await addDoc(collection(db, "entries"), newEntry);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding document: ", error);
    return { success: false, error };
  }
};
