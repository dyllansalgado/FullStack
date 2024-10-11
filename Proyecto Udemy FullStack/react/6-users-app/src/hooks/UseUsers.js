import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";

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
    
    const handlerAddUser = (user) => {
        //console.log(user)
        let type;
        if(user.id ===0){
            type = 'addUser';
        } else {
            type = 'updateUser';
        }
        dispatch({
            type,
            payload: user,
        })
    };

    const handlerRemoveUser = (id) => {
        dispatch({
            type: 'removeUser',
            payload: id
        })
    }

    const handlerUserSelectedForm = (user) => {
        //console.log(user)
        setUserSelected({...user});
    }
    
    return {
        users,
        userSelected,
        initialUsersForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm
    };
}