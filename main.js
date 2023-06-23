/////////////////////      1   ///////////////////////////
const btnHelloWorldEx1 = document.getElementById("helloWorld");
/////////////////////      2   ///////////////////////////
const inputDoNumberAEx2 = document.getElementById("numberAEx2");
const inputDoNumberBEx2 = document.getElementById("numberBEx2");
const btnDeSomarEx2 = document.getElementById("btnDeSomarEx2");
const btnClearEx2 = document.getElementById("btnClearEx2");
const respostaEx2 = document.getElementById("respostaEx2");
/////////////////////      3   ///////////////////////////
const inputTipoDeValorEx3 = document.getElementById("tipoDeValorEx3");
const btnVereficadorEx3 = document.getElementById("btnVereficadorEx3");
const btnClearEx3 = document.getElementById("btnClearEx3");
const respostaEx3 = document.getElementById("respostaEx3");
/////////////////////      4   ///////////////////////////
/////////////////////      5   ///////////////////////////
const inputTipoDeValorEx5 = document.getElementById("tipoDeValorEx5");
const btnVereficadorEx5 = document.getElementById("btnVereficadorEx5");
const btnClearEx5 = document.getElementById("btnClearEx5");
const respostaEx5 = document.getElementById("respostaEx5");
/////////////////////      6   ///////////////////////////
const inputDoNumberAEx6 = document.getElementById("numberAEx6");
const inputDoNumberBEx6 = document.getElementById("numberBEx6");
const btnDeSubtrairEx6 = document.getElementById("btnDeSubtrairEx6");
const btnClearEx6 = document.getElementById("btnClearEx6");
const respostaEx6 = document.getElementById("respostaEx6");
/////////////////////      7   ///////////////////////////
const inputDoNumberAEx7 = document.getElementById("numberAEx7");
const inputDoNumberBEx7 = document.getElementById("numberBEx7");
const btnDeMultiplicarEx7 = document.getElementById("btnDeMultiplicarEx7");
const btnClearEx7 = document.getElementById("btnClearEx7");
const respostaEx7 = document.getElementById("respostaEx7");
/////////////////////      8   ///////////////////////////
const inputDoNumberAEx8 = document.getElementById("numberAEx8");
const inputDoNumberBEx8 = document.getElementById("numberBEx8");
const btnDeDividirEx8 = document.getElementById("btnDeDividirEx8");
const btnClearEx8 = document.getElementById("btnClearEx8");
const respostaEx8 = document.getElementById("respostaEx8");
/////////////////////      9   ///////////////////////////
const inputTipoDeValorEx9 = document.getElementById("tipoDeValorEx9");
const btnVereficadorEx9 = document.getElementById("btnVereficadorEx9");
const btnClearEx9 = document.getElementById("btnClearEx9");
const respostaEx9 = document.getElementById("respostaEx9");
/////////////////////      10   ///////////////////////////
const inputTipoDeValorEx10 = document.getElementById("tipoDeValorEx10");
const btnVereficadorEx10 = document.getElementById("btnVereficadorEx10");
const btnClearEx10 = document.getElementById("btnClearEx10");
const respostaEx10 = document.getElementById("respostaEx10");
//////////////// EXERCICIO 1 ////////////////////////
btnHelloWorldEx1.addEventListener("click", function () {
  window.alert("Hello world!");
});

//////////////// EXERCICIO 2 ////////////////////////
btnDeSomarEx2.addEventListener("click", function () {
  respostaEx2.innerText = `Resposta : ${inputDoNumberAEx2.value} + ${
    inputDoNumberBEx2.value
  } = ${
    parseFloat(inputDoNumberBEx2.value) + parseFloat(inputDoNumberAEx2.value)
  } `;
});
btnClearEx2.addEventListener("click", function () {
  inputDoNumberAEx2.value = "";
  inputDoNumberBEx2.value = "";
  respostaEx2.innerText = `Resposta : `;
});
//////////////// EXERCICIO 3 ////////////////////////
btnVereficadorEx3.addEventListener("click", function () {
  if (inputTipoDeValorEx3.value != "") {
    const ajusteEx3 = inputTipoDeValorEx3.value.replace(/\d/g, "");
    if (ajusteEx3 === "") {
      respostaEx3.innerHTML = `Resposta : <strong>É um Numero.</strong> `;
    } else
      respostaEx3.innerHTML = `Resposta : <strong>Não e um Numero.</strong> `;
  } else respostaEx3.innerHTML = `<strong>Você não digitou nada</strong> `;
});
btnClearEx3.addEventListener("click", function () {
  inputTipoDeValorEx3.value = "";
  respostaEx3.innerText = ` Resposta :`;
});
//////////////// EXERCICIO 4 ////////////////////////

//////////////// EXERCICIO 5 ////////////////////////
inputTipoDeValorEx5.addEventListener("input", function () {
  this.value = this.value.toLowerCase();
});
btnVereficadorEx5.addEventListener("click", function () {
  if (inputTipoDeValorEx5.value != "") {
    if (
      inputTipoDeValorEx5.value === "false" ||
      inputTipoDeValorEx5.value === "true"
    ) {
      respostaEx5.innerHTML = `Resposta : <strong>É um Booleano.</strong> `;
    } else
      respostaEx5.innerHTML = `Resposta : <strong>Não e um Booleano.</strong> `;
  } else respostaEx5.innerHTML = `<strong>Você não digitou nada</strong> `;
});
btnClearEx5.addEventListener("click", function () {
  inputTipoDeValorEx5.value = "";
  respostaEx5.innerText = ` Resposta :`;
});
//////////////// EXERCICIO 6 ////////////////////////
btnDeSubtrairEx6.addEventListener("click", function () {
  respostaEx6.innerText = `Resposta : ${inputDoNumberAEx6.value} - ${
    inputDoNumberBEx6.value
  } =   ${
    parseFloat(inputDoNumberAEx6.value) - parseFloat(inputDoNumberBEx6.value)
  } `;
});
btnClearEx6.addEventListener("click", function () {
  inputDoNumberAEx6.value = "";
  inputDoNumberBEx6.value = "";
  respostaEx6.innerText = `Resposta : `;
});

//////////////// EXERCICIO 7 ////////////////////////
btnDeMultiplicarEx7.addEventListener("click", function () {
  respostaEx7.innerText = `Resposta : ${inputDoNumberAEx7.value} x ${
    inputDoNumberBEx7.value
  } =   ${
    parseFloat(inputDoNumberAEx7.value) * parseFloat(inputDoNumberBEx7.value)
  } `;
});
btnClearEx7.addEventListener("click", function () {
  inputDoNumberAEx7.value = "";
  inputDoNumberBEx7.value = "";
  respostaEx7.innerText = `Resposta : `;
});

//////////////// EXERCICIO 8 ////////////////////////
btnDeDividirEx8.addEventListener("click", function () {
  respostaEx8.innerText = `Resposta : ${inputDoNumberAEx8.value} / ${
    inputDoNumberBEx8.value
  } =   ${
    parseFloat(inputDoNumberAEx8.value) / parseFloat(inputDoNumberBEx8.value)
  } `;
});
btnClearEx8.addEventListener("click", function () {
  inputDoNumberAEx8.value = "";
  inputDoNumberBEx8.value = "";
  respostaEx8.innerText = `Resposta : `;
});
//////////////// EXERCICIO 9 ////////////////////////
btnVereficadorEx9.addEventListener("click", function () {
  if (inputTipoDeValorEx9.value != "") {
    if (parseFloat(inputTipoDeValorEx9.value) % 2 === 0) {
      respostaEx9.innerHTML = `Resposta : <strong>É um número Par.</strong> `;
    } else
      respostaEx9.innerHTML = `Resposta : <strong>Não é um número par.</strong> `;
  } else respostaEx9.innerHTML = `<strong>Você não digitou nada</strong> `;
});
btnClearEx9.addEventListener("click", function () {
  inputTipoDeValorEx9.value = "";
  respostaEx9.innerText = ` Resposta :`;
});
//////////////// EXERCICIO 10 ////////////////////////
btnVereficadorEx10.addEventListener("click", function () {
  if (inputTipoDeValorEx10.value != "") {
    if (parseFloat(inputTipoDeValorEx10.value) % 2 != 0) {
      respostaEx10.innerHTML = `Resposta : <strong>É um número ímpar.</strong> `;
    } else
      respostaEx10.innerHTML = `Resposta : <strong>Não é um número ímpar.</strong> `;
  } else respostaEx10.innerHTML = `<strong>Você não digitou nada</strong> `;
});
btnClearEx10.addEventListener("click", function () {
  inputTipoDeValorEx10.value = "";
  respostaEx10.innerText = ` Resposta :`;
});
