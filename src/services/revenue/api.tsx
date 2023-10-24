import {
  addDoc,
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  getFirestore,
  query,
  doc,
  updateDoc,
} from "firebase/firestore";
import firebase_app from "@/config/firebase";
import { RevenueEntry } from "./types";

const db = getFirestore(firebase_app);

export const fetchRevenue = async () => {
  const q = query(collection(db, "revenue"));
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

export const fetchRevenueById = async (id: string) => {
  const docRef = doc(db, "revenue", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as RevenueEntry;
  } else {
    throw new Error("No such document!");
  }
};

export const createRevenue = async (newEntry: Omit<RevenueEntry, "id">) => {
  try {
    const docRef = await addDoc(collection(db, "revenue"), newEntry);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding document: ", error);
    return { success: false, error };
  }
};

export const deleteRevenueById = async (id: string) => {
  try {
    const docRef = doc(db, "revenue", id);
    await deleteDoc(docRef);
    return { success: true };
  } catch (error) {
    console.error("Error deleting document: ", error);
    return { success: false, error };
  }
};

export const editRevenueById = async ({
  id,
  updatedData,
}: {
  id: RevenueEntry["id"];
  updatedData: RevenueEntry;
}) => {
  try {
    const entryRef = doc(db, "revenue", id);
    await updateDoc(entryRef, updatedData as any);
    return { success: true };
  } catch (error) {
    console.error("Error updating document:", error);
    return { success: false, error };
  }
};
