import { useEffect, useState } from "react";


export const UserForm = ({ userSelected, handlerAddUser, initialUsersForm }) => {

    const [userForm, setUserForm] = useState(initialUsersForm);

    const { id, username, password, email } = userForm;

    useEffect(() => {
        setUserForm({
            ...userSelected,
            //password:''
        });
    }, [userSelected]);
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setUserForm(
            {
                ...userForm,
                [name]: value,
            }
        )
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if (!username || (!password && id === 0) || !email) {
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
                value={username}
                onChange={onInputChange} />
            { id > 0? '' :<input
                className="form-control my-3 w-75"
                placeholder="Password"
                name="password"
                type="password"
                value={password}
                onChange={onInputChange} />}
            <input
                className="form-control my-3 w-75"
                placeholder="Email"
                type="email"
                name="email"
                value={email}
                onChange={onInputChange} />
            <input type="hidden"
                name="id"
                value={id} />
            <button
                className="btn btn-primary"
                type="submit">
                { id > 0? 'Editar' : 'Crear'}
            </button>
        </form>
    )
}