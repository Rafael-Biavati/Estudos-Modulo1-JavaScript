function gerartabuada(){
    var num = document.getElementById("txtnum")
    var result = document.getElementById("resultadotabuada")
    var n = Number(num.value)
    
    // Gera a tabuada e adiciona ao div de resultado
    
  if(num.value.length == 0){
    alert("insina um numero valido")
  }else{
    result.innerHTML = ""
    for (var i = 0; i <= 10; i++) {
        var item = document.createElement("option");
        item.value = `result${i}`;
        item.text = `${n} x ${i} = ${n * i}`;
        result.appendChild(item);
    }
  }

  
}