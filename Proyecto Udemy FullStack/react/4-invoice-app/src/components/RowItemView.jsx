import propTypes from 'prop-types'

//Se usa para traer el contenido
export const RowItemView = ({id, producto,price,quantity, totales, handlerDeleteItem}) =>{
    return (
        <>
        <tr>
            <td>{producto}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{totales}</td>
            <td><button className = "btn btn-danger" onClick={() => handlerDeleteItem(id)}>{'Eliminar'}</button></td>
        </tr>
        </>
    );
} 

RowItemView.propType ={
    producto: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    quantity: propTypes.number.isRequired,
};