import { useState, type SyntheticEvent } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import type { CustomTabsProps } from "./config/TabsBase.type";
import TabsPanel from "./TabsPanel";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsBase({
  tabs,
  tabsProps,
  activeTabIndex,
  setActiveTabIndex,
}: CustomTabsProps) {
  const [value, setValue] = useState(0);

  const actualIndex = activeTabIndex ?? value;
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setActiveTabIndex ? setActiveTabIndex(newValue) : setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
      }}>
      <Box sx={{ borderBottom: 1 }}>
        <Tabs value={actualIndex} onChange={handleChange} {...tabsProps}>
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              disabled={tab.disabled}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        {tabs.map((tab, index) => (
          <TabsPanel key={index} value={actualIndex} index={index}>
            {tab.component}
          </TabsPanel>
        ))}
      </Box>
    </Box>
  );
}
