"use client";
import React, { useCallback, useState } from "react";
import Close from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Collections, RevenueEntry } from "@/services/entries/types";
import BasicTable from "@/components/table/BasicTable";
import Section from "@/components/misc/Section";
import {
  useDataQuery,
  useByIdQuery,
  useCreateDataMutation,
  useEditDataMutation,
} from "@/services/entries/queries";
import SpendingForm from "./_components/SpendingForm";
import { useActions, useHeaderTable } from "./_components/effects";

const Spending: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const { data: dataList } = useDataQuery(Collections.SPENDING);
  const { data: editItemData } = useByIdQuery(Collections.SPENDING, selectedId);
  const { mutate: createEntry, isLoading: isCreating } = useCreateDataMutation(
    Collections.SPENDING
  );
  const { mutate: editEntry, isLoading: isEditing } = useEditDataMutation(
    Collections.SPENDING
  );

  const handleSubmitForm = useCallback(
    (formData: RevenueEntry) => {
      if (selectedId) {
        editEntry({ id: selectedId, updatedData: formData });
      } else {
        createEntry(formData);
      }
      setDrawerOpen(false);
    },
    [selectedId, editEntry, createEntry]
  );

  const handleClose = useCallback(() => {
    setDrawerOpen(false);
    setSelectedId(null);
  }, []);

  const tableActions = useActions(setSelectedId, setDrawerOpen);
  const tableHeaders = useHeaderTable();

  return (
    <div>
      <Section>
        <div className='flex justify-end'>
          <Button onClick={() => setDrawerOpen(true)}>Add new spent</Button>
        </div>
        <BasicTable
          data={dataList}
          header={tableHeaders}
          actions={tableActions}
        />
      </Section>
      <Drawer
        anchor='right'
        open={drawerOpen}
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
        <SpendingForm
          defaultValues={editItemData as RevenueEntry}
          onSubmit={handleSubmitForm}
          isLoading={isCreating || isEditing}
        />
      </Drawer>
    </div>
  );
};

export default Spending;
