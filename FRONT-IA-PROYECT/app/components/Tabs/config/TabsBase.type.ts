import type { TabsProps } from "@mui/material";

export interface TabItem {
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface CustomTabsProps {
  tabs: TabItem[];
  tabsProps?: TabsProps;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  className?: string;
}
