export const papper = {
    producto: 'papper',
    price: 100,
    quantity: 10,
}
// Si trato de exportar el const invoices entregara un error,
//puesto que no es exportable, para que lo sea se debe inicializar con la palabra clave export.

export const invoices = [
    {
        //Se crea un objeto de factura. 
        id: 1,
        name: 'Compras de oficina',
        //Ahora el cliente es un objeto
        client:{
            name: 'Dyllan',
            lastName: 'Salgado',
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
        ]
    },
    {
        //Se crea un objeto de factura. 
        id: 2,
        name: 'Compras de computación',
        //Ahora el cliente es un objeto
        client:{
            name: 'Aaa',
            lastName: 'dsa',
        },
        // Lista de items.
        items: [
            {
                producto: 'Keyboard',
                price: 399,
                quantity:2,
            },
            {
                producto: 'Screen 17',
                price: 500,
                quantity:1,
            },
            {
                producto: 'cpu',
                price:1000,
                quantity:10,
            },
            papper
        ]
    },
    {
        //Se crea un objeto de factura. 
        id: 3,
        name: 'Compras de papeleria',
        //Ahora el cliente es un objeto
        client:{
            name: 'Bbbb',
            lastName: 'asd',
        },
        // Lista de items.
        items: [

            {
                producto: 'pencil',
                price: 50,
                quantity:1,
            },
            {
                producto: 'paper',
                price:100,
                quantity:10,
            }
        ]
    }
];


export const invoiceByClientName = (nombre) =>{
    return invoices.find(i =>i.client.name === nombre)
}

//La función anteriormente realizada se puede efectuar como un export default de la siguiente manera:

export default (clientName) =>{
    return invoices.find(i =>i.client.name === clientName)
}


export const invoiceByID = (id) => {
    return invoices.find( i => i.id === id);
}

//Otra manera de exportar y se vea mas ordenando es,
// Eliminar el export del inicio y llamarlos todos juntos,

//
//export{
  //  papper,
  //  invoices,
  //  ...
  // Y cuando queramos exportar una por defecto se deja:
  //  invoiceXDefecto as default,
//}

//catch Permite atrapar un error, then si resulta bien la tarea y el finally tarea que viene despues del finally y el pasar.
export const findInvoiceById= (id) =>{
    const promise = new Promise((resolve,reject) => {
        setTimeout(() =>{
            const result = invoiceByID(id);
            if(result){
                resolve(result);
            } else {
                reject('El valor del ID no se encuentra.')
            }
        },2500)
    });
    return promise;

}