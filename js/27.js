// Generando código HTML con JavaScript

const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.querySelector("#nombre");
    const pass = document.querySelector("#password");

    const alertaPrevia = document.querySelector(".alerta");
    if(alertaPrevia){
        alertaPrevia.remove();
    }

    const alerta = document.createElement("DIV");
    alerta.classList.add("alerta");
    

    if( nombre.value === "" || pass.value === "" ){
        alerta.textContent = "Todos los campos son obligatorios";
        alerta.classList.add("error");
    } else {
        alerta.textContent = "Todo bien, enviando datos...";
        alerta.classList.add("exito");
    }    

    formulario.appendChild(alerta);
});