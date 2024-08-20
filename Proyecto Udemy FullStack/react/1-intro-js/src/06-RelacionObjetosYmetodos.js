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
    total: 1000,
    //Ahora se creara un metodo de la funcion.
    //greeting: function(){
        //Para ingresar al atributo del cliente se llama con el this.
        // Al usar funciones de flechas no se usa el THIS.
        //return `Hola ${this.client.name}`
    greeting: () => {
        return `Hola ${invoice.client.name}`
    }
    //Lo recomendable es usarlo con el function.
    
};
//Como el cliente es un objeto le puedo cambiar el nombre.
//Entro al objeto llamado invoice y luego nuevamente ingreso al objeto
// cliente y selecciono el atributo a modificar.
invoice.client.name = "Ignacio";
console.log(invoice);

//Llamamos a la función.
// Como greeting tiene un return se debe asignar a una constante.

const greeting = invoice.greeting();
console.log(greeting)

