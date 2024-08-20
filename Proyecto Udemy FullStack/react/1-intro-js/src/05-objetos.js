//Se crea un objeto de factura.
const invoice = {
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: 'Dyllan Salgado',
    total: 1000,
};
//Puedo modificar datos del objeto
invoice.client = 'Salgado Dyllan'
console.log(invoice)
console.log(invoice.date)
console.log(invoice.client)