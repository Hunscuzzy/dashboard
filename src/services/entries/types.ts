import { Timestamp } from "firebase/firestore";

export enum Collections {
  REVENUE = "revenue",
  SPENDING = "spending",
}

export enum Categories {
  CODE = "CODE",
  VIDEO = "VIDEO",
  REAL_ESTATE = "REAL_ESTATE",
}

export interface RevenueEntry {
  id: string;
  category: Categories;
  amount: number;
  date: Timestamp;
  description?: string;
}
export interface RevenueEntryForm extends Omit<RevenueEntry, "id"> {}
