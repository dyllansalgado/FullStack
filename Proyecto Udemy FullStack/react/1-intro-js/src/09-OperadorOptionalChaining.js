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
// Si yo traigo un atributo que no exista por ejemplo,
//invoice.company.nombre esto da un error puesto que no existe,
//Para evitar este error se puede colocar el signo de interrogación,
// Lo que permite que me muestre que esta indefinido en vez del error.
console.log(invoice.company?.nombre)
//if(invoice.company != undefined && invoice.company.nombre){
if (invoice.company?.name){ 
    console.log('Perfecto!!!')
} else{
    console.log('El parametro esta indefinido')
}

if (invoice.client?.name){ 
    console.log('Perfecto!!!')
} else{
    console.log('El parametro esta indefinido')
}

