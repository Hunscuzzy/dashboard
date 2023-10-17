"use client";

import { RevenueEntry } from "@/services/entries/types";
import BasicTable, { TableHeader } from "../_components/BasicTable";
import Section from "../_components/Section";

const Entries: React.FC = () => {
  const headers: TableHeader<RevenueEntry>[] = [
    { id: "id" },
    { id: "activityType" },
    { id: "date" },
    { id: "amount", align: "right" },
    { id: "currency" },
  ];

  const data: RevenueEntry[] = [
    {
      id: "0",
      activityType: "CODE",
      currency: "EUR",
      date: "2020-01-05",
      amount: 12,
    },

    {
      id: "1",
      activityType: "REAL_ESTATE",
      currency: "EUR",
      date: "2020-01-03",
      amount: 1000,
    },
  ];

  return (
    <div>
      <h1>Entries</h1>
      <Section>
        <BasicTable data={data} header={headers} />
      </Section>
    </div>
  );
};

export default Entries;
