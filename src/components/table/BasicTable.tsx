import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";

export interface TableHeader<T> {
  id: keyof T;
  align?: "left" | "right" | "center";
  format?: (value: any) => React.ReactNode;
}

interface Props<T> {
  data: T[] | undefined;
  header: TableHeader<T>[];
  actions?: { onClick: (param?: any) => void; icon: React.ReactNode }[];
}

export default function BasicTable<T>({ data, header, actions }: Props<T>) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            {header?.map((cell) => (
              <TableCell key={String(cell.id)} align={cell.align}>
                {String(cell.id).toUpperCase()}
              </TableCell>
            ))}
            {actions?.length && <TableCell>Actions</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {header.map((cell) => {
                return (
                  <TableCell key={String(cell.id)} align={cell.align}>
                    {
                      (cell.format
                        ? cell.format(row[cell.id])
                        : row[cell.id]) as React.ReactNode
                    }
                  </TableCell>
                );
              })}
              {actions?.length && (
                <TableCell>
                  {actions.map((action, i) => (
                    <IconButton
                      color='primary'
                      onClick={() => action.onClick(row)}
                      key={i}
                    >
                      {action.icon}
                    </IconButton>
                  ))}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
