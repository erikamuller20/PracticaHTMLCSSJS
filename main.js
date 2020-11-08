const nombre = document.getElementById("name");
const apellido = document.getElementById("ape");
const edad = document.getElementById("edad");
const empresa = document.getElementById("empresa");
const formulario = document.getElementById("form");
const parrafo = document.getElementById("warnings");

formulario.addEventListener("submit", e=>{
        e.preventDefault();

        let warnings = "";
        let entrar = false;
        parrafo.innerHTML = "";

        if (nombre.value.length < 3) {
            warnings += `Por favor ingrese su nombre. Nombre no válido<br>`;
            entrar = true;
        }
        if (apellido.value.length < 6) {
            warnings += `Por favor ingrese su apellido. Apellido no válido<br>`;
            entrar = true;
        }     

        if (entrar) {
            parrafo.innerHTML = warnings;
        } else {
            parrafo.innerHTML = "Enviado";
        }
    });

    let ClearInput = document.querySelector('reset');
    let inputs = document.querySelectorAll('input');

    ClearInput.addEventListener('click', () => {
        inputs.forEach(input => input.value = '');
    })
   