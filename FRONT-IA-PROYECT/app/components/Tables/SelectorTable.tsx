import type { SelectorTableProps } from "./config/SelectorTable.type";
import DataTableBase from "./DataTableBase";

export default function SelectorTable<T>({
  rows,
  columns,
  onSelect,
  checkboxSelection = false,
  sx = {},
}: SelectorTableProps<T>) {
  return (
    <DataTableBase
      rows={rows}
      columns={columns}
      checkboxSelection={checkboxSelection}
      onRowClick={(params) => onSelect(params.row as T)}
      sx={sx}
    />
  );
}
