import { invoiceByID } from "./data/invoices";

const promise = new Promise((resolve,reject) => {
    setTimeout(() =>{
        const result = invoiceByID(3);
        if(result){
            resolve(result);
        } else {
            reject('El valor del ID no se encuentra.')
        }
    },2500)
});
//catch Permite atrapar un error, then si resulta bien la tarea y el finally tarea que viene despues del finally y el pasar.
promise.then((json)=> {
    console.log(json);
    console.log('Se realiza una tarea');
}).catch((error) =>{
    console.error(error);
});


