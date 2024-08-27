import { useState } from "react";

export const CounterApp = ({value}) =>{
    const [counter,setCounter] = useState(value);

    const counterIncrement = () =>{
        setCounter(c=> c+1);
        console.log('click!');
        console.log(counter);
    }
    return <>
        <h2>El valor del contador es {counter}</h2>
        {/* Aca se crea un evento se usa onClick para que cada vez que se aprete haga algo */}
        <button onClick= {()=>{
            counterIncrement()
        }}>Incrementar contador </button>    
    </>
}
