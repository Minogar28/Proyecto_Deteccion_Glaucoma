import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import type { CustomTabsProps, TabPanelProps } from "./config/TabsBase.type";

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsBase({ tabs, tabsProps }: CustomTabsProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
        height: "100%",
      }}>
      <Box sx={{ borderBottom: 1 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='dynamic tabs'
          {...tabsProps}>
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
          <CustomTabPanel
            key={index}
            value={value}
            index={index}
            className='flex justify-center w-full'>
            {tab.content}
          </CustomTabPanel>
        ))}
      </Box>
    </Box>
  );
}
