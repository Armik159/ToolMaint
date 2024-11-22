// import React, { useState } from "react";

import { DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
// import { IHerramienta } from "../interfaces/IHerramienta";
// import { useNavigate } from "react-router-dom";

// interface Props {
//   setIsModalOpen: (isModalOpen: boolean) => void;
//   herramientasRequeridas: IHerramienta[];
//   herramientasParaAñadir: IHerramienta[];
// }

function ModalConfirmarAsignar() {
  //   const [herramientasParaAsignar, setHerramientasParaAsignar] = useState<IHerramienta[]>();

  //   const navigate = useNavigate();

  function handleCerrarModal() {
    // setIsModalOpen(false);
  }

  //   function handleConfirmar() {
  //     //Concatenamos los dos arreglos
  //     const herramientasAsignadas = [...herramientasRequeridas, ...herramientasParaAñadir];

  //     //Eliminamos las herramientas duplicadas
  //     const herramientasAsignadasUnicas = herramientasAsignadas.filter(
  //       (herramienta, index, self) => index === self.findIndex((t) => t.descripcion === herramienta.descripcion)
  //     );

  //     //Actualizamos el estado de herramientasAsignadas
  //     setHerramientasParaAsignar(herramientasAsignadasUnicas);

  //     // Vamos a Herramientas Asignadas
  //   }

  return (
    <DialogContent className="sm:max-w-[425px] bg-white">
      <DialogHeader>
        <DialogTitle>Asignar Herramientas</DialogTitle>
      </DialogHeader>

      {/* botones de confirmación */}
      <div className="flex gap-4 justify-center">
        <button className="bg-slate-700 px-4 py-2 text-white">Confirmar</button>
        <button className="bg-red-500 px-4 py-2 text-white" onClick={handleCerrarModal}>
          Cancelar
        </button>
      </div>
    </DialogContent>
  );
}

export default ModalConfirmarAsignar;
