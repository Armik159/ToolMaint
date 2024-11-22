import { Table, TableBody, TableCell, TableHead, TableRow } from "./ui/table";
import useDetalleStore from "../store/detalle";
import { useEffect } from "react";

function Herramientas() {
  const { herramientas, setHerramientas } = useDetalleStore();
  const herramientasFromLocalStorage = localStorage.getItem("herramientas");

  // function handleDeleteHerramienta(descripcion: string) {
  //   const herramientaEliminada = herramientas.filter((herramienta) => herramienta.descripcion !== descripcion);
  //   setHerramientas(herramientaEliminada);
  // }

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
        <TableHead>Stock</TableHead>
      </TableRow>
      <TableBody className="border">
        {herramientas.map((herramienta, index) => (
          <TableRow key={index}>
            <TableCell>{herramienta.descripcion}</TableCell>
            <TableCell>{herramienta.nroParte}</TableCell>
            <TableCell>{herramienta.nroSerie}</TableCell>
            <TableCell>{herramienta.tecnicoActual}</TableCell>
            <TableCell>{herramienta.disponible}</TableCell>
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
