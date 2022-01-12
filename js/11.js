// Iteradores en JS
const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js"]

// forEach, se ejecuta una vez por cada elemento
const arrayForeach = tecnologias.forEach( function(elementos){
    //console.log("Foreach: " +elementos)
    return elementos
} )

// Map, similar a forEach, Map te crea un nuevo arreglo 
const arrayMap = tecnologias.map( function(elementos){
    //console.log("Map: " + elementos)
    return elementos
})

console.log(arrayForeach)

console.log(arrayMap)


/*DATO: FOREACH SOLO TE PERMITE LISTAR Y ACCEDER A CADA ELEMENTO MIENTRAS QUE MAP
TE PERMITE CREAR UN NUEVO ARREGLO*/