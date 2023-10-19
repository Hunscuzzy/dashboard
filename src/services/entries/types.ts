export type Categories = "CODE" | "VIDEO" | "REAL_ESTATE";

export interface RevenueEntry {
  id: string;
  category: Categories;
  amount: number;
  date: string;
  description?: string;
}
