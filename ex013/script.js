let mensagem = document.querySelector("div#mensagem")
let imagem = document.getElementById("imagem")
let data = new Date()
let hora = data.getHours()
let minuto = data.getMinutes()



function carregar(){
    
    if(hora >= 0 && hora <12){
        imagem.src = "imgManha.jpg"
        document.body.style.background = "yellow"
        mensagem.innerHTML = `Horario: ${hora}:${minuto}. Tenha um bom dia`
    }else if(hora >= 12 && hora <18){
        imagem.src = "imgTarde.jpg"
        document.body.style.background = "brown"
        mensagem.innerHTML = `Horario: ${hora}:${minuto}. Tenha uma boa tarde`
    }else{
        imagem.src = "imgNoite.jpg"
        document.body.style.background = "black"
        mensagem.innerHTML = `Horario: ${hora}:${minuto}. Tenha uma boa noite`
    }
}