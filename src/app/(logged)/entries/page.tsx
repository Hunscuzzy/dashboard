"use client";
import { useCallback, useMemo, useState } from "react";
import Close from "@mui/icons-material/Close";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import { RevenueEntry } from "@/services/entries/types";
import BasicTable, { TableHeader } from "@/components/table/BasicTable";
import Section from "@/components/misc/Section";
import {
  useDeleteEntryMutation,
  useEntriesQuery,
  useEntryByIdQuery,
  useCreateEntryMutation,
} from "@/services/entries/queries";
import EntryForm from "./_components/EntryForm";

const Entries: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const headers: TableHeader<RevenueEntry>[] = [
    { id: "id" },
    { id: "category", format: (value) => value },
    {
      id: "date",
      format: (value) => dayjs(value?.seconds * 1000).format("DD/MM/YYYY"),
    },
    { id: "description" },
    { id: "amount", align: "right" },
  ];

  const { data: dataList } = useEntriesQuery();
  const { data: editItemData } = useEntryByIdQuery(selectedId);
  const { mutate: handleDelete } = useDeleteEntryMutation();
  const { mutate: createEntry, isLoading: isCreating } =
    useCreateEntryMutation();

  const handleEdit = useCallback((row: RevenueEntry) => {
    setSelectedId(row.id);
    setDrawerOpen(true);
  }, []);

  const actions = useMemo(
    () => [
      { onClick: handleEdit, icon: <Edit /> },
      { onClick: (row) => handleDelete(row.id), icon: <Delete /> },
    ],
    [handleDelete, handleEdit]
  );

  const handleSubmitForm = useCallback((formdata: RevenueEntry) => {
    createEntry(formdata);
    setDrawerOpen(false);
  }, []);
  return (
    <div>
      <h1>Entries</h1>
      <Section>
        <div className='flex justify-end'>
          <Button onClick={() => setDrawerOpen(true)}>Add new entry</Button>
        </div>
        <BasicTable data={dataList} header={headers} actions={actions} />
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
        <EntryForm
          defaultValues={editItemData as RevenueEntry}
          onSubmit={handleSubmitForm}
          isLoading={isCreating}
        />
      </Drawer>
    </div>
  );
};

export default Entries;
