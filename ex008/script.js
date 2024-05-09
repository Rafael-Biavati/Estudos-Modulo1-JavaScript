let a = document.querySelector("div#caixa")

a.addEventListener("mouseenter", entrou);
a.addEventListener("mouseout", saiu);
a.addEventListener("click", clicou);


function entrou(){
    a.style.color = "white"
    a.style.background = "red"
    a.innerHTML = "Entrou!!"
}
function saiu(){
    a.style.background = "#639bf0"
    a.style.color = "black"
    a.innerHTML = "Interaja. . ."
}
function clicou(){
    a.style.background = "black"
    a.style.color = "white"
    a.innerHTML = "CLICOU!!"
}
