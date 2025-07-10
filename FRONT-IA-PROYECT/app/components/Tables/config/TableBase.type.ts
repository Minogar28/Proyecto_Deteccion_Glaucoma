import type { GridColDef } from "@mui/x-data-grid";
import type { ReactNode } from "react";

export interface Column<T> {
  key: keyof T;
  label: string;
  align?: "left" | "right" | "center";
  render?: (value: T[keyof T], row: T) => ReactNode;
}

export interface TableBaseProps<T> {
  columns: Column<T>[];
  rows: T[];
}

export interface ColsProps<T> {
  columns: Column<T>[];
}

export interface RowsProps<T> {
  columns: Column<T>[];
  rows: T[];
}
export interface DataTableBaseProps {
  rows: any[];
  columns: GridColDef[];
  checkboxSelection?: boolean;
  paginationModel?: { page: number; pageSize: number };
  onRowClick?: (params: any) => void;
  sx?: object;
}
