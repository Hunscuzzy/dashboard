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
import { Collections } from "./types";

const db = getFirestore(firebase_app);

export const fetchData = async (collectionName: Collections) => {
  const q = query(collection(db, collectionName));
  const querySnapshot = await getDocs(q);
  const entries = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return entries;
};

export const fetchById = async (collectionName: Collections, id: string) => {
  const docRef = doc(db, collectionName, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error("No such document!");
  }
};

export const createData = async (
  collectionName: Collections,
  newEntry: any
) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), newEntry);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding document: ", error);
    return { success: false, error };
  }
};

export const deleteById = async (collectionName: Collections, id: string) => {
  try {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
    return { success: true };
  } catch (error) {
    console.error("Error deleting document: ", error);
    return { success: false, error };
  }
};

export const editById = async ({
  collectionName,
  id,
  updatedData,
}: {
  collectionName: Collections;
  id: string;
  updatedData: any;
}) => {
  try {
    const entryRef = doc(db, collectionName, id);
    await updateDoc(entryRef, updatedData);
    return { success: true };
  } catch (error) {
    console.error("Error updating document:", error);
    return { success: false, error };
  }
};
