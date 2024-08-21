
//Lo que hace el asyn y el await permite procesar y pulir la informacion.
//Entonces al llamar a la funcion Async con el await se dice que se obtiene el json y luego se asina al data.
const findAllUsers = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
}
const users = await findAllUsers();

console.log(users);
console.log('Hola');

//Ahora se puede observar que primero imprime el resultado json y luego el hola.
