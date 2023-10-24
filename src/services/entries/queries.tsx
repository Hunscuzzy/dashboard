import {
  UseQueryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { fetchData, fetchById, createData, deleteById, editById } from "./api";
import { Collections } from "./types";

export const useDataQuery = (collectionName: Collections) => {
  return useQuery(collectionName, () => fetchData(collectionName));
};

export const useByIdQuery = (
  collectionName: Collections,
  id: string,
  options?: UseQueryOptions
) => {
  return useQuery(
    [collectionName, id],
    () => fetchById(collectionName, id),
    options as any
  );
};

export const useCreateDataMutation = (collectionName: Collections) => {
  const queryClient = useQueryClient();

  return useMutation((newEntry) => createData(collectionName, newEntry), {
    onSuccess: () => {
      queryClient.fetchQuery(collectionName);
    },
  });
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
