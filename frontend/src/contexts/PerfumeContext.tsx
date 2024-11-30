import { createContext, ReactNode, useEffect, useState } from "react";
import { Iperfume} from "../@libs/types";
import { PerfumeService } from "../services/perfume.service";

interface PerfumeContextProps {
  perfumes: Iperfume[];
  setPerfumes: React.Dispatch<React.SetStateAction<Iperfume[]>>;
}

// Cria o contexto com valores iniciais
export const PerfumeContext = createContext<PerfumeContextProps | undefined>(undefined);

// Cria o provider
interface PerfumeProviderProps {
  children: ReactNode;
}

export const PerfumeProvider: React.FC<PerfumeProviderProps> = ({ children }) => {
  const [perfumes, setPerfumes] = useState<Iperfume[]>([]);

  useEffect(()=>{
    PerfumeService.getAll()
      .then(result => {
        console.log(result.data)
        setPerfumes(result.data);
      })
  },[])

  return (
    <PerfumeContext.Provider value={{ perfumes, setPerfumes }}>
      {children}
    </PerfumeContext.Provider>
  );
};