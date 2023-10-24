import * as React from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHeader, { TableHeaderProps } from "./TableHeader";
import TableBody from "./TableBody";

export interface ActionsProps {
  onClick: (param?: any) => void;
  icon: React.ReactNode;
}

export interface TableProps<T extends { [key: string]: any }> {
  data: T[] | undefined;
  header: TableHeaderProps[];
  actions?: ActionsProps[];
}

export default function BasicTable<T extends { [key: string]: any }>({
  data,
  header,
  actions,
}: TableProps<T>) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <TableHeader header={header} actions={actions} />
        <TableBody header={header} actions={actions} data={data} />
      </Table>
    </TableContainer>
  );
}
