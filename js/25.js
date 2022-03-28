// Eventos del DOM - Inputs

const myInput = document.querySelector(".formulario #nombre");
myInput.addEventListener("input", (e) => {
    console.log(e.target.value);
});

const getPass = (e) =>{
    console.log(e.target.value);
}

const changeType = () =>{
    myPass.type = "text"
    setTimeout(() => {
        myPass.type = "password"
    }, 500);
}

const myPass = document.querySelector(".formulario #password");
myPass.addEventListener("input", changeType);

