
let num = document.getElementById("num")
let caixa = document.getElementById("boxnum")
let vetNum = []
let txttotal = document.getElementById("txttotal")
let txtmaior = document.getElementById("txtmaior")
let txtmenor = document.getElementById("txtmenor")
let txtsoma = document.getElementById("txtsoma")
let txtmedia = document.getElementById("txtmedia")

let soma = 0
let menor = 101
let maior = -1

window.onload = function() {
    document.getElementById("num").focus();
};


function adicionar(){
    if(num.value == ""){
        window.alert("Insira um valor antes de adicionar");
        num.value = ""
        num.focus()
    }else if(Number(num.value) < 1 || Number(num.value) > 100){
        window.alert("Valores entre 1 - 100");
        num.value = ""
        num.focus()
    }else if(vetNum.includes(Number(num.value))){
        window.alert("Valor ja inserido");
        num.value = ""
        num.focus()
    }else{
    vetNum.push(Number(num.value))
    var item = document.createElement("option");
    item.text = `${Number(num.value)}`
    caixa.appendChild(item)
    num.value = ""
    num.focus()
    }
}

function finalizar(){
    
    for( let i = 0; i<vetNum.length ; i++){
        soma += vetNum[i]
        if(vetNum[i] < menor){
            menor = vetNum[i]
        }
        if(vetNum[i] > maior){
            maior = vetNum[i]
        }
    }
    txttotal.innerHTML = `Total numeros Inseridos: ${vetNum.length}`
    txtsoma.innerHTML = `Soma dos numeros inseridos: ${soma}`
    txtmenor.innerHTML = `Menor valor inserido: ${menor}`
    txtmaior.innerHTML = `Maior valor inserido: ${maior}`
    txtmedia.innerHTML = `Media dos numeros inseridos: ${(soma/vetNum.length).toFixed(2)}`

    soma = 0
    num.focus()
}