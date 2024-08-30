import propTypes from 'prop-types'
import { ClientAddressView } from './ClientAddressView';

export const ClientView = ({title,client}) => {
    const {
        name: nameClient,
        lastName, 
        address:{street,number,city,country} 
    }= client;
    //Aca se llama a los atributos para que cuando se utilice en el html se evite usar por ejemplo invoice.client.address.street.
    //Esto se puede descontruir de manera anidada, para realizarlo se asigna en address arriba linea 5.
    //const {street,number,city,country} = address;
    return(
        <>
            <h3> {title} </h3>
            <ul className = "list-group">
                <li className = "list-group-item active">Nombre del cliente: {nameClient} {lastName}</li>
                <ClientAddressView street = {street} number = {number} city = {city} country = {country}/>
            </ul>
        </>
    );
}

ClientView.propType = {
    title: propTypes.string.isRequired,
    client: propTypes.object.isRequired,
};