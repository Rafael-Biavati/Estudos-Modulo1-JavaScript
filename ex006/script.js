var nome = window.prompt("qual seu nome? ")
var resultado = document.getElementById("resultado")

resultado.innerHTML = (`Seu nome tem ${nome.length} letras, Seu nome maiusculo é ${nome.toUpperCase()}`)