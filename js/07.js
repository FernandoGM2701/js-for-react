// Unir 2 objetos

const producto = {
    nombre:"Celular",
    precio:1200,
    stock:true
}

const cliente = {
    nombre:"Fernando",
    dni: 71474431,
    celular:943812976
}

//const nuevoObjeto = Object.assign(producto, cliente)
const nuevoObjeto2 = {
    producto: {...producto},
    client : {...cliente}
} 
//con los "..."toma una copia del objeto, el famoso Spread Operator
console.log(nuevoObjeto2)
console.log(producto)
console.log(cliente)