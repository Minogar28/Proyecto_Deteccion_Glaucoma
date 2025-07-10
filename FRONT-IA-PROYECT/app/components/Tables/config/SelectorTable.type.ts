import type { GridColDef } from "@mui/x-data-grid";

export type SelectorTableProps<T> = {
  rows: T[];
  columns: GridColDef[];
  onSelect: (row: T) => void;
  checkboxSelection?: boolean;
  sx?: object;
};
