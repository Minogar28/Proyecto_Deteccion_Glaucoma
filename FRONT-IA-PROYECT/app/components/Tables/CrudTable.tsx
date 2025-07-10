import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import type { GridColDef } from "@mui/x-data-grid";
import type { CrudTableProps } from "./config/CrudTable.type";
import { DataTableBase } from "@/components";

export default function CrudTable<T>({
  rows,
  columns,
  onEdit,
  onDelete,
  onView,
  actions = ["editar", "eliminar"],
  ...baseProps
}: CrudTableProps<T>) {
  const actionColumn: GridColDef = {
    field: "actions",
    headerName: "Acciones",
    width: 120,
    sortable: false,
    renderCell: (params) => (
      <>
        {actions.includes("editar") && (
          <IconButton onClick={() => onEdit?.(params.row as T)}>
            <EditIcon />
          </IconButton>
        )}
        {actions.includes("eliminar") && (
          <IconButton onClick={() => onDelete?.(params.row as T)}>
            <DeleteIcon />
          </IconButton>
        )}
        {actions.includes("ver") && (
          <IconButton onClick={() => onView?.(params.row as T)}>
            <VisibilityIcon />
          </IconButton>
        )}
      </>
    ),
  };

  const finalColumns = [...columns, actionColumn];

  return <DataTableBase rows={rows} columns={finalColumns} {...baseProps} />;
}
