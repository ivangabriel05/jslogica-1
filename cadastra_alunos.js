const prompt = require("prompt-sync")()

var nome, continuar, confirmarSaida
var nomeAluno = [] // arrays

continuar = true

while (continuar) {
nome = prompt('Informe o nome do aluno: ')
nomeAluno.push(nome) // inserir elementos no array
confirmarSaida = prompt('Deseja continuar? S - sim | N - nao ')
if (confirmarSaida.toUpperCase() === 'N') {
     continuar = false
}
}

for (let index = 0; index < nomeAluno.length; index++) {
console.log(`${index + 1} - ${nomeAluno[index]}`)
    
}