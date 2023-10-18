"use client";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { RevenueEntry } from "@/services/entries/types";
import BasicTable, { TableHeader } from "@/components/table/BasicTable";
import Section from "@/components/misc/Section";
import AddEntryForm from "./_components/AddEntryForm";

const Entries: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
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
        <div className='flex justify-end'>
          <Button onClick={() => setDrawerOpen(true)}>Add new entry</Button>
        </div>
        <BasicTable data={data} header={headers} />
      </Section>
      <Drawer
        anchor='right'
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          flexShrink: 0,
          width: 400,
          "& .MuiDrawer-paper": {
            paddingX: 2,
            paddingY: 4,
            width: 400,
            boxSizing: "border-box",
          },
        }}
      >
        <Close
          onClick={() => setDrawerOpen(false)}
          className='absolute cursor-pointer right-2 top-2'
        />
        <AddEntryForm />
      </Drawer>
    </div>
  );
};

export default Entries;
