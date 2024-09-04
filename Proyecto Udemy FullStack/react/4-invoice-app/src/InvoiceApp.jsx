import { useState } from "react";
import { getInvoice } from "./services/getInvoice";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/invoiceView";
import { ListItemView } from "./components/ListItemView";
import { TotalView } from "./components/TotalView";

export const InvoiceApp = () => {
    //Con el service se llaman los datos, pero cada vez que se renderiza se volvera a llamar.
    const {id,name,client,company,items,total} = getInvoice();

    //Se utilizan para obtener los estados en los inputs.
    const [productValue, setProductValue] = useState("");
    const [priceValue, setPriceValue] = useState(0);
    const [quantityValue, setQuantityValue] = useState(0);

    //Para guardar los estados se debe realizar uno para items igual. Se asigna un nuevo nombre que sera ItemsNew
    const [itemsNew, setItemsNew] = useState(items)

    //Contador dinamico para las id de los productos, en la data tenemos 3 valores por eso se parte de 4
    const [counter,setCounter] = useState(4);

    const onProductChange =(event) =>{
        {
            setProductValue(event.target.value);    
        }
    };

    const onPriceChange = (event) =>{
        {
            setPriceValue(event.target.value);
        }
    };

    const onQuantityChange = (event) =>{
        {
            setQuantityValue(event.target.value);
        }
    };

    const onInvoiceItemsSubmit = (event) =>{
        {
            event.preventDefault();
            {/* Se valida que los inputs no esten vacios */}
            if(productValue.trim().length <= 1) return;
            if(priceValue.length < 1) return;
            {/* Validacion si coloca un valor que no es numero, is NOT A NUMBER NaN */}
            if(isNaN(priceValue)){ 
                alert("El precio no es un número");
                return;}
            if(quantityValue.length < 1) return;
            if(isNaN(quantityValue)){ 
                alert("La cantidad no es un número");
                return;}
            {/* parseInt es solo para verificar que se ingresen int, transforma strings en entero */}
            setItemsNew([...itemsNew,{
                id: counter, 
                producto: productValue, 
                price: parseInt(priceValue,10), 
                quantity: parseInt(quantityValue,10)}]);
            {/* A continuacion se llaman nuevamente los sets en vacios, para que cuando se envie un producto
            se elimine el texto del input */}
            setProductValue("");
            setPriceValue(0);
            setQuantityValue(0);
            setCounter(counter + 1);
        }
    }
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
                        <ListItemView title = 'Productos de la Factura' items = {itemsNew} total ={total}/>
                        <TotalView total = {total}/>
                        <form className ="w-50" onSubmit={event => 
                            onInvoiceItemsSubmit (event)
                        }>
                            <input 
                                type = "text"
                                name = "product"
                                value = {productValue}
                                placeholder="Producto" 
                                className="form-control m-3"
                                onChange={event => onProductChange(event)
                                }/>
                            <input 
                                type = "number"
                                name = "price"
                                value = {priceValue}
                                min = "1"
                                placeholder="Precio"
                                className="form-control m-3"
                                onChange={event => onPriceChange(event)
                                }/>
                            <input 
                                type = "number"
                                name = "quantity"
                                value = {quantityValue}
                                min = "1"
                                placeholder="Cantidad"
                                className="form-control m-3"
                                onChange={event => onQuantityChange(event)
                                }/>
                            <button 
                            type="submit" 
                            className="btn btn-primary m-3"
                            >Crear Item</button>
                        </form>
                    </div>
                </div>    
            </div>
        </>
    );
}