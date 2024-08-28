import { getInvoice } from "../services/getInvoice";

export const InvoiceApp = () => {
    //Con el service se llaman los datos, pero cada vez que se renderiza se volvera a llamar.
    const {id,name,client,company,items} = getInvoice();

    const {name: nameClient,lastName,address}= client;
    //Aca se llama a los atributos para que cuando se utilice en el html se evite usar por ejemplo invoice.client.address.street.
    const {street,number,city,country} = address;

    const {name: nameCompany, fiscalNumber} = company;

    return (
        <>
            {/* Este es un comentario en JSX */}
            <h1> Ejemplo de factura </h1>
            <ul>
                <li> Id: {id}</li>
                <li> Nombre: {name}</li>
            </ul>
            <h3> Datos del Cliente </h3>
            <ul>
                <li>Nombre del cliente: {nameClient} {lastName}</li>
                <li>Dirección: {street} {number}, {city} de {country}</li>
            </ul>
            <h3> Datos de Compañia</h3>
            <ul>
                <li>Nombre de la Compañia: {nameCompany}</li>
                <li>Número Fiscal: {fiscalNumber}</li>
            </ul>
            <h4> Productos de la Factura</h4>
            <table>
                {/* thead delimita los encabezados de la tabla */}
                <thead>
                    <tr>
                        {/* th define las columnas */}
                        <th>Nombre del Producto</th>
                        <th>Precio del Producto</th>
                        <th>Cantidad de Productos disponibles</th>
                    </tr>
                </thead>
                {/* tbody delimita los datos que no son el encabezado */}
                <tbody>
                    {/* Se crea un map con las variables deben ir dentro de({}). Tambien se puede usar llamando
                    una variable x por ejemplo items.map (item => y el return pero dentro de las celdas se deben llamar como
                    item.producto, item.price.....) */}
                    {items.map(({id,producto,price,quantity}) =>{
                        return (
                            <tr key={ id }>
                                <td>{producto}</td>
                                <td>{price}</td>
                                <td>{quantity}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
                
        </>
    );
}