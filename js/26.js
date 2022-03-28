// Eventos del DOM - Submit

const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.querySelector("#nombre");
    const pass = document.querySelector("#password");

    if( nombre.value === "" || pass.value === "" ){
        console.log("TODOS LOS CAMPOS SON OBLIGATORIOS");
    } else {
        console.log("TODO PERFECTO, ENVIANDO...")
    }    
});