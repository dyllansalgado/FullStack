const products = ['Mesa','Silla','Notebook','Teclado'];
//Push agrega algo al arreglo.
products.push('Pantalla');
console.log(products)
//Un ciclo para recorrer el arreglo.
products.forEach(function(el){
    console.log(el);
})

//Tambien se puede escribir como:
//products.forEach(el => console.log(el));

//Metodo FOR
console.log('Metodo for');
for (const prod of products){
    console.log(prod)
}

//Metodo FOR clasico
console.log('Metodo FOR CLASICO');
for(let i = 0; i < products.length; i++){
    const ele = products[i];
    console.log(ele);
}