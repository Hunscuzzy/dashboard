import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import firebase_app from "@/config/firebase";
import { RevenueEntry } from "./types";

const db = getFirestore(firebase_app);

export const fetchEntries = async () => {
  const q = query(collection(db, "entries"));

  const querySnapshot = await getDocs(q);
  console.log("querySnapshot", querySnapshot);
  const entries = querySnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      }) as RevenueEntry
  );
  return entries;
};
