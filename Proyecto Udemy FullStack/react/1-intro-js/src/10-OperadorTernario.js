const average = 5.9;
//Esto es como un if y else juntos, lo que hace es lo siguietne:
// pregunta si el promedio es mayoro o igual a 5.5 si lo es se imprime aprobado
// Si no rechazado.
const estado = (average >= 5.5) ? 'Aprobado': 'Rechazado';  

console.log(`Resulado: ${estado}`);

let max = 0;

const a = 5;
const b = 8;
const c = 3;

max = a>b ? a : b;
max = max > c ? max: c;

console.log(`El numero mayor es ${max}`)