// Funciones - Function Declaration (pieza de código que realiza una acción)

function sumar(){
    console.log(2+2)
}

// Funciones con parámetros

function restar(num1, num2){
    console.log(num1-num2)
}

// Función con parámetro por default

function multiplicar(num1, num2=1){
    console.log(num1*num2)
}

sumar()
restar(20,8)
multiplicar(5)


// Funciones que retornan valores

function dividir(num1, num2){
    return num1/num2
}

const operacionDivision = dividir(30,6)

console.log(operacionDivision)

// Incluso se puede retornar un Array y hacer un Destructuring Array