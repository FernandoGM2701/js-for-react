// Operaciones en los arreglos

const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js"]


// Añadir elmentos al array
// tecnologias.push("Angular") // Añade al final del array
// tecnologias.unshift("Angular") //Añade al inicio del array

// const nuevaTecnologias = [...tecnologias, "Angular"]
// const nuevaTecnologias2 = ["Angular", ...tecnologias]


// Eliminar elementos del array
// tecnologias.pop() // Elimina del final
// tecnologias.shift() // Elmina del inicio
// tecnologias.splice(2,1) // Elimina de una posición en específica

/* Para eliminar elementos de la manera correcta sin modificar el array original es
utilizando el método "filter" es un array method, "filter" te retorna un array nuevo
*/

// const nuevoArray = tecnologias.filter( function(elementos) {
//     return elementos !== "React"
// })

// Reemplazar elementos en un Array
//tecnologias[2] = "Java"

const nuevoArrayReemplazo = tecnologias.map (function(elementos){
    if(elementos === "HTML") {
        return "Java"
    } else {
        return elementos
    }
})


console.table(tecnologias)
console.table(nuevoArrayReemplazo)
//console.table(nuevoArray)
//console.log(tecnologias)
//console.table(nuevaTecnologias2)