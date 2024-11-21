import { CalendarRange } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { dataMaquinas } from "../constants/tableData";
import bloqueTrabajoStore from "../store/bloqueTrabajo";
import { useNavigate } from "react-router-dom";
import { IMaquina } from "../interfaces/IMaquina";

function Home() {
  const navigate = useNavigate();
  const { setMaquina } = bloqueTrabajoStore();

  function handleClickBloqueTrabajo(maquina: IMaquina) {
    // Implementar redirección a la página de bloque de trabajo
    setMaquina(maquina);
    localStorage.setItem("maquina", JSON.stringify(maquina));
    navigate("/bloqueTrabajo");
  }

  return (
    <div className="px-8">
      <section className="mb-5 mt-4">
        <h2 className="text-2xl font-bold mb-5">Lista de Tareas Técnicas</h2>
        <p className="text-slate-600">
          A continuación, se muestra una lista de las tareas técnicas que se han realizado en las máquinas de la empresa. Puedes ver la
          información de cada máquina, como la placa, marca, modelo, horas trabajadas, bloque de trabajo y fecha.
        </p>
      </section>
      <Table className="border">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader className="">
          <TableRow>
            <TableHead className="">Máquina</TableHead>
            <TableHead>Placa</TableHead>
            <TableHead>Marca</TableHead>
            <TableHead className="text-center">Modelo</TableHead>
            <TableHead className="text-center">Horas Trabajadas</TableHead>
            <TableHead className="text-center">Bloque de Trabajo</TableHead>
            <TableHead className="text-center">Fecha</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataMaquinas.map((maquina) => (
            <TableRow key={maquina.bloqueTrabajo}>
              <TableCell className="font-medium py-4">{maquina.maquina}</TableCell>
              <TableCell>{maquina.placa}</TableCell>
              <TableCell>{maquina.marca}</TableCell>
              <TableCell className="text-center">{maquina.modelo}</TableCell>
              <TableCell className="text-center">{maquina.horasTrabajadas}</TableCell>
              <TableCell className="">
                <div className="flex justify-center bg-transparent">
                  <p
                    className="border border-green-500 w-max text-center p-2 rounded-xl cursor-pointer"
                    onClick={() => handleClickBloqueTrabajo(maquina)}
                  >
                    {maquina.bloqueTrabajo}
                  </p>
                </div>
              </TableCell>
              <TableCell className="">
                <div className="flex items-end justify-center gap-2 text-center">
                  <CalendarRange /> {maquina.fecha}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
      </Table>
    </div>
  );
}

export default Home;
