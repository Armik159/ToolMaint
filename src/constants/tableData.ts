import { IBloqueTrabajo } from "../interfaces/IBloqueTrabajo";
import { IDetalle } from "../interfaces/IDetalle";
import { IMaquina } from "../interfaces/IMaquina";
import { descripciones } from "./descripciones";
import { historial } from "./historial";

export const dataMaquinas: IMaquina[] = [
  {
    maquina: "Montacargas",
    placa: "IF-056",
    marca: "Toyota",
    modelo: "32-8FG30",
    horasTrabajadas: 750,
    bloqueTrabajo: "c2a31b03",
    fecha: "11 nov 2024",
    indexTabla: 0,
  },
  {
    maquina: "Montacargas",
    placa: "IF-102",
    marca: "Toyota",
    modelo: "32-8FG30",
    horasTrabajadas: 8200,
    bloqueTrabajo: "d4e56f78",
    fecha: "11 nov 2024",
    indexTabla: 1,
  },
  {
    maquina: "Montacargas",
    placa: "IF-124",
    marca: "Toyota",
    modelo: "32-8FG30",
    horasTrabajadas: 27000,
    bloqueTrabajo: "e7g89h12",
    fecha: "11 nov 2024",
    indexTabla: 2,
  },
];

export const dataBloqueTrabajo: IBloqueTrabajo[] = [
  {
    item: 1,
    Task: { name: "Mantenimiento preventivo (PM1)", id: "T00TRLNR" },
    taskStatus: "Activo",
    id: "c2a31b03",
    indexTabla: 0,
  },
  {
    item: 1,
    Task: { name: "Cambio de bomba", id: "T00TR3M6" },
    taskStatus: "Activo",
    id: "d4e56f78",
    indexTabla: 1,
  },
  {
    item: 1,
    Task: { name: "Overhold", id: "T00TRTFD" },
    taskStatus: "Activo",
    id: "e7g89h12",
    indexTabla: 2,
  },
];

export const dataDetalle: IDetalle[] = [
  {
    placa: "IF-056",
    taskID: "T00TRLNR",
    descripcion: descripciones.mp.descripcion,
    historial: "Historial",
    partesRequeridas: "Partes requeridas",
    herramientasRequeridas: "Herramientas requeridas",
    maquina: "Montacargas",
    marca: "Toyota",
    modelo: "32-8FG30",
    fecha: "11 nov 2024",
    tecnicos: historial.mp.tecnicos,
    etapas: historial.mp.etapas,
  },
  {
    placa: "IF-102",
    taskID: "T00TR3M6",
    descripcion: descripciones.cambioBomba.descripcion,
    historial: "Historial",
    partesRequeridas: "Partes requeridas",
    herramientasRequeridas: "Herramientas requeridas",
    maquina: "Montacargas",
    marca: "Toyota",
    modelo: "32-8FG30",
    fecha: "11 nov 2024",
    tecnicos: historial.cambioBomba.tecnicos,
    etapas: historial.cambioBomba.etapas,
  },
  {
    placa: "IF-124",
    taskID: "T00TRTFD",
    descripcion: descripciones.overhold.descripcion,
    historial: "Historial",
    partesRequeridas: "Partes requeridas",
    herramientasRequeridas: "Herramientas requeridas",
    maquina: "Montacargas",
    marca: "Toyota",
    modelo: "32-8FG30",
    fecha: "11 nov 2024",
    tecnicos: historial.overhold.tecnicos,
    etapas: historial.overhold.etapas,
  },
];
