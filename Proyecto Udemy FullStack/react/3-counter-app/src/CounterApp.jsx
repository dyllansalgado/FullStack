export const CounterApp = () =>{
    let counter = 0;
    const counterIncrement = () =>{
        counter = counter + 1;
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
