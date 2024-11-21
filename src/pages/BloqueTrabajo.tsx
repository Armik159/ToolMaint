import { useEffect } from "react";
import bloqueTrabajoStore from "../store/bloqueTrabajo";
import { dataBloqueTrabajo, dataDetalle, dataMaquinas } from "../constants/tableData";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableRow } from "../components/ui/table";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../components/ui/breadcrumb";
import { IDetalle } from "../interfaces/IDetalle";
import useDetalleStore from "../store/detalle";
import herramientas from "../constants/herramientas";

function BloqueTrabajo() {
  const { maquina, setMaquina } = bloqueTrabajoStore();
  const { setDetalle } = useDetalleStore();
  const { setHerramientas } = useDetalleStore();

  const isMaquinaFromStorage = localStorage.getItem("maquina");

  useEffect(() => {
    if (isMaquinaFromStorage) {
      setMaquina(JSON.parse(isMaquinaFromStorage));
    }
    if (!isMaquinaFromStorage && !maquina) {
      setMaquina(dataMaquinas[0]);
    }
  }, []);

  function handleClick(detalle: IDetalle) {
    setDetalle(detalle);
    localStorage.setItem("detalle", JSON.stringify(detalle));
    window.location.href = "/detalle";
    setHerramientas(herramientas[detalle.taskID].herramientas);
    localStorage.setItem("herramientas", JSON.stringify(herramientas[detalle.taskID].herramientas));
  }

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
        </BreadcrumbList>
      </Breadcrumb>

      <Card className="mt-4">
        <CardHeader className="bg-slate-700 text-white rounded-t-xl">
          <p className="font-bold">Bloque de Trabajo - {maquina.bloqueTrabajo}</p>
        </CardHeader>
        <CardContent className="py-4">
          <span className="font-bold">Máquina:</span> {maquina.marca} {maquina.modelo}-{maquina.placa}
        </CardContent>
      </Card>
      <section className="mt-5">
        <Table className="border">
          <TableRow>
            <TableHead className="text-center border">Item</TableHead>
            <TableHead className="p-0">
              <div className="flex flex-col">
                <span className="text-center border w-full border-t-0 border-x-0">Task</span>
                <div className="flex justify-evenly">
                  <span className="text-center border w-[50%] border-b-0 border-t-0">Name</span>
                  <span className="text-center border w-[50%] border-b-0 border-t-0">ID</span>
                </div>
              </div>
            </TableHead>
            <TableHead className="text-center border">Task Status</TableHead>
          </TableRow>
          <TableBody>
            {dataBloqueTrabajo.map((bloqueTrabajo) => (
              <TableRow key={bloqueTrabajo.id}>
                {bloqueTrabajo.id === maquina.bloqueTrabajo && (
                  <>
                    <TableCell className="font-medium py-4 text-center">{bloqueTrabajo.item}</TableCell>
                    <TableCell>
                      <div className="flex justify-evenly text-center items-center">
                        <span className="w-[50%]">{bloqueTrabajo.Task.name}</span>
                        <div className="w-[50%] flex justify-center">
                          <p
                            className="w-max border py-2 px-4 border-black rounded-xl hover:bg-black hover:text-white transition-all ease-in-out cursor-pointer"
                            onClick={() =>
                              handleClick({
                                placa: maquina.placa,
                                taskID: bloqueTrabajo.Task.id,
                                descripcion: dataDetalle[bloqueTrabajo.indexTabla].descripcion,
                                historial: dataDetalle[bloqueTrabajo.indexTabla].historial,
                                partesRequeridas: dataDetalle[bloqueTrabajo.indexTabla].partesRequeridas,
                                herramientasRequeridas: dataDetalle[bloqueTrabajo.indexTabla].herramientasRequeridas,
                                maquina: maquina.maquina,
                                marca: maquina.marca,
                                modelo: maquina.modelo,
                                fecha: dataDetalle[bloqueTrabajo.indexTabla].fecha,
                                tecnicos: dataDetalle[bloqueTrabajo.indexTabla].tecnicos,
                                etapas: dataDetalle[bloqueTrabajo.indexTabla].etapas,
                              })
                            }
                          >
                            {bloqueTrabajo.Task.id}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">{bloqueTrabajo.taskStatus}</TableCell>
                  </>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  );
}

export default BloqueTrabajo;
