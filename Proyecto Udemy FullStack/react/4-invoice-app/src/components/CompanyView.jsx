import propTypes from 'prop-types'

export const CompanyView = ({title,company}) =>{
    const {name: nameCompany, fiscalNumber} = company;
    return(
        <>
            <h3> {title}</h3>
            <ul className = "list-group">
                <li className = "list-group-item active">Nombre de la Compañia: {nameCompany}</li>
                <li className = "list-group-item">Número Fiscal: {fiscalNumber}</li>
            </ul>
        </>
    );
}

CompanyView.propType = {
    title: propTypes.string.isRequired,
    company: propTypes.object.isRequired,
};