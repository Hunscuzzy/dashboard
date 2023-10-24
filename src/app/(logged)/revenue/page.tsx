"use client";
import { useCallback, useState } from "react";
import Close from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { RevenueEntry } from "@/services/revenue/types";
import BasicTable from "@/components/table/BasicTable";
import Section from "@/components/misc/Section";
import {
  useRevenueQuery,
  useRevenueByIdQuery,
  useCreateRevenueMutation,
  useEditRevenueMutation,
} from "@/services/revenue/queries";
import RevenueForm from "./_components/RevenueForm";
import { useActions, useHeaderTable } from "./_components/effects";
import Title from "@/components/misc/Title";

const Revenue: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const { data: dataList } = useRevenueQuery();
  const { data: editItemData } = useRevenueByIdQuery(selectedId ?? "");
  const { mutate: createEntry, isLoading: isCreating } =
    useCreateRevenueMutation();
  const { mutate: editEntry, isLoading: isEditing } = useEditRevenueMutation();

  const handleSubmitForm = useCallback(
    (formdata: RevenueEntry) => {
      if (selectedId) {
        editEntry({ id: selectedId, updatedData: formdata });
      } else {
        createEntry(formdata);
      }
      setDrawerOpen(false);
    },
    [selectedId, editEntry, createEntry]
  );

  const handleClose = useCallback(() => {
    setDrawerOpen(false);
    setSelectedId(null);
  }, [setDrawerOpen]);

  const tableActions = useActions(setSelectedId, setDrawerOpen);
  const tableHeaders = useHeaderTable();
  return (
    <div>
      <Title>Entries</Title>
      <Section>
        <div className='flex justify-end'>
          <Button onClick={() => setDrawerOpen(true)}>Add new entry</Button>
        </div>
        <BasicTable
          data={dataList}
          header={tableHeaders}
          actions={tableActions}
        />
      </Section>
      <Drawer
        anchor='right'
        open={isDrawerOpen}
        onClose={handleClose}
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
          onClick={handleClose}
          className='absolute cursor-pointer right-2 top-2'
        />
        <RevenueForm
          defaultValues={editItemData as RevenueEntry}
          onSubmit={handleSubmitForm}
          isLoading={isCreating || isEditing}
        />
      </Drawer>
    </div>
  );
};

export default Revenue;
