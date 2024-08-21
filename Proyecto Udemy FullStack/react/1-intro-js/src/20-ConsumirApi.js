const httpClient = fetch('https://jsonplaceholder.typicode.com/users');

// httpClient.then(response =>{
//     //console.log(response)
//     response.json().then(data =>{
//         console.log(data);
//     });
// })

// httpClient.then(response => {
//     return response.json();
// }).then(data => {
//     console.log(data);
// });

//En manera resumida lo anterior queda:
//Esto es asincrono
httpClient
    .then(response => response.json())
    .then(data => console.log(data));

console.log("Soy un mensaje sincrono por lo que salgo antes del json");