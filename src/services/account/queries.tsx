import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchUserData, updateUserData } from "./api";

export const useUserQuery = (userId: string) => {
  return useQuery(["user", userId], () => fetchUserData(userId), {
    enabled: !!userId,
  });
};

export const useUpdateUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(updateUserData, {
    // Après une mise à jour réussie, invalider la requête pour récupérer le nouvel état
    onSuccess: () => {
      queryClient.invalidateQueries(["userQueryKey"]);
    },
  });
};
