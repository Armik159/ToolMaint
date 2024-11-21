import { create } from "zustand";
import { dataDetalle } from "../constants/tableData";
import { IDetalle } from "../interfaces/IDetalle";
import { IHerramienta } from "../interfaces/IHerramienta";
import herramientas from "../constants/herramientas";

interface detalleState {
  detalle: IDetalle;
  setDetalle: (detalle: IDetalle) => void;
  herramientas: IHerramienta[];
  setHerramientas: (herramientas: IHerramienta[]) => void;
}

const useDetalleStore = create<detalleState>()((set) => ({
  detalle: dataDetalle[0],
  setDetalle: (detalle) => set({ detalle }),
  herramientas: herramientas[dataDetalle[0].taskID].herramientas,
  setHerramientas: (herramientas) => set({ herramientas }),
}));

export default useDetalleStore;
