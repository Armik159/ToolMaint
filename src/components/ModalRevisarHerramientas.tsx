import { IHerramienta } from "../interfaces/IHerramienta";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Table, TableCell, TableHead, TableRow, TableBody } from "./ui/table";

interface Props {
  herramientas: IHerramienta[];
  setHerramientas: (herramientas: IHerramienta[]) => void;
}

function ModalRevisarHerramientas({ herramientas, setHerramientas }: Props) {
  function handleEliminarHerramienta(descripcion: string) {
    const herramientaEliminada = herramientas.filter((herramienta) => herramienta.descripcion !== descripcion);
    setHerramientas(herramientaEliminada);
  }

  return (
    <DialogContent className="bg-white sm:max-w-[750px]">
      <DialogHeader>
        <DialogTitle>Revisar Herramientas</DialogTitle>
        <DialogDescription>Revisa las herramientas que necesitas para realizar tu tarea.</DialogDescription>
      </DialogHeader>
      <Table>
        <TableRow>
          <TableHead>Descripción</TableHead>
          <TableHead>Nro. Parte</TableHead>
          <TableHead>Nro. Serie</TableHead>
          <TableHead>Acción</TableHead>
        </TableRow>
        <TableBody>
          {herramientas.map((herramienta) => (
            <TableRow key={herramienta.nroParte}>
              <TableCell>{herramienta.descripcion}</TableCell>
              <TableCell>{herramienta.nroParte}</TableCell>
              <TableCell>{herramienta.nroSerie}</TableCell>
              <TableCell>
                <button
                  className="bg-red-500 px-2 py-1 text-white cursor-pointer"
                  onClick={() => handleEliminarHerramienta(herramienta.descripcion)}
                >
                  Eliminar
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </DialogContent>
  );
}

export default ModalRevisarHerramientas;
