import { useEffect, useState } from "react";

import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { IHerramienta } from "../interfaces/IHerramienta";
import { useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableRow } from "./ui/table";

interface Props {
  setIsModalOpen: (isModalOpen: boolean) => void;
  herramientasRequeridas: IHerramienta[];
  herramientasParaAñadir: IHerramienta[];
}

function ModalConfirmarAsignar({ setIsModalOpen, herramientasRequeridas, herramientasParaAñadir }: Props) {
  const [herramientasParaAsignar, setHerramientasParaAsignar] = useState<IHerramienta[]>();

  const navigate = useNavigate();

  function handleCerrarModal() {
    setIsModalOpen(false);
  }

  useEffect(() => {
    //Concatenamos los dos arreglos
    const herramientasAsignadas = [...herramientasRequeridas, ...herramientasParaAñadir];

    //Actualizamos el estado de herramientasAsignadas
    setHerramientasParaAsignar(herramientasAsignadas);
  }, [herramientasParaAñadir]);

  function handleConfirmar() {
    if (herramientasParaAsignar) {
      // Eliminamos las herramientas duplicadas
      const herramientasAsignadasUnicas = herramientasParaAsignar.filter(
        (herramienta, index, self) => index === self.findIndex((t) => t.descripcion === herramienta.descripcion)
      );

      // Asignamos "Armik Quevedo Suarez" a tecnicoActual para todas las herramientas
      const herramientasConTecnico = herramientasAsignadasUnicas.map((herramienta) => ({
        ...herramienta,
        tecnicoActual: "Armik Quevedo Suarez",
      }));

      localStorage.setItem("herramientasAsignadas", JSON.stringify(herramientasConTecnico));

      // Cerramos el modal
      setIsModalOpen(false);

      // Vamos a Herramientas Asignadas
      navigate("/herramientasAsignadas");
    }
  }

  return (
    <DialogContent className="sm:max-w-[625px] bg-white">
      <DialogHeader>
        <DialogTitle>Asignar Herramientas</DialogTitle>
        <DialogDescription>Estas son las herramientas que se asignarán a la tarea.</DialogDescription>
      </DialogHeader>

      {/* lista de herramientas requeridas */}

      <div className="max-h-[450px] overflow-y-scroll">
        <Table>
          <TableRow>
            <TableHead>Descripción</TableHead>
            <TableHead>Nro. Parte</TableHead>
            <TableHead>Nro. Serie</TableHead>
          </TableRow>
          <TableBody>
            {herramientasParaAsignar &&
              herramientasParaAsignar.map((herramienta, index) => (
                <TableRow key={index}>
                  <TableCell className="max-w-[150px] flex gap-4 items-center">
                    <p>{herramienta.descripcion}</p>
                  </TableCell>
                  <TableCell>{herramienta.nroParte}</TableCell>
                  <TableCell>{herramienta.nroSerie}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>

      {/* botones de confirmación */}
      <div className="flex gap-4 justify-center">
        <button className="bg-slate-700 px-4 py-2 text-white" onClick={handleConfirmar}>
          Confirmar
        </button>
        <button className="bg-red-500 px-4 py-2 text-white" onClick={handleCerrarModal}>
          Cancelar
        </button>
      </div>
    </DialogContent>
  );
}

export default ModalConfirmarAsignar;
