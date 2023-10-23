import {
  UseQueryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import {
  createEntry,
  deleteEntryById,
  fetchEntries,
  fetchEntryById,
} from "./api";
import { RevenueEntry } from "./types";

export const useEntriesQuery = () => {
  return useQuery<RevenueEntry[]>("entries", fetchEntries);
};

export const useEntryByIdQuery = (
  id: string | undefined,
  options?: UseQueryOptions<RevenueEntry>
) => {
  return useQuery<RevenueEntry>(
    ["entry", id],
    () => fetchEntryById(id),
    options
  );
};

export const useCreateEntryMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(createEntry, {
    onSuccess: () => {
      queryClient.fetchQuery("entries");
    },
  });
};

export const useDeleteEntryMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteEntryById, {
    onSuccess: () => {
      queryClient.fetchQuery("entries");
    },
  });
};
