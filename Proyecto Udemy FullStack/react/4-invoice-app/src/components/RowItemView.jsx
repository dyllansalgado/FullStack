import propTypes from 'prop-types'

//Se usa para traer el contenido
export const RowItemView = ({producto,price,quantity}) =>{
    return (
        <>
        <tr>
            <td>{producto}</td>
            <td>{price}</td>
            <td>{quantity}</td>
        </tr>
        </>
    );
} 

RowItemView.propType ={
    producto: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    quantity: propTypes.number.isRequired,
};