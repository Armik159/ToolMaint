import { create } from "zustand";
import { IMaquina } from "../interfaces/IMaquina";
import { dataMaquinas } from "../constants/tableData";

interface bloqueTrabajoState {
  maquina: IMaquina;
  setMaquina: (maquina: IMaquina) => void;
}

const bloqueTrabajoStore = create<bloqueTrabajoState>()((set) => ({
  maquina: dataMaquinas[0],
  setMaquina: (maquina) => set({ maquina }),
}));

export default bloqueTrabajoStore;
