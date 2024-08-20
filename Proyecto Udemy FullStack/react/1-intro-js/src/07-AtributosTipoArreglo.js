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
};
//Como el cliente es un objeto le puedo cambiar el nombre.
//Entro al objeto llamado invoice y luego nuevamente ingreso al objeto
// cliente y selecciono el atributo a modificar.
invoice.client.name = "Ignacio";
console.log(invoice);
// Para traer la funcion se usa la llamada normal.
console.log('Total: ' + invoice.total())