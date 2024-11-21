import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// Obtener __filename y __dirname en ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Función para convertir a camelCase
function toCamelCase(str) {
  return str.replace(/([-_][a-z])/gi, (match) => {
    return match.toUpperCase().replace('-', '').replace('_', '');
  });
}

// Función para reemplazar comillas tipográficas con comillas estándar
function replaceSmartQuotes(str) {
  return str.replace(/[“”]/g, '"').replace(/[‘’]/g, "'");
}

// Leer el archivo info.data.txt
const filePath = path.join(__dirname, 'info.data.txt');
console.log('Leyendo archivo:', filePath);

const fileContent = fs.readFileSync(filePath, 'utf-8');
console.log('Contenido del archivo:', fileContent);

// Parsear el contenido del archivo
const lines = fileContent.split('\n');
const result = [];

let currentItem = {};

lines.forEach(line => {
  line = replaceSmartQuotes(line.trim());
  if (line === '{' || line === '},' || line === '}') {
    if (line === '},' || line === '}') {
      // Asegurarse de que el objeto tenga todas las propiedades
      currentItem = {
        descripcion: currentItem.Descripción || "",
        nroParte: currentItem["Nro de parte"] || "",
        nroSerie: currentItem["Nro de Serie"] || "",
        tecnicoActual: currentItem.tecnicoActual || ""
      };
      result.push(currentItem);
      currentItem = {};
    }
    return;
  }

  const [key, value] = line.split(':');
  if (key && value) {
    const trimmedKey = key.trim().replace(/['"]/g, '');
    const trimmedValue = value.trim().replace(/['",]/g, '');
    currentItem[trimmedKey] = trimmedValue;
  }
});

console.log('Resultado:', result);

// Convertir el objeto a JSON
const jsonResult = JSON.stringify(result, null, 2);

// Guardar el resultado en un archivo JSON
const outputFilePath = path.join(__dirname, 'output.json');
fs.writeFileSync(outputFilePath, jsonResult);

console.log('Transformación completada. Archivo JSON generado:', outputFilePath);