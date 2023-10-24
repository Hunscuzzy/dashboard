import { useCallback, useMemo } from "react";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import { useDeleteRevenueMutation } from "@/services/revenue/queries";
import { RevenueEntry } from "@/services/revenue/types";
import { timestampToIsoDate } from "@/utils/date";
import { TableHeaderProps } from "@/components/table/TableHeader";

export function useActions(
  setSelectedId: (id: string) => void,
  setDrawerOpen: (value: boolean) => void
) {
  const { mutate: handleDelete } = useDeleteRevenueMutation();
  const handleClickEdit = useCallback((id: RevenueEntry["id"]) => {
    setSelectedId(id);
    setDrawerOpen(true);
  }, []);

  return useMemo(
    () => [
      {
        onClick: (row: RevenueEntry) => handleClickEdit(row.id),
        icon: <Edit />,
      },
      {
        onClick: (row: RevenueEntry) => handleDelete(row.id),
        icon: <Delete />,
      },
    ],
    [handleDelete, handleClickEdit]
  );
}

export function useHeaderTable(): TableHeaderProps[] {
  return [
    { id: "id" },
    { id: "category", format: (value) => value },
    {
      id: "date",
      format: timestampToIsoDate,
    },
    { id: "description" },
    { id: "amount", align: "right" },
  ];
}
