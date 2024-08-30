import propTypes from 'prop-types'

export const ClientAddressView = ({street,number,city,country}) =>{
    return (
        <>
            <li className = "list-group-item">Dirección: {street} {number}, {city} de {country}</li>
        </>
    );
};

ClientAddressView.propType ={
    street: propTypes.string.isRequired,
    number: propTypes.number.isRequired,
    city: propTypes.string.isRequired,
    country: propTypes.string.isRequired,
};

