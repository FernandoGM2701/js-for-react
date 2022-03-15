//Selectores del DOM
const h2 = document.querySelector('.h11');
const p = document.querySelector(".pp");
/*console.log(h2);
console.log(h2.textContent);

console.log(p);
console.log(p.textContent);
console.log(p.id);*/

const enlaces = document.querySelectorAll(".navegacion a");

console.log(enlaces);

console.log(enlaces.length);

for(let i=0; i<enlaces.length; i++){
    console.log(enlaces[i].textContent);
}