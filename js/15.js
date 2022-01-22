const nombres = [ "Fernando", "Alberto", "Cristhian", "Jesus"]

/*const nuevoNombre = nombres.map( function(elementos) {
    if(elementos === "Fernando"){
        return "Fer"
    } else {
        return elementos
    }
})*/

const nuevosNombre = nombres.map((elementos) => {
    if(elementos === "Fernando"){
        return "FerMap"
    } else {
        return elementos
    }
})

const soloCristhian = nombres.filter( (elementos) => {
    return elementos === "Cristhian"
})


console.log(nombres)
console.log(soloCristhian)

