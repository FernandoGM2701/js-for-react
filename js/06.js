// Objetos - Destructuring con 2 o más objetos

const producto = {
    nombre : "Celular",
    precio : 1200,
    disponible: true
}

const cliente = {
    nombre : "Fernando",
    dni: 71474431,
    celular: 943812976
}

//se crea un alias como es la misma variable "nombre"

const {nombre, precio, disponible} = producto
const {nombre: nombreCliente, dni, celular} = cliente



console.log(nombre, precio, disponible)
console.log(nombreCliente, dni, celular)