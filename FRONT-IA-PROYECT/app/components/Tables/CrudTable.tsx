import { useState } from "react";
import { Box, IconButton, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import type { GridColDef } from "@mui/x-data-grid";
import type { CrudTableProps } from "./config/CrudTable.type";
import { DataTableBase, ModalLoadWrapper } from "@/components";

export default function CrudTable<T>({
  rows,
  columns,
  onEdit,
  onDelete,
  onView,
  actions = ["editar", "eliminar"],
  formComponent,
  loadingCreate = false,
  errorCreate,
  ...baseProps
}: CrudTableProps<T> & {
  formComponent?: React.ReactNode;
  loadingCreate?: boolean;
  errorCreate?: string;
}) {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const handleOpenModal = () => setOpenCreateModal(true);
  const handleCloseModal = () => setOpenCreateModal(false);

  const actionColumn: GridColDef = {
    field: "actions",
    headerName: "Acciones",
    width: 150,
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

  return (
    <Box
      padding='6px'
      display='flex'
      position='relative'
      justifyContent='center'
      alignContent='center'
      width='100%'>
      {formComponent && (
        <Box mb={2} display='flex' justifyContent='flex-end'>
          <Button variant='contained' color='primary' onClick={handleOpenModal}>
            Crear +
          </Button>
        </Box>
      )}

      {/* Tabla */}
      <DataTableBase rows={rows} columns={finalColumns} {...baseProps} />

      {/* Modal de creación */}
      <ModalLoadWrapper
        open={openCreateModal}
        onClose={handleCloseModal}
        loading={loadingCreate}
        error={errorCreate}>
        {formComponent}
      </ModalLoadWrapper>
    </Box>
  );
}
