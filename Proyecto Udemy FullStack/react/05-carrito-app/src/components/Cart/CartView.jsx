export const CartView = ({ items }) => {
    return (
        <>
            <h2>Carro de compras</h2>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map( item =>(

                    <tr>
                        <td>{item.product.name}</td>
                        <td>{item.product.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.product.price * item.quantity}</td>
                        <td>eliminar</td>
                    </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        <td colSpan="2" className="text-start fw-bold">12345</td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}
