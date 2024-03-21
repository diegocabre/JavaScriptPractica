//formulario

let nombre = document.getElementById("nombre");
let asunto = document.getElementById("asunto");
let mensaje = document.getElementById("mensaje");
let boton = document.getElementById("botton");
let errorNombre = document.querySelector(".errorNombre");
let errorAsunto = document.querySelector(".errorAsunto");
let errorMensaje = document.querySelector(".errorMensaje");
let formulario = document.getElementById("formulario");
let resultado = document.querySelector(".resultado");

// evento submit
formulario.addEventListener("submit", enviarFormulario);

function enviarFormulario(e) {
  e.preventDefault();
  // Expresión regular para validar letras (mayúsculas o minúsculas)
  let letrasRegex = /^[a-zA-Z\s]*$/;

  // Validación de campos vacíos y solo letras
  if (nombre.value !== "" && asunto.value !== "" && mensaje.value !== "") {
    if (letrasRegex.test(nombre.value) && letrasRegex.test(asunto.value)) {
      // Si todos los campos tienen contenido y solo contienen letras
      resultado.innerHTML = "Mensaje enviado con éxito !!!";

      // Limpia el formulario
      formulario.reset();
    } else {
      // Si los campos no contienen solo letras

      errorNombre.innerHTML = "el nombre debe ser solo letras";
      errorAsunto.innerHTML = "el asunto debe ser solo letras";
      errorMensaje.innerHTML = "el mensaje debe ser solo letras";

      // Limpia el formulario
      formulario.reset();
    }
  } else {
    // Si los campos estan vacíos
    errorNombre.innerHTML = "el nombre es requerido";
    errorAsunto.innerHTML = "el asunto es requerido";
    errorMensaje.innerHTML = "el mensaje es requerido";

    // Limpia el formulario
    formulario.reset();
  }
}
