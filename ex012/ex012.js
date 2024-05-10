var data = new Date();
var hora = data.getHours()
var minutos = data.getMinutes()
var segundos = data.getSeconds()
var horaCompleta = (`${hora}h${minutos}m${segundos}s`)

if(hora <12){
    console.log(`agora são ${horaCompleta}, então tenha um otimo dia`)
}else if(hora>=12 && hora <18){
    console.log(`agora são ${horaCompleta}, então tenha uma otima tarde`)
}else{
    console.log(`agora são ${horaCompleta}, então tenha uma otima noite`)
}


