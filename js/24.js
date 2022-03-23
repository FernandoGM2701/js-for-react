// Eventos del DOM - Clicks

// const hacerCLick = () =>{
//     console.log("Diste click al heading");
// }

// const heading = document.querySelector(" .h11 ");
// heading.addEventListener("click", hacerCLick);

const heading = document.querySelector(".h11");
heading.addEventListener("click", ()=>{
    heading.textContent = "Cambiando el título";
})

const enlaces = document.querySelectorAll(".navegacion a");

enlaces.forEach( elementos => {
   elementos.addEventListener("click", () =>{
       elementos.textContent = ("Cambie el enlace");
   })
});

