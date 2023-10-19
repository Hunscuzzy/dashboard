import { useMutation, useQuery, useQueryClient } from "react-query";
import { createEntry, fetchEntries } from "./api";
import { RevenueEntry } from "./types";

export const useEntriesQuery = () => {
  return useQuery<RevenueEntry[]>("entries", fetchEntries);
};

export const useCreateEntryMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(createEntry, {
    onSuccess: () => {
      queryClient.invalidateQueries("entries");
    },
  });
};
