import {
  addDoc,
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  getFirestore,
  query,
  doc,
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

export const fetchEntryById = async (id: string) => {
  const docRef = doc(db, "entries", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as RevenueEntry;
  } else {
    throw new Error("No such document!");
  }
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

export const deleteEntryById = async (id: string) => {
  try {
    const docRef = doc(db, "entries", id);
    await deleteDoc(docRef);
    return { success: true };
  } catch (error) {
    console.error("Error deleting document: ", error);
    return { success: false, error };
  }
};
