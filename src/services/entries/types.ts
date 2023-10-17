export type Currency = "EUR" | "USD" | "GBP";

export type ActivityType = "CODE" | "VIDEO" | "REAL_ESTATE";

export interface RevenueEntry {
  id: string;
  activityType: ActivityType;
  amount: number;
  currency: Currency;
  date: string;
  description?: string;
}
