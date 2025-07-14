import { useState, type SyntheticEvent } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import TabsPanel from "./TabsPanel";
import { Button } from "@/components";
import type { TabStep } from "./config/TabsBase.type";

type Props = {
  tabs: TabStep[];
  tabsProps?: object;
  activeTabIndex?: number;
  setActiveTabIndex?: (index: number) => void;
};

export default function TabsNextStep({
  tabs,
  tabsProps,
  activeTabIndex,
  setActiveTabIndex,
}: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [internalIndex, setInternalIndex] = useState(0);
  const actualIndex = activeTabIndex ?? internalIndex;
  const updateIndex = setActiveTabIndex ?? setInternalIndex;
  const isLastTab = actualIndex === tabs.length - 1;

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    updateIndex(newValue);
  };

  const handleNext = async () => {
    if (isLoading) return;
    updateIndex(actualIndex);

    try {
      setIsLoading(true);
      const onNext = tabs[actualIndex]?.onNext;
      if (onNext) await onNext();
      updateIndex(actualIndex + 1);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        width: "100%",
        position: "relative",
      }}>
      <Box
        sx={{
          width: 200,
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Tabs value={actualIndex} onChange={handleChange} {...tabsProps}>
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              disabled={tab.disabled}
              id={`tab-${index}`}
              aria-controls={`tab-panel-${index}`}
            />
          ))}
        </Tabs>
      </Box>

      {/* Panel principal */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: 4,
          py: 6,
          position: "relative",
        }}>
        {tabs.map((tab, index) => (
          <TabsPanel key={index} value={actualIndex} index={index}>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}>
              {tabs[actualIndex].component}
            </Box>
          </TabsPanel>
        ))}
      </Box>

      {/* Botón fijo en esquina inferior derecha */}
      {!isLastTab && (
        <Box
          sx={{
            position: "absolute",
            bottom: 32,
            right: 32,
          }}>
          <Button variant='primary' onClick={handleNext} disabled={isLoading}>
            {isLoading ? "Procesando..." : "Siguiente"}
          </Button>
        </Box>
      )}
    </Box>
  );
}
