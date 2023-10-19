import { useQuery } from "react-query";
import { fetchEntries } from "./api";
import { RevenueEntry } from "./types";

export const useEntriesQuery = () => {
  return useQuery<RevenueEntry[]>("entries", fetchEntries);
};
