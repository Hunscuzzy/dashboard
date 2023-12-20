import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchUserData, updateUserData } from "./api";
import { useNotification } from "@/app/_contexts/NotificationContext";

export const useUserQuery = (userId: string) => {
  return useQuery(["user", userId], () => fetchUserData(userId), {
    enabled: !!userId,
  });
};

export const useUpdateUserMutation = () => {
  const queryClient = useQueryClient();
  const { addNotification } = useNotification();

  return useMutation(updateUserData, {
    onSuccess: () => {
      queryClient.invalidateQueries(["userQueryKey"]);
      addNotification({
        id: "useUpdateUserMutation",
        message: "User updated successfully",
        type: "success",
      });
    },
    onError: (error: Error) => {
      addNotification({
        id: "useUpdateUserMutation",
        message: error.message,
        type: "error",
      });
    },
  });
};
