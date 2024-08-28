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
            <div className="container">
                <div className="card my-3">
                    <div className="card-header"> Ejemplo de factura </div>
                    <div className="card-body">
                        <ul className = "list-group">
                            <li className = "list-group-item" > Id: {id}</li>
                            <li className = "list-group-item" > Nombre: {name}</li>
                        </ul>
                        {/* Se dejan los datos de cliente y compañia como filas por lo que se asigna el row y las col para las columnas */}
                        <div className="row my-3">
                            <div className="col">
                                <h3> Datos del Cliente </h3>
                                <ul className = "list-group">
                                    <li className = "list-group-item active">Nombre del cliente: {nameClient} {lastName}</li>
                                    <li className = "list-group-item">Dirección: {street} {number}, {city} de {country}</li>
                                </ul>
                            </div>
                            <div className="col">
                                <h3> Datos de Compañia</h3>
                                <ul className = "list-group">
                                    <li className = "list-group-item active">Nombre de la Compañia: {nameCompany}</li>
                                    <li className = "list-group-item">Número Fiscal: {fiscalNumber}</li>
                                </ul>
                            </div>
                        </div>
                        <h4> Productos de la Factura</h4>
                        <table className="table table-striped table-hover">
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
                    </div>
                </div>    
            </div>
        </>
    );
}