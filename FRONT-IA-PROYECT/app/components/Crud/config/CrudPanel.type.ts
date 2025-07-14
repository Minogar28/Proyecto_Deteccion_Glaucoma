import type { CrudActions } from "@/components/Tables/config/CrudTable.type";
import type { GridColDef } from "@mui/x-data-grid";

export interface CrudPanelProps<T> {
  title?: string;
  rows: T[];
  columns: GridColDef[];
  actions?: CrudActions[];
  onCreate?: () => void;
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
  onView?: (row: T) => void;
  renderCreateForm: (closeModal: () => void) => React.ReactNode;
}
