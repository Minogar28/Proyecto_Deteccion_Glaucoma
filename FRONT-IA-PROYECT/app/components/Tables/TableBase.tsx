import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import type {
  ColsProps,
  RowsProps,
  TableBaseProps,
} from "./config/TableBase.type";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

export function DataTableRows<T>({ rows, columns }: RowsProps<T>) {
  return (
    <>
      {rows.map((row, rowIndex) => (
        <TableRow key={rowIndex}>
          {columns.map((col) => (
            <TableCell key={col.key as string} align={col.align || "left"}>
              {col.render
                ? col.render(row[col.key], row)
                : String(row[col.key] ?? "")}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
}

function DataTableCols<T>({ columns }: ColsProps<T>) {
  return (
    <TableRow>
      {columns.map((col) => (
        <TableCell key={col.key as string} align={col.align || "left"}>
          {col.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

export default function TableBase<T extends object>({
  columns,
  rows,
}: TableBaseProps<T>) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <DataTableCols columns={columns} />
        </TableHead>
        <TableBody>
          <DataTableRows rows={rows} columns={columns} />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
