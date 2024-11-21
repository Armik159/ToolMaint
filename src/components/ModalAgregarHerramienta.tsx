import { useState } from "react";
import { Button } from "./ui/button";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter, Dialog, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Table, TableBody, TableCell, TableHead, TableRow } from "./ui/table";
import { TodasLasHerramientas } from "../constants/todasHerramientas";
import { IHerramienta } from "../interfaces/IHerramienta";
import useDetalleStore from "../store/detalle";
import { Checkbox } from "./ui/checkbox";
import ModalRevisarHerramientas from "./ModalRevisarHerramientas";

export interface Props {
  setIsModalOpen: (isModalOpen: boolean) => void;
}

export function ModalAgregarHerramienta({ setIsModalOpen }: Props) {
  const [palabraBuscada, setPalabraBuscada] = useState<string>("");
  const [resultados, setResultados] = useState<IHerramienta[]>(TodasLasHerramientas);
  const [herramientasParaAñadir, setHerramientasParaAñadir] = useState<IHerramienta[]>([]);

  const { herramientas, setHerramientas } = useDetalleStore();

  // console.log(resultados);

  function handleBuscarHerramienta(e: React.ChangeEvent<HTMLInputElement>) {
    const palabraBuscada = e.target.value;
    setPalabraBuscada(palabraBuscada);

    const normalizeString = (str: string) => {
      return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
    };

    const herramientasEncontradas = TodasLasHerramientas.filter((herramienta) =>
      normalizeString(herramienta.descripcion).includes(normalizeString(palabraBuscada))
    );

    setResultados(herramientasEncontradas);
  }

  function handleAgregaroEliminarHerramienta(isChecked: boolean, descripcion: string) {
    if (isChecked) {
      //que se agreguen con la prop isAgregado en true
      const herramientaAñadida = TodasLasHerramientas.find((herramienta) => herramienta.descripcion === descripcion);
      if (herramientaAñadida) {
        setHerramientasParaAñadir([...herramientasParaAñadir, { ...herramientaAñadida, isAgregado: true }]);
      }
    } else {
      const herramientaEliminada = herramientasParaAñadir.filter((herramienta) => herramienta.descripcion !== descripcion);
      setHerramientasParaAñadir(herramientaEliminada);
    }
  }

  function handleAgregarHeramientas() {
    const herramientasAñadidas = [...herramientas, ...herramientasParaAñadir];
    setHerramientas(herramientasAñadidas);
    setHerramientasParaAñadir([]);
    setIsModalOpen(false);
  }

  return (
    <DialogContent className="sm:max-w-[650px] bg-white">
      <DialogHeader>
        <DialogTitle>Pedir Herramienta</DialogTitle>
        <DialogDescription>Busca la herramienta que necesitas y solicítala.</DialogDescription>
      </DialogHeader>
      {/* Buscador */}
      <div>
        <Input value={palabraBuscada} onChange={(e) => handleBuscarHerramienta(e)} placeholder="Buscar herramienta" className="w-full" />
      </div>
      {/* Resultados */}
      <div className="mt-4 ">
        <Label>Resultados</Label>
        {!resultados && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">No se encontraron resultados</span>
          </div>
        )}
      </div>

      {/* Lista de resultados */}
      <div className="mt-2 max-h-[450px] overflow-y-scroll w-full">
        <Table>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Número de parte</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
          <TableBody>
            {resultados.map((herramienta) => (
              <TableRow key={herramienta.nroParte} className="p-2 bg-gray-100 rounded-md">
                <TableCell className="max-w-[130px]">{herramienta.descripcion}</TableCell>
                <TableCell>{herramienta.nroParte}</TableCell>
                <TableCell>
                  <Checkbox
                    onCheckedChange={(isChecked: boolean) => handleAgregaroEliminarHerramienta(isChecked, herramienta.descripcion)}
                    checked={herramientasParaAñadir.some(
                      (herramientaAñadida) => herramientaAñadida.descripcion === herramienta.descripcion
                    )}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <DialogFooter>
        <Button type="submit" className="bg-yellow-400 hover:bg-yellow-500" onClick={handleAgregarHeramientas}>
          Añadir Herramientas
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button type="submit" className="bg-blue-400 hover:bg-blue-500">
              Revisar Lista
            </Button>
          </DialogTrigger>
          <ModalRevisarHerramientas herramientas={herramientasParaAñadir} setHerramientas={setHerramientasParaAñadir} />
        </Dialog>
      </DialogFooter>
    </DialogContent>
  );
}
