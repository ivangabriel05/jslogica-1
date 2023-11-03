const prompt = require('prompt-sync')()

var opcao = parseInt(prompt('Informe o código do produto em número:'))

switch (opcao) {
    case 1:
        console.log('O produto é um cardeno')
        break;
    case 2:
        console.log('O produto é um lápis')
        break;
    case 3:
        console.log('O produto é uma borracha')
        break;

    default:
        console.log('Diversos')
        break;
}