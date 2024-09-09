import { useEffect, useState } from "react";

export const FormItemsView = ({handler}) =>{
    //Para resumir los const siguientes se puede generar uno mas general.
    const [formItemsState, setFormItemsState] = useState({
        productValue: '',
        priceValue: '',
        quantityValue: ''
    });
    const {productValue,priceValue,quantityValue} = formItemsState;

    const onInputChange = ({target: {name,value}}) =>{
        setFormItemsState({...formItemsState, [name]:value})
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

            handler(formItemsState);
            {/* A continuacion se llaman nuevamente los sets en vacios, para que cuando se envie un producto
            se elimine el texto del input */}
            setFormItemsState({
                productValue: '',
                priceValue: '',
                quantityValue: ''
            });
        }
    };
    return (
        <>
            <form className ="w-50" onSubmit={event => 
                onInvoiceItemsSubmit (event)
            }>
                <input 
                    type = "text"
                    name = "productValue"
                    value = {productValue}
                    placeholder="Producto" 
                    className="form-control m-3"
                    onChange={event => onInputChange(event)
                    }/>
                <input 
                    type = "number"
                    name = "priceValue"
                    value = {priceValue}
                    min = "1"
                    placeholder="Precio"
                    className="form-control m-3"
                    onChange={event => onInputChange(event)
                    }/>
                <input 
                    type = "number"
                    name = "quantityValue"
                    value = {quantityValue}
                    min = "1"
                    placeholder="Cantidad"
                    className="form-control m-3"
                    onChange={event => onInputChange(event)
                    }/>
                <button 
                type="submit" 
                className="btn btn-primary m-3"
                >Crear Item</button>
            </form>
        </>
    );
}