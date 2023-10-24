import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ActionsProps } from "./BasicTable";

export interface TableHeaderProps {
  id: string;
  align?: "left" | "right" | "center";
  format?: (value: unknown) => React.ReactNode;
}

interface Props {
  header: TableHeaderProps[];
  actions?: ActionsProps[];
}

const TableHeader: React.FC<Props> = ({ header, actions }) => {
  return (
    <TableHead>
      <TableRow>
        {header.map((cell) => (
          <TableCell key={String(cell.id)} align={cell.align}>
            {String(cell.id).toUpperCase()}
          </TableCell>
        ))}
        {Boolean(actions?.length) && <TableCell>ACTIONS</TableCell>}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
