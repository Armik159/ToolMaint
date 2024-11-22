import { useEffect } from "react";
import herramientasAsignadasStore from "../store/herramientasAsignadasStore";
import { Table, TableBody, TableCell, TableHead, TableRow } from "../components/ui/table";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../components/ui/breadcrumb";
import { IDetalle } from "../interfaces/IDetalle";

function HerramientasAsignadas() {
  const herramientasAsignadasFromStorage = localStorage.getItem("herramientasAsignadas");
  const detalle: IDetalle = localStorage.getItem("detalle") ? JSON.parse(localStorage.getItem("detalle") as string) : null;

  const { herramientas, setHerramientas } = herramientasAsignadasStore();

  useEffect(() => {
    if (herramientasAsignadasFromStorage) {
      const herramientas = JSON.parse(herramientasAsignadasFromStorage);
      setHerramientas(herramientas);
    }
  }, []);

  return (
    <div>
      <Breadcrumb className="mb-5">
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
            <BreadcrumbLink href="/detalle">Detalle</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/herramientasAsignadas">Herramientas Asignadas</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="px-4">
        <h1 className="font-bold text-lg mb-4">Herramientas Asignadas</h1>
        <p className="mb-5 text-sm text-slate-700">
          En esta página se mostrarán las herramientas asignadas a la tarea. Verás la descripción, el número de parte, el número de serie y
          el técnico actual.
        </p>
        <p className="mb-5">
          TaskID: <span className="font-bold">{detalle.taskID}</span>
        </p>
        <div>
          <Table className="border">
            <TableRow>
              <TableHead>Descripción</TableHead>
              <TableHead>Nro de parte</TableHead>
              <TableHead>Nro de serie</TableHead>
              <TableHead>Técnico actual</TableHead>
            </TableRow>
            <TableBody>
              {herramientas.map((herramienta, index) => (
                <TableRow key={index}>
                  <TableCell>{herramienta.descripcion}</TableCell>
                  <TableCell>{herramienta.nroParte}</TableCell>
                  <TableCell>{herramienta.nroSerie}</TableCell>
                  <TableCell>{herramienta.tecnicoActual}</TableCell>
                </TableRow>
              ))}
              {herramientas.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="text-center">
                    No hay herramientas
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default HerramientasAsignadas;
