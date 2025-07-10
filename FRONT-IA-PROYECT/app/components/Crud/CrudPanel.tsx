import { Button, Modal, Typography, Box } from "@mui/material";
import { useState } from "react";
import type { CrudPanelProps } from "./config/CrudPanel.type";
import { CrudTable } from "@/components";

export default function CrudPanel<T>({
  title = "Listado",
  rows,
  columns,
  actions,
  onCreate,
  onEdit,
  onDelete,
  onView,
  renderCreateForm,
}: CrudPanelProps<T>) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    onCreate?.();
  };
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ position: "relative", padding: 2 }}>
      <Typography variant='h6'>{title}</Typography>
      <Box sx={{ position: "absolute", top: 16, right: 16 }}>
        <Button variant='contained' onClick={handleOpen}>
          + Crear
        </Button>
      </Box>

      <CrudTable<T>
        rows={rows}
        columns={columns}
        actions={actions}
        onEdit={onEdit}
        onDelete={onDelete}
        onView={onView}
      />

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            margin: "auto",
            width: 400,
            padding: 3,
            bgcolor: "background.paper",
            mt: 10,
          }}>
          {renderCreateForm(handleClose)}
        </Box>
      </Modal>
    </Box>
  );
}
