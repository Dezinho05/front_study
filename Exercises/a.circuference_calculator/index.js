let raio;
const PI = 3.14;
let calc;

// document.getElementById("butao").onclick = function () {
//     raio = document.getElementById("dados").value;
//     calc = 2 * PI * raio;
//     calc = calc.toFixed(2);
//     document.getElementById("result").textContent = "Resultado da sua circunferência: " + calc;

//DOM
let h1 = document.createElement("h1");
let label = document.createElement("label");
let input = document.createElement("input");
let input2 = document.createElement("input");
let button = document.createElement("button");
let p = document.createElement("p");

h1.innerText = "CALCULADORA DE CIRCUNFERENCIA";
label.innerText = "Insira a circunferência";
input.id = "dados";
input.innerHTML;
button.id = "butao";
button.innerText = "Calcular";
p.id = "result";
p.innerText = "Resultado: ";
input2.innerHTML;

document.body.appendChild(h1);
document.body.appendChild(label);
document.body.appendChild(input);
document.body.appendChild(button);
document.body.appendChild(p);
document.body.appendChild(input2);

function calculo(event) {
  if (event.type === "click" || event.key === "Enter") {
    raio = input.value;
    calc = (2 * PI * raio).toFixed(2);
    p.innerText = "Resultado da Circunferência: " + calc;
  }
}

button.addEventListener("click", calculo);
input.addEventListener("keydown", calculo);

function cabaco(bobo) {
  if (bobo.key === "Enter") {
    window.alert("Campo errado, bobo");
  }
}
input2.addEventListener("keydown", cabaco);
