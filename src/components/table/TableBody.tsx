import * as React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import MUITableBody from "@mui/material/TableBody";
import IconButton from "@mui/material/IconButton";
import { TableProps } from "./BasicTable";

const TableBody: React.FC<TableProps<{ [key: string]: any }>> = ({
  data,
  header,
  actions,
}) => {
  return (
    <MUITableBody>
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
    </MUITableBody>
  );
};

export default TableBody;
