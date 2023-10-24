import {
  UseQueryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import {
  createRevenue,
  deleteRevenueById,
  editRevenueById,
  fetchRevenue,
  fetchRevenueById,
} from "./api";
import { RevenueEntry } from "./types";

export const useRevenueQuery = () => {
  return useQuery<RevenueEntry[]>("revenue", fetchRevenue);
};

export const useRevenueByIdQuery = (
  id: string | undefined,
  options?: UseQueryOptions<RevenueEntry>
) => {
  return useQuery<RevenueEntry>(
    ["revenue", id],
    () => fetchRevenueById(id),
    options
  );
};

export const useCreateRevenueMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(createRevenue, {
    onSuccess: () => {
      queryClient.fetchQuery("revenue");
    },
  });
};

export const useDeleteRevenueMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteRevenueById, {
    onSuccess: () => {
      queryClient.fetchQuery("entries");
    },
  });
};

export const useEditRevenueMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(editRevenueById, {
    onSettled: () => {
      queryClient.invalidateQueries("entries");
    },
  });
};
