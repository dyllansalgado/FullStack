import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";

const initialUsers = [
    {
        id: 1,
        username: 'pepe',
        password: '12345',
        email: 'pepe@correo.com'
    },

];

const initialUsersForm = {
    id: 0,
    username: '',
    password: '',
    email: '',
}

export const useUsers = () => {
    const [users, dispatch] = useReducer(usersReducer, initialUsers);
    const [userSelected, setUserSelected] = useState(initialUsersForm);
    const [visibleForm,setVisibleForm] = useState(false);


    const handlerAddUser = (user) => {
        //console.log(user)
        let type;
        if (user.id === 0) {
            type = 'addUser';
        } else {
            type = 'updateUser';
        }
        dispatch({
            type,
            payload: user,
        });
        Swal.fire(
            (user.id === 0) ?
                "Usuario Creado" :
                "Usuario actualizado",
            (user.id === 0) ?
                "El usuario se ha creado con exito!" :
                "El usuario se ha actualizado con exito!",
            "success"
        );
        handlerCloseForm();
    };

    const handlerRemoveUser = (id) => {
        Swal.fire({
            title: "Estas seguro que deseas eliminar al usuario?",
            text: "Estas eliminando al usuario!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminalo!",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: 'removeUser',
                    payload: id
                });
                Swal.fire({
                    title: "Usuario Eliminado!",
                    text: "Usuario eliminado con exito.",
                    icon: "success"
                });
            }
        });
    };

    const handlerUserSelectedForm = (user) => {
        //console.log(user)
        setVisibleForm(true);
        setUserSelected({ ...user });
    };
    const handlerOpenForm = () => {
        setVisibleForm(true);
    };
    const handlerCloseForm = () => {
        setVisibleForm(false);
        setUserSelected(initialUsersForm);
    };
    return {
        users,
        userSelected,
        initialUsersForm,
        visibleForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
    };
}