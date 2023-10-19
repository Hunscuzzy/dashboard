import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export interface TableHeader<T> {
  id: keyof T;
  align?: "left" | "right" | "center";
}

interface Props<T> {
  data: T[] | undefined;
  header: TableHeader<T>[];
}

export default function BasicTable<T>({ data, header }: Props<T>) {
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
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {header.map((cell) => (
                <TableCell key={String(cell.id)} align={cell.align}>
                  {row[cell.id] as React.ReactNode}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
