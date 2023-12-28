import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchData, fetchById, createData, deleteById, editById } from "./api";
import { Collections } from "./types";
import { useNotification } from "@/app/_contexts/NotificationContext";

export const useDataQuery = (collectionName: Collections) => {
  return useQuery(collectionName, () => fetchData(collectionName));
};

export const useByIdQuery = (
  collectionName: Collections,
  id: string | null
) => {
  return useQuery([collectionName, id], () => fetchById(collectionName, id!), {
    enabled: id !== null,
  });
};

export const useCreateDataMutation = (collectionName: Collections) => {
  const queryClient = useQueryClient();
  const { addNotification } = useNotification();

  return useMutation(
    (newEntry: unknown) => createData(collectionName, newEntry),
    {
      onSuccess: () => {
        queryClient.fetchQuery(collectionName);
      },
      onError: (error: Error) => {
        addNotification({
          id: "useCreateDataMutation",
          message: error.message,
          type: "error",
        });
      },
    }
  );
};

export const useDeleteDataMutation = (collectionName: Collections) => {
  const queryClient = useQueryClient();

  return useMutation((id: string) => deleteById(collectionName, id), {
    onSuccess: () => {
      queryClient.fetchQuery(collectionName);
    },
  });
};

export const useEditDataMutation = (collectionName: Collections) => {
  const queryClient = useQueryClient();

  return useMutation(
    ({ id, updatedData }: { id: string; updatedData: any }) =>
      editById({ collectionName, id, updatedData }),
    {
      onSettled: () => {
        queryClient.invalidateQueries(collectionName);
      },
    }
  );
};
