import propTypes from 'prop-types'

//Se usa para traer el contenido
export const RowItemView = ({producto,price,quantity, totales}) =>{
    return (
        <>
        <tr>
            <td>{producto}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{totales}</td>
        </tr>
        </>
    );
} 

RowItemView.propType ={
    producto: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    quantity: propTypes.number.isRequired,
};