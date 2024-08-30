import { RowItemView } from "./RowItemView";
import propTypes from 'prop-types'

export const ListItemView = ({title,items}) =>{
    return(
        <>
        <h4> {title}</h4>
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
                        <RowItemView key={ id } producto = {producto} price = {price} quantity={quantity} />
                    );
                })}
            </tbody>
        </table>
        </>
    );
}

ListItemView.propType = {
    title: propTypes.string.isRequired,
    items: propTypes.array.isRequired,
};