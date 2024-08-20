const user ={
    username : 'Dyllan',
    email: 'Dyllan@gmail.com',
    age: 22,
    ranking: 9,
}

//Destructurar significa que puedo obtener los atributos de manera individual
// y usarlo en la app.

const {
    username,
    ranking,
    age
} = user;

console.log(`El nombre es: ${username}`);
console.log(ranking);

//Sin desconstruccion seria:
//const username = user.username;
//const ranking = user.ranking;
