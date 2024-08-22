export function HelloWorld({user,id}){
    return (
        <>
            <h1>Hola Mundo</h1>
            <div> ¿Como estas {user}? tu id es: {id} </div>

        </>
    )
}

//Se puede escribir como flecha.

// export const HelloWorld = ({user,id}) => {
//     return (
//         <>
//             <h1>Hola Mundo</h1>
//             <div> ¿Como estas {user}? tu id es: {id} </div>

//         </>
//     )

// }