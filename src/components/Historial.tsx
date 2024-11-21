import { Card, CardContent, CardHeader } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableRow } from "./ui/table";

interface Props {
  tecnicos: string[];
  etapas: string[];
}

function Historial({ tecnicos, etapas }: Props) {
  return (
    <Card className="mt-4 md:w-[400px] sm:w-full">
      <CardHeader className="bg-black text-white py-2 rounded-t-xl text-center">Actividades realizadas</CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableRow>
            <TableHead className="text-center border-r">Etapa</TableHead>
            <TableHead className="text-center">Tecnico</TableHead>
          </TableRow>
          <TableBody>
            {tecnicos.map((tecnico, index) => (
              <TableRow key={index}>
                <TableCell className="text-center border-r">{etapas[index]}</TableCell>
                <TableCell className="text-center">{tecnico}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default Historial;
