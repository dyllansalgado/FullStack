//Se instala e importa el paquete propTypes para realizar validaciones.
import PropTypes from 'prop-types';
import { Title } from './components/Title';
import { UserDetails } from './components/UserDetails';
import { Book } from './components/Book';
export function HelloWorldApp({user,id, title, book = 'Las cronicas de Narnia'}){
    //User ahora es un objeto y para poder dar los atributos se establecen de la forma establecida.
    //si de da el objeto tira error.
    return (
        <>
            <Title title = {title}/>
            <UserDetails user = {user} id={id}/>
            <Book book = {book}/>
        </>
    )
}

//Comprobacion de parametros, se debe respetar el tipo y si es requerido es esencial para cuando se crean inputs.
HelloWorldApp.propTypes = {
    //Aca se indica que el titulo es requerido y si o si debe ser de tipo string.
    title: PropTypes.string.isRequired,
    //Aca si coloco string daria un error por consola, puesto que esta como entero y estoy pidiendo un string.
    //En este caso no da error pues id es de tipo number.
    id: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
}


//Se puede escribir como flecha.

// export const HelloWorld = ({user,id}) => {
//     return (
//         <>
//             <h1>Hola Mundo</h1>
//             <div> ¿Como estas {user}? tu id es: {id} </div>

//         </>
//     )

// }