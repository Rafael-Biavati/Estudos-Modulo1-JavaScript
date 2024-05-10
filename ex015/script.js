

function contar(){

  let inicio = document.querySelector("#inicio")
  let fim = document.querySelector("#fim")
  let passo = document.querySelector("#passos")
  let resultado = document.querySelector("#resultado")
  resultado.innerHTML = ""
  
  if(inicio.value.length === 0 || fim.value.length === 0 ||passo.value.length === 0){
    alert("preencha todos os campos")
  }else if(Number(fim.value) <= Number(inicio.value)){
    alert("Insira um valor final maior que inicial")
  }else{

    for(let i = Number(inicio.value) ; i<=Number(fim.value) ; i+= Number(passo.value)){
      resultado.innerHTML += " > " + i ;
    }

  }
}