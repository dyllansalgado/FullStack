import { useState } from "react";
import { CartView } from "./components/Cart/CartView";
import { CatalogView } from "./components/Catalog/CatalogView";

const inititalCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

export const CartApp = () => {

    const [cartItems, setCartItems] = useState(inititalCartItems);

    const handlerAddProductCart = (product) => {
        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if (hasItem) {
            // setCartItems([
            //     ...cartItems.filter((i) => i.product.id !== product.id),
            //     {
            //         product,
            //         quantity: hasItem.quantity + 1,

            //     }
            // ],)
            setCartItems(
                cartItems.map((i) => {
                    if (i.product.id === product.id) {
                        i.quantity = i.quantity + 1;
                    }
                    return i;
                })
            )

        } else {
            setCartItems([
                ...cartItems,
                {
                    product,
                    quantity: 1,
                    total: product.price * 1
                }
            ]);
        }
    }
    const handlerDeleteProductCart = (id) => {
        setCartItems([
            ...cartItems.filter((i) => i.product.id !== id)
        ]);
    };
    return (
        <>

            <div className="container my-4">

                <h3>Cart App</h3>
                <CatalogView handler={handlerAddProductCart} />
                {/* Si cartItems es null, undefined, o cualquier valor "falso" (como false, 0, ""), el código después del && no se evaluará. */}
                {cartItems && cartItems.length <= 0 ||
                    <div className="my-4 w-50">
                        <CartView items={cartItems} handlerDelete={handlerDeleteProductCart} />
                    </div>
                }

            </div>
        </>
    )
}