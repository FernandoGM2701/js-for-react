// Objetos

//const nombre = "Celular"
//const precio = 1200
//const disponible = true

const producto = {
    nombre : "Celular",
    precio : 1200,
    disponible: true
}

console.log(producto)
console.table(producto)
console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponible)

//Destructuring = sacando valores
console.log("Extrayendo valor por Destructuring:")
const { nombre, precio, disponible } = producto
console.log(nombre)
console.log(precio)
console.log(disponible)

//Object Literal Enhacement = variables que están fuera de un objeto colocarlas dentro
const autenticado = true
const usuario = "Fernando"

/*const nuevoObjeto = {
    autenticado : autenticado,
    usuario : usuario
}*/

//como el autenticado es igual a autenticado se puede obviar

const nuevoObjeto = {
    autenticado,
    usuario
}

console.table(nuevoObjeto)