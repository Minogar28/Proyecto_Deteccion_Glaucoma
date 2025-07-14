import { useState } from "react";

export function usePasoIA() {
  const [tabIndex, setTabIndex] = useState(0);
  const pasos = ["preprocesado", "localizacion", "segmentacion", "resultado"];

  const avanzarPaso = () => {
    setTabIndex((prev) => Math.min(prev + 1, pasos.length - 1));
  };

  const pasoActual = pasos[tabIndex];

  return {
    tabIndex,
    setTabIndex,
    pasoActual,
    avanzarPaso,
  };
}
