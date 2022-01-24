const equipos = ["Deportivo Municipal", "Universitario", "Alianza Lima", "Sporting Cristal"]
const numeros = [10,20,30]

let nuevoArray

//Filter, crea un nuevo array en base a una condición

nuevoArray = equipos.filter( elementos => elementos === "Sporting Cristal")

console.log("Para el array method 'Filter' la respuesta es: " + nuevoArray)

// Para ver su un elemento existe en un array, con el INCLUDES

const arrayIncludes = equipos.includes("Deportivo Municipal")
console.log("Para el array method 'Includes' la respuesta es: " + arrayIncludes)


// Si al menos algún elemento cumple con una condición, el resultado es con true o false
// para eso utilizamos SOME

const arraySome = numeros.some( (elementos) => {
    return elementos > 20
})
console.log("Para el array method 'Some' la respuesta es: " + arraySome)

// Find - devuelve el primer elemento que cumpla la condición:
const arrayFind = numeros.find( (elementos) => {
    return elementos > 20
})
console.log("Para el array method 'Find' la respuesta es: " + arrayFind)

// Every -  retorna true o false si todos cumplen la condicion:
const arrayEvery = numeros.every ( elementos => elementos > 25)
console.log("Para el array method 'Find' la respuesta es: " + arrayEvery)

// Reduce - es muy util en un carrito de compras porque si tienes 20 o 30 articulos 
// te va a realizar la suma de todos  ellos muy fácil
const arrayReduce = numeros.reduce( (total, elementos) => {
    return elementos + total
},0)
console.log("Para el array method 'Reduce' la respuesta es: " + arrayReduce)