var salario = Number(window.prompt("qual o seu salario"))
window.alert(`seu salario é ${salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)