import { useState } from "react";


export const UserForm = ({handlerAddUser,initialUsersForm}) => {
   
    const [userForm,setUserForm] = useState(initialUsersForm);

    const {username,password,email} = userForm;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setUserForm(
            {
                ...userForm,
                [name]: value,
            }
        )
    }
    const onSubmit= (event) => {
        event.preventDefault();
        if(!username || !password || !email){
            alert('Debe completar el formulario');
            return;
        }
        console.log(userForm);
        handlerAddUser(userForm);
        //guardar el user form en el listado de usuarios
        setUserForm(initialUsersForm);


    }
    return (
        <form onSubmit={onSubmit}>
            <input
                className="form-control my-3 w-75"
                placeholder="Username"
                name="username"
                value= {username}
                onChange ={onInputChange}/>
            <input
                className="form-control my-3 w-75"
                placeholder="Password"
                name="password"
                type="password"
                value = {password}
                onChange ={onInputChange}/>
            <input
                className="form-control my-3 w-75"
                placeholder="Email"
                type="email"
                name="email" 
                value={email}
                onChange ={onInputChange}/>
            <button
                className="btn btn-primary"
                type="submit">
                Crear
            </button>
        </form>
    )
}