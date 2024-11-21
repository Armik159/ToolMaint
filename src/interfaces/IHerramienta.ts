export interface IHerramienta {
  descripcion: string;
  nroParte: string;
  nroSerie: string;
  tecnicoActual: string;
  disponible?: string;
  isAgregado?: boolean;
}

export interface IHerramientasGenerales {
  [key: string]: {
    herramientas: IHerramienta[];
  };
}
