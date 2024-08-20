//Se crea un objeto de factura.
const invoice = {
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    //Ahora el cliente es un objeto
    client:{
        id: 2,
        name: 'Dyllan',
        lastName: 'Salgado',
        age: 24,
    },
    // Lista de items.
    items: [
        {
            producto: 'Keyboard',
            price: 399,
            quantity:2,
        },
        {
            producto: 'mouse',
            price: 200,
            quantity:1,
        },
        {
            producto: 'paper',
            price:100,
            quantity:10,
        }
    ],
    //Quiero saber el total en dinero de los items.
    total: function(){
        let total =0;
        //Es un for que va por cada item, es por eso que primero
        //se llama a los items y se asigna un valor para que guarde el obtenido.
        this.items.forEach(item => {
            total = total + item.price*item.quantity;
        });
        return total;
    },
    greeting: function(){
    //Para ingresar al atributo del cliente se llama con el this.
    // Al usar funciones de flechas no se usa el THIS.
        return `Hola ${this.client.name}`
    }
};
//Esto no clona, si no que hace referencia a la misma instancia de objeto.
//const invoice2 = invoice;

//Para clonar el objeto se usa el {...objeto} lo que se conoce como spread.
const invoice2 = {...invoice}

const result = invoice === invoice2;
//Si el resultado es true imprime el reusltado
//Con el metodo spread ahora deberia dar falso, porque son objetos diferentes.
if (result) {
    console.log(result)
} else {
    console.log("El resultado es falso")
};
//Se puede observar que si modifico el invoice2 se ve afectado el invoice,
//esto para porque se esta referenciando a la misma instancia de objeto.
//Por lo que no esta clonado.
invoice2.id = 20;
console.log(invoice)