function calcular(){
  let num = document.getElementById("num")
  let exibe = document.getElementById("resultado")
  exibe.innerHTML = ""

    for(let i = 0; i<=10;i++){
      var item = document.createElement("option");
    item.text = `${Number(num.value)} x ${i} = ${Number(num.value) * i}`
    exibe.appendChild(item)
    }
}
