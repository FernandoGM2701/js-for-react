const saldo = 600;
const pagar = 1500;
const tarjeta = true;


/*
    || --> Al menos uno debe cumplirse
    && --> Todas deben cumplirse
*/

if ( saldo > pagar || tarjeta ) {
    console.log("Puedes pagar con tu saldo");
}
else{
    console.log("No puedes pagar");
}