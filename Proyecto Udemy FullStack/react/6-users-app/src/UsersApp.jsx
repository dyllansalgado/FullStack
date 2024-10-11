import { UserForm } from "./components/UserForm"
import { UsersList } from "./components/UsersList"
import { useUsers } from "./hooks/UseUsers";

export const UsersApp = () => {

    const {
        users,
        userSelected,
        initialUsersForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm
    } = useUsers();

    return (
        <div className="container my-4">

            <h2>Users App</h2>
            <div className="row">
                <div className="col">
                    <UserForm
                        initialUsersForm={initialUsersForm}
                        userSelected = {userSelected}
                        handlerAddUser={handlerAddUser} />
                </div>
                <div className="col">
                    {users.length === 0
                        ? <div className="alert alert-warning"> No hay usuarios registrados en el sistema!</div>
                        : <UsersList users={users}
                            handlerUserSelectedForm={handlerUserSelectedForm}
                            handlerRemoveUser={handlerRemoveUser} />}
                </div>
            </div>
        </div>
    )
}