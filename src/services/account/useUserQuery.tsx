import { useQuery } from "react-query";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const fetchUserData = async (userId) => {
  const db = getFirestore();
  const docRef = doc(db, "users", userId);
  const userDoc = await getDoc(docRef);
  return userDoc.data();
};

export const useUserQuery = (userId) => {
  return useQuery(["user", userId], () => fetchUserData(userId), {
    enabled: !!userId, // Active la requête seulement si userId est non nul
  });
};
