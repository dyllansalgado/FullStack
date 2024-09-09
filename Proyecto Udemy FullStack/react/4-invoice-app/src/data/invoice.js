export const invoice = {
    id: 10,
    name: 'Componentes PC',
    client: {
        name: 'Dyllan',
        lastName: 'Salgado',
        address: {
            country: 'Chile',
            city: 'Santiago',
            street: 'Pepegrillo',
            number: 666
        }
    },     
    company: {
        name: 'MIPC',
        fiscalNumber: 123,
    },
    items: [
        {
            id: 1,
            producto: 'CPU Intel i9',
            price: 499,
            quantity: 3,
        },
        {
            id: 2,
            producto: 'Corsair Keyboard Mechanic',
            price: 150,
            quantity: 2,
        },
        {
            id: 3,
            producto: 'Monitor Asus',
            price: 350,
            quantity: 1,
        },
    ]
};
