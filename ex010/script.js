
function calcular(){
    let txtvel = document.getElementById("txtvel")
    let vel = Number(txtvel.value)
    let resu = document.getElementById("res")
     if(vel <=60){
        resu.innerHTML = "Dentro do Limite (60km/h)!!!"
     }else{
        resu.innerHTML = `Foi Multado!!! Voce estava ${vel-60}km/h acima do permitido`
     }
}