import { useEffect, useState } from "react";
import { getInvoice, calculateTotal } from "./services/getInvoice";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/invoiceView";
import { ListItemView } from "./components/ListItemView";
import { TotalView } from "./components/TotalView";
import { FormItemsView } from "./components/FormItemsView";

const invoiceInitial = {
    id: 0,
    name:'',
    client: {
        name: '',
        lastName: '',
        address: {
            country: '',
            city: '',
            street: '',
            number: 0
        }
    },     
    company: {
        name: '',
        fiscalNumber: 0,
    },
    items: []
};

export const InvoiceApp = () => {

    const [activeForm, setActiveForm] = useState(false);

    //Se debe crear una nueva constante para que el total se vaya actualizando dinamicamente.

    const [total, setTotal] = useState(0);
    //Contador dinamico para las id de los productos, en la data tenemos 3 valores por eso se parte de 4
    const [counter,setCounter] = useState(4);
    //Para que cuando se renderice no se borren los datos se debe realizar lo siguiente:

    const [invoice,setInvoice] = useState(invoiceInitial);

    //Para guardar los estados se debe realizar uno para items igual. Se asigna un nuevo nombre que sera ItemsNew
    const [items, setItems] = useState([]);
    //Con el service se llaman los datos, pero cada vez que se renderiza se volvera a llamar.
    const {id,name,client,company} = invoice;   

    //Se utilizan para obtener los estados en los inputs.
    //const [productValue, setProductValue] = useState("");
    //const [priceValue, setPriceValue] = useState(0);
    //const [quantityValue, setQuantityValue] = useState(0);

    useEffect(() =>{
        const data = getInvoice();
        setInvoice(data);
        setItems(data.items);
    }, []);

    useEffect(() => {
        console.log('El precio cambio');
        setTotal(calculateTotal(items));
    }, [items]);

    //Estos igual se pueden resumir, de la manera anterior.
    //const onProductChange =(event) =>{
    //    {
    //        setProductValue(event.target.value);    
    //    }
    //};

    //const onPriceChange = (event) =>{
    //    {
    //        setPriceValue(event.target.value);
    //    }
    //};

    //const onQuantityChange = (event) =>{
    //    {
    //        setQuantityValue(event.target.value);
    //    }
    //};

    const onActiveForm = () => {
        setActiveForm(!activeForm);
    };
    const handlerAddItems = ({productValue,priceValue,quantityValue}) =>{
        {
            {/* parseInt es solo para verificar que se ingresen int, transforma strings en entero */}
            setItems([...items,{
                id: counter, 
                producto: productValue, 
                price: parseInt(priceValue,10), 
                quantity: parseInt(quantityValue,10)}]);
            setCounter(counter + 1);
        };
    };

    const handlerDeleteItem = (id) =>{
        setItems(items.filter(item => item.id !== id ));
    };

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
                        <ListItemView title = 'Productos de la Factura' items = {items} total ={total} handlerDeleteItem = { id => handlerDeleteItem(id)}/>
                        <TotalView total = {total}/>
                        <button className="btn btn-secondary"
                        onClick={onActiveForm}>{
                            !activeForm ? 'Agregar Item' : 'Cerrar Form' }</button>  
                        { !activeForm ? '' :
                         <FormItemsView handler={ (newItem) => handlerAddItems(newItem)}/>}             
                    </div>
                </div>    
            </div>
        </>
    );
}