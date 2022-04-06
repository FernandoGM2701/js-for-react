// Template Strings

const producto = "Table de 12 pulgadas";
const precio = 400;
const marca = "Orange";

function texto(){
  return "esto de acá";
}

console.log(`${producto} al precio de: $${precio}, Marca: ${marca} ${texto()}`);