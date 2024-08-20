const users = ['Pepe','Ana','Maria','Juan','Carlos'];

const [Pepe, Ana , Maria, ...rest] = users;
//Imprime en array al resto
//Si coloco el spread en el console.log se muestran en un print.
console.log(Pepe,Ana,Maria,rest)