let nombre = document.getElementById("nombre");
let asunto = document.getElementById("asunto");
let mensaje = document.getElementById("mensaje");
let boton = document.getElementById("botton");
let errorNombre = document.querySelector(".errorNombre");
let errorAsunto = document.querySelector(".errorAsunto");
let errorMensaje = document.querySelector(".errorMensaje");
let formulario = document.getElementById("formulario");
let resultado = document.querySelector(".resultado");

formulario.addEventListener("submit", enviarFormulario);

function enviarFormulario(e) {
  e.preventDefault();

  let letrasRegex = /^[a-zA-Z\s]*$/;


  if (
    nombre.value !== "" &&
    asunto.value !== "" &&
    mensaje.value !== "" &&
    letrasRegex.test(nombre.value) &&
    letrasRegex.test(asunto.value)
  ) {

    resultado.innerHTML = "Mensaje enviado con éxito !!!";


    nombre.value = "";
    asunto.value = "";
    mensaje.value = "";

    // Limpia los errores
    errorNombre.innerHTML = "";
    errorAsunto.innerHTML = "";
    errorMensaje.innerHTML = "";
  } else {
    // Si los campos estan vacíos
    errorNombre.innerHTML = "el nombre es requerido y con solo letras";
    errorAsunto.innerHTML = "el asunto es requerido y con solo letras";
    errorMensaje.innerHTML = "el mensaje es requerido";
  }
}
