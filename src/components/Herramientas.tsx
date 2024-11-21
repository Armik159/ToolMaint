import { Table, TableBody, TableCell, TableHead, TableRow } from "./ui/table";
import useDetalleStore from "../store/detalle";
import { OctagonMinus } from "lucide-react";
import { useEffect } from "react";

function Herramientas() {
  const { herramientas, setHerramientas } = useDetalleStore();
  const herramientasFromLocalStorage = localStorage.getItem("herramientas");

  function handleDeleteHerramienta(descripcion: string) {
    const herramientaEliminada = herramientas.filter((herramienta) => herramienta.descripcion !== descripcion);
    setHerramientas(herramientaEliminada);
  }

  useEffect(() => {
    if (herramientasFromLocalStorage) {
      const herramientas = JSON.parse(herramientasFromLocalStorage);
      setHerramientas(herramientas);
    }
  }, []);

  return (
    <Table>
      <TableRow className="rounded-xl px-2 bg-black text-white hover:bg-black hover:text-white">
        <TableHead>Descripción</TableHead>
        <TableHead>Nro de parte</TableHead>
        <TableHead>Nro de serie</TableHead>
        <TableHead>Técnico actual</TableHead>
      </TableRow>
      <TableBody className="border">
        {herramientas.map((herramienta, index) => (
          <TableRow key={index}>
            <TableCell>
              <div className="flex gap-2 items-center">
                {herramienta.isAgregado && (
                  <span>
                    <OctagonMinus
                      className="bg-red-500 py-1 text-white rounded-xl cursor-pointer"
                      onClick={() => handleDeleteHerramienta(herramienta.descripcion)}
                    />
                  </span>
                )}
                {herramienta.descripcion}
              </div>
            </TableCell>
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
  );
}

export default Herramientas;
