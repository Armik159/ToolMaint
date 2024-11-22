import { create } from "zustand";
import { dataDetalle } from "../constants/tableData";
import { IHerramienta } from "../interfaces/IHerramienta";
import herramientas from "../constants/herramientas";

interface detalleState {
  herramientas: IHerramienta[];
  setHerramientas: (herramientas: IHerramienta[]) => void;
}

const herramientasAsignadasStore = create<detalleState>()((set) => ({
  herramientas: herramientas[dataDetalle[0].taskID].herramientas,
  setHerramientas: (herramientas) => set({ herramientas }),
}));

export default herramientasAsignadasStore;
