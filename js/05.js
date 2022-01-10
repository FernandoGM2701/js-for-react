/* Objetos - Manipulación: vamos a ver como modificar algunas propiedades del objeto
eliminarlas o añadir nuevas*/

const producto = {
    nombre : "Celular",
    precio : 1200,
    disponible : true
}

//Object.freeze(producto) // No puedes modificar elementos ni añadir ni eliminar
//Object.seal(producto) // Te permite modificar propiedades existentes, 
// no puedes añadir ni eliminar

// Reescribir un valor
producto.nombre = "Laptop"

// Si no  existe, lo va añadir
producto.imagen = "imagen.jpg"

// Eliminar elemento
delete producto.precio

console.table(producto)