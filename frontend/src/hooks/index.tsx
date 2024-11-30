import { useContext } from "react";
import { PerfumeContext } from "../contexts/PerfumeContext";

export const usePerfumes = () => {
  const context = useContext(PerfumeContext);

  if (!context) {
    throw new Error("usePerfumes deve ser usado dentro de um PerfumesProvider");
  }
  
  return context;
};