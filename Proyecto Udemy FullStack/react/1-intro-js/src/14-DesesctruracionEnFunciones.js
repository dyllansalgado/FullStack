const user ={
    username : 'Dyllan',
    email: 'Dyllan@gmail.com',
    age: 22,
    ranking: 9,
};

//Destructurar significa que puedo obtener los atributos de manera individual
// y usarlo en la app.


const detail = (user) => {
    const { username , ranking} = user;
    console.log(`User is ${username}`)
};

detail(user)
