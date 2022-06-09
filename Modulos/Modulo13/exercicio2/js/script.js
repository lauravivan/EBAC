let resultadoObjeto = document.getElementById("resultado");

function calculaMedia() {
  const numero1 = parseFloat(document.getElementById("numero1").value);
  const numero2 = parseFloat(document.getElementById("numero2").value);
  const numero3 = parseFloat(document.getElementById("numero3").value);
  
  if ((isNaN(numero1)) || (isNaN(numero2)) || (isNaN(numero3))) {
    resultadoObjeto.innerText = "Todos os campos devem ser preenchidos!";
    resultadoObjeto.style.color = "#e74c3c";
  } else {
    if ((numero1 >= 0) && (numero2 >=0) && (numero3 >= 0)) {
       const resultado = (numero1 + numero2 + numero3) / 3;
       mostraResultado(resultado);
    } else {
      resultadoObjeto.innerText = "Você está tentando informar números negativos!";
      resultadoObjeto.style.color = "#e74c3c";
    }
  }
}

function mostraResultado(resultado) {
  resultadoObjeto.innerText = `A média desses valores é: ${Math.round(resultado)}`;
  resultadoObjeto.style.color = "#000";

  theme();
}

function theme() {
  document.body.classList.toggle("theme");
}