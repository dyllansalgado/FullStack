//Funcion de flecha o Arrow function.

// Para psarlo a funcion anonima se hace lo siguiente:
//Ahora agregando un parametro.
//const sayHello = function (nombre = 'Pepe'){
    //const greeting = `Hola mundo function! ${nombre}`;
    //console.log('Hola Mundo function');
    //return greeting;
//}
//Si no escribo ningun parametro imprime el hola mundo function pero se añade el indefinido.
//const result = sayHello('Dyllan')
//console.log(result);

// Ahora para dejarlo a una funcion de flecha.

//Ahora agregando un parametro.
const sayHello = (nombre = 'Pepe')  `Hola mundo function! ${nombre}`;

//Si no escribo ningun parametro imprime el hola mundo function pero se añade el indefinido.
const result = sayHello('Dyllan')

console.log(result);