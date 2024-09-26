import { CartView } from "./components/Cart/CartView";
import { CatalogView } from "./components/Catalog/CatalogView";
import { useItemsCart } from "./hooks/useItemsCart";

export const CartApp = () => {

    const { cartItems,handlerAddProductCart,handlerDeleteProductCart} = useItemsCart();


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