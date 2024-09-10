import { useState } from "react";
import { CartView } from "./components/Cart/CartView";
import { CatalogView } from "./components/Catalog/CatalogView";

const initialCartItems = [
    {}
]
export const CartApp = () =>{
    const [cartItems, setCartItems] = useState(initialCartItems);

    return (
        <>
        <div className="container">
        <h1>Supermercado</h1>
            <CatalogView/>
            <div className="my-4 w-50">
                <CartView items={cartItems}/>
            </div>
        </div>
        </>
    );
};