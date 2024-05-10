
function verificar(){
    let idade = document.getElementById("idade")
    let data = new Date()
    let anos = data.getFullYear() - Number(idade.value)
    let imagem = document.getElementById("imagem")
    let sexo = document.getElementsByName("radsex")
    let result = document.getElementById("resultado")

  
        
        if(idade.value.length === 0){
            alert("Insira o ano de nascimento.")
        }else{
            if(anos >= 0 && anos <= 14 && sexo[0].checked){
                result.innerHTML = `Sexo: Masculino || Idade: ${anos}`
                imagem.src = "fotojovemmasc.jpg"
            }else if(anos > 14 && anos <= 40 && sexo[0].checked){
                result.innerHTML = `Sexo: Masculino || Idade: ${anos}`
                imagem.src = "fotojovemadultomasc.jpg"
            }else if(sexo[0].checked && anos>40){
                result.innerHTML = `Sexo: Masculino || Idade: ${anos}`
                imagem.src = "fotoidosomasc.jpg"
            }else if(anos >= 0 && anos <= 14 && sexo[1].checked){
                result.innerHTML = `Sexo: Feminino || Idade: ${anos}`
                imagem.src = "fotojovemfem.jpg"
            }else if(anos > 14 && anos <= 40 && sexo[1].checked){
                result.innerHTML = `Sexo: Feminino || Idade: ${anos}`
                imagem.src = "fotojovemadultafem.jpg"
            }else if(sexo[1].checked && anos>40){
                result.innerHTML = `Sexo: Feminino || Idade: ${anos}`
                imagem.src = "fotoidosafem.jpg"
            }
        }
   

}