import { Box, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import type { DataTableBaseProps } from "./config/TableBase.type";

export default function DataTableBase({
  rows,
  columns,
  checkboxSelection = false,
  paginationModel = { page: 0, pageSize: 5 },
  onRowClick,
  sx = {},
}: DataTableBaseProps) {
  return (
    <Box sx={{ height: 400, width: "100%", padding: "10px" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection={checkboxSelection}
        onRowClick={onRowClick}
        sx={{ border: 0, width: "auto" }}
      />
    </Box>
  );
}
