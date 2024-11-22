import { useEffect, useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../components/ui/breadcrumb";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import useDetalleStore from "../store/detalle";
import bloqueTrabajoStore from "../store/bloqueTrabajo";
import { Button } from "../components/ui/button";
import Historial from "../components/Historial";
import Herramientas from "../components/Herramientas";
import { ModalAgregarHerramienta } from "../components/ModalAgregarHerramienta";
import { Dialog, DialogTrigger } from "../components/ui/dialog";
// import ModalConfirmarAsignar from "../components/ModalConfirmarAsignar";

function Detalle() {
  const detalleFromLocalStorage = localStorage.getItem("detalle");

  const { detalle, setDetalle } = useDetalleStore();
  const { maquina } = bloqueTrabajoStore();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalAsignarOpen, setIsModalAsignarOpen] = useState<boolean>(false);

  useEffect(() => {
    if (detalleFromLocalStorage) {
      const detalle = JSON.parse(detalleFromLocalStorage);
      setDetalle(detalle);
    }
  }, []);

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/bloqueTrabajo">Bloque de Trabajo</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/bloqueTrabajo">Detalle</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card className="mt-4">
        <CardHeader className="bg-slate-700 text-white rounded-t-xl py-2 text-sm">Detalles</CardHeader>
        <CardContent className="py-2 grid grid-cols-2 gap-1 text-sm">
          <section>
            <div>
              <span className="font-bold">Máquina: </span>
              {detalle.marca} {detalle.modelo} {detalle.placa}
            </div>
            <div>
              <span className="font-bold">Task ID: </span>
              {detalle.taskID}
            </div>
          </section>
          <section>
            <div>
              <span className="font-bold">Fecha: </span>
              {detalle.fecha}
            </div>
          </section>
        </CardContent>
        <CardHeader className="bg-slate-700 text-white text-sm py-2">Paquete de trabajo</CardHeader>
        <CardContent className="py-2 text-sm">
          <div>
            <span className="font-bold">Bloque ID: </span>
            {maquina.bloqueTrabajo}
          </div>
        </CardContent>
      </Card>

      {/* Historial */}

      <Historial tecnicos={detalle.tecnicos} etapas={detalle.etapas} />

      {/* Ejecucion de la tarea */}

      <section className="mt-4">
        <Card className="mb-4 mt-4 rounded-none">
          <CardHeader className="bg-slate-700 text-white font-bold py-2 text-sm">Ejecución de la tarea</CardHeader>
          <CardContent className="py-4 px-2">
            <p className="text-sm">
              La ejecución de la tarea requiere seguir pasos específicos para asegurar que el trabajo se realice de manera eficiente y
              segura. A continuación, se describen los procedimientos y precauciones necesarios para completar la tarea con éxito.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-slate-100 text-blue-500 font-bold py-2 text-sm px-2">Descripción</CardHeader>
          <CardContent className="py-4 px-2">
            <p dangerouslySetInnerHTML={{ __html: detalle.descripcion }} className="text-sm" />
          </CardContent>
          <CardHeader className="bg-slate-100 text-blue-500 font-bold py-2 text-sm px-2">Partes requeridas</CardHeader>
          <CardContent className="py-4 px-2">
            <p>{detalle.partesRequeridas}</p>
          </CardContent>
          <CardHeader className="bg-slate-100 text-blue-500 font-bold py-2 text-sm px-2">
            <p className="m-0">Herramientas requeridas</p>
          </CardHeader>
          <div className="px-2 mt-2">
            <Dialog
              open={isModalOpen}
              onOpenChange={(isOpen) => {
                setIsModalOpen(isOpen);
              }}
            >
              <DialogTrigger asChild>
                <Button className="w-max bg-slate-800 text-white hover:bg-slate-900">Pedir Herramienta</Button>
              </DialogTrigger>
              <ModalAgregarHerramienta setIsModalOpen={setIsModalOpen} />
            </Dialog>
          </div>
          <CardContent className="py-4 px-2">
            <Herramientas />
          </CardContent>
        </Card>
      </section>

      {/* Asignar herramientas */}

      <div className="mt-5 px-2">
        <Dialog
          open={isModalAsignarOpen}
          onOpenChange={(isOpen) => {
            setIsModalAsignarOpen(isOpen);
          }}
        >
          <DialogTrigger asChild>
            <button className="bg-slate-700 px-4 py-2 text-white">Asignar Herramientas</button>
          </DialogTrigger>
          {/* <ModalConfirmarAsignar setIsModalOpen={setIsModalAsignarOpen} /> */}
        </Dialog>
      </div>
    </div>
  );
}

export default Detalle;
