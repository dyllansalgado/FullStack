const products = ['Mesa','Silla','Notebook','Teclado'];
//Push agrega algo al arreglo.
products.push('Pantalla');


const fruts = ['Peras','Manzanas','Sandias','Frutillas'];

//Con el spread puedo unir los arreglos.
//Agregando primero las frutas y luego los productos. y se agrega el sillon.
const mercado = [...fruts,...products, 'Sillon'];
//Mercado queda con los productos iniciales, si agrego algo despues
// y lo imprimo no se agrega, pero si imprimo el nuevo arreglo si se muestra.
products.push('Zapatillas');
console.log(mercado);
console.log(products);


//Tambien se puede usar el metodo CONCAT en vez de push,
// pero push modifica el arreglo y el concat crea una nueva instancia.

products.concat('Piedras','Grabadoras');
//Si imprimo no se muestra piedras y grabadoras
console.log(products);
// Para que se muestre debo referenciar nuevamente.

const products2 = products.concat('Piedras','Grabadoras');
//Ahora que se vuelve a instanciar se muestran.
console.log(products2);

const mercado2 = products2.concat(fruts.concat('Kiwi','Durazno'));

console.log(mercado2);
