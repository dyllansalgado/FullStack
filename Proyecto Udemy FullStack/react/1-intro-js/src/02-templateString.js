// Para crear una variable se usa let,
// pueden cambiar con el tiempo.
let nombre = "Pepe";
nombre = "Dyllan"

// Para crear una constante se usa CONST.
// Se usa const para valores que no van a cambiar.
const apellido = "Salgado";
// Si trato de renombrar la constante entrega un error.

// El template String permite imprimir con el formato que nosotros entreguemos
// En caso de que se usen variables o constantes se deben colocar con signo peso y llaves.
// Esto queda:
// Hola Mundo!!
//  Dyllan - 
//  Salgado
console.log(`Hola Mundo!!
    ${nombre} -
    ${apellido}`);