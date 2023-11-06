const Promp = require("prompt-sync")()
var num1, num2, resultado
var numero = parseInt(prompt('Informe um numero: '))

if (numero % 2 === 1) {
    console.log(`O numero ${numero} é impar`)
} else {
    console.log(`O numero ${numero} é par`)
}
