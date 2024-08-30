import { getInvoice } from "./services/getInvoice";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/invoiceView";
import { ListItemView } from "./components/ListItemView";

export const InvoiceApp = () => {
    //Con el service se llaman los datos, pero cada vez que se renderiza se volvera a llamar.
    const {id,name,client,company,items} = getInvoice();

    return (
        <>
            <div className="container">
                <div className="card my-3">
                    <div className="card-header"> Ejemplo de factura </div>
                    <div className="card-body">
                        <InvoiceView id = {id} name = {name}/>
                        <div className="row my-3">
                            <div className="col">
                                <ClientView title = 'Datos del Cliente' client= {client}/>
                            </div>
                            <div className="col">
                                <CompanyView title = 'Datos de Compañia' company={company}/>
                            </div>
                        </div>
                        <ListItemView title = 'Productos de la Factura' items = {items}/>
                    </div>
                </div>    
            </div>
        </>
    );
}