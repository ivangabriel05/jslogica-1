const prompt = require('prompt-sync')()

var a, b, c

a = parseInt(prompt('Valor lado 1:'))
b = parseInt(prompt('Valor lado 2:'))
c = parseInt(prompt('Valor lado 3:'))

if (a !== 0 && b !== 0 && c !== 0) {
    if (a !== b && a !== c && b !== c) { // todos diferentes
        console.log('O triangulo é isoceles')
    } else if (a === b && c !== b && c !== a) { // dois lados iguais
        console.log('O triangulo é isoceles')
    } else if (a !== b && c === b && c !== a) { // dois lados iguais
        console.log('O triangulo é isoceles')
    } else if (a === c && a !== b && b !== c) { // dois lados iguais
        console.log('O triangulo é isoceles')
    }
    else { // todos iguais
        console.log('O triangulo é equilatero')
    }
} else {
    console.log('Os valores não formam um triangulo')
}

