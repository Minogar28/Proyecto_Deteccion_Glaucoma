import type { GridColDef } from "@mui/x-data-grid";
import type { DataTableBaseProps } from "./TableBase.type";

export type CrudActions = "editar" | "eliminar" | "ver";

export interface CrudTableProps<T> extends Omit<DataTableBaseProps, "columns"> {
  rows: T[];
  columns: GridColDef[];
  actions?: CrudActions[];
  onEdit?: (row: any) => void;
  onDelete?: (row: any) => void;
  onView?: (row: any) => void;
}
