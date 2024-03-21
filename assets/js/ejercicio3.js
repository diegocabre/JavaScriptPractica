let resultado = document.querySelector(".resultado");
let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");
let btnSumar = document.getElementById("btn-sumar");
let btnRestar = document.getElementById("btn-restar");

btnSumar.addEventListener("click", () => {
  resultado.innerHTML = parseInt(valor1.value) + parseInt(valor2.value);
});
btnRestar.addEventListener("click", () => {
  if (parseInt(valor1.value) < parseInt(valor2.value)) {
    return (resultado.innerHTML = 0);
  }
  resultado.innerHTML = parseInt(valor1.value) - parseInt(valor2.value);
});
