let somar = document.querySelector("#somar")
let resultado = document.querySelector("p#resultado")
let num1 = document.querySelector("input#num1")
let num2 = document.querySelector("input#num2")

somar.addEventListener("click", calcular)


function calcular(){
    resultado.innerHTML = (`O resultado da soma de ${num1.value} + ${num2.value} é ${Number(num1.value)+Number(num2.value)}`)
}


