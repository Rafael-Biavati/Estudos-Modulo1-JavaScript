
function analisar(){
    let origem = document.getElementById("txtorigem").value
    let resu = document.getElementById("res")

    if(origem == "brasil" || origem == "BRASIL"){
        resu.innerHTML = "Voce é brasileiro!!!"
    }else{
        resu.innerHTML = "Você é estrangeiro!!!"
    }
}