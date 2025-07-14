import type { TabsProps } from "@mui/material";
import type { ComponentType, JSX, ReactNode } from "react";

export interface TabItem {
  label: string;
  component: React.ReactNode;
  disabled?: boolean;
  onNext?: () => void;
}

export interface CustomTabsProps {
  tabs: TabItem[];
  tabsProps?: TabsProps;
  activeTabIndex?: number;
  setActiveTabIndex?: (index: number) => void;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  className?: string;
}

export type TabStep = {
  label: string;
  component: ReactNode;
  disabled?: boolean;
  onNext?: () => Promise<void> | void;
};
