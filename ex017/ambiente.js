
var num = []

for(let i=0;i<200;i++){
    num[i] = Math.floor(Math.random() * 400)
}

num.sort(function(a, b) {
    return a - b;
  });

console.log(`o vetor tem ${num.length} elementos`)


for(let i in num){
    console.log(`Vetor[${Number(i)}]: ${num[i]}`)
}

console.log(num.indexOf(13))