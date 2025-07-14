import { Box } from "@mui/material";
import type { TabPanelProps } from "./config/TabsBase.type";

export default function TabsPanel({
  children,
  value,
  index,
  ...other
}: TabPanelProps) {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`tab-panel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}>
      {value === index && (
        <Box
          sx={{
            p: 3,
            minWidth: "100%",
            display: "flex",
            justifyContent: "center",
          }}>
          {children}
        </Box>
      )}
    </div>
  );
}
