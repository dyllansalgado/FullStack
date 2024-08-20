//Para crear una funcion se debe crear con la palabra clave function.
//function sayHello(){
//    console.log('Hola Mundo function');
//}
//De esta manera se llama la funcion.
//sayHello();

//Para crear una funcion se debe crear con la palabra clave function.
function sayHello(){
    const greeting = 'Hola mundo function!';
    //console.log('Hola Mundo function');
    return greeting;
}

//Ahora bien si creo algo con un return, como esta arriba si llamo a la funcion no entrega nada.
//Se debe crear un const que contenga la funcion.
//De esta manera se puede imprimir lo que contiene la funcion.
//const result = sayHello();
//console.log(result);
//Otra manera de imprimir lo de la funcion es:
//  console.log(sayHello());

//Ahora agregando un parametro.
function sayHello(nombre = 'Pepe'){
    const greeting = `Hola mundo function! ${nombre}`;
    //console.log('Hola Mundo function');
    return greeting;
}
//Si no escribo ningun parametro imprime el hola mundo function pero se añade el indefinido.
const result = sayHello('Dyllan')

console.log(result);
