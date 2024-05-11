
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

function adicionar(){
    vetNum.push(Number(num.value))
    var item = document.createElement("option");
    item.text = `${Number(num.value)}`
    caixa.appendChild(item)
    num.value = ""
    num.focus()
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