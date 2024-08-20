const invoices = [
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
            }
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


//metodo map similar a foreach, pero no retorna nada o no se modifica nada.

const invoicesName = invoices.map( i =>{
    return i.name;
});
console.log(invoicesName);   


const invoicesClientDyllan = invoices.map( i => {
    if (i.client.name == 'Dyllan' ){
        console.log(i.client.lastName)
    }
} )

//Metodo buscar o find por id

const invoiceByID = invoices.find( i => i.id === 3);
console.log(invoiceByID);

//Metodo filter

const invoiceFilter = invoices.filter(i => i.id > 1 );
console.log(invoiceFilter);

console.log('Filter eliminar');

const invoiceDeleted = invoices.filter(i => i.id != 2 );
console.log(invoiceDeleted);

//Metodo Some, parecido al find pero se utiliza para detectar o comprar si es igual.

const result = invoices.some( i => i.client.name === 'Juan');
console.log(result)
//aca da false porque no se encuentra un cliente llamado juan.

