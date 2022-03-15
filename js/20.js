const autenticado = true;

autenticado ? console.log("Autenticado correctamente") : console.log("No autenticado");

//Doble ternario

const saldo = 2600;
const pagar = 21500;
const tarjeta = false;

saldo > pagar ? console.log("Puedes pagar") : tarjeta ? console.log("Puedes pagar con tarjeta")
: console.log("No puedes pagar");