import { invoice } from "../data/invoice";
//Se traen las facturas creadas.
export const getInvoice = () =>{
    let total = 0;
    invoice.items.forEach(item => {
        total = total + item.price * item.quantity;

    });

    return {...invoice, total: total};
}