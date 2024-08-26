//Como este es un componente no debe llevar el termino APP.

export const UserDetails = ({user,id}) =>{
    return (
        <div> ¿Como estas {user.name} {user.lastname}? tu id es: {id} </div>
    );
}