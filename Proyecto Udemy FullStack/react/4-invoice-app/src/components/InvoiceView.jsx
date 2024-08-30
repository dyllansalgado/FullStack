import propTypes from 'prop-types'

export const InvoiceView = ({id,name}) =>{
    return (
        <>
            <ul className = "list-group">
               <li className = "list-group-item" > Id: {id}</li>
               <li className = "list-group-item" > Nombre: {name}</li>
            </ul>
        </>
    );
}

//Se usan los prop.types para comprobacion de los datos.

InvoiceView.propType = {
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired
};