const prompt = require("prompt-sync")()
var num1, num2, resultado, opcao

continua = true

while (continua){
   num1 = parseFloat(prompt('Informe o primeiro numero:')) 
   num2 = parseFloat(prompt('Informe o segundo valor:'))

 
     if (num2 === 0) {
         console.log('Numero invalido')
          num2 = parseFloat(prompt( 'Informe o segundo   numero:' ))
    }  

    resultado = num1 / num2
    console.log(`O resultado é ${resultado}`)
    opcao = prompt('Deseja continuar com a opreção? S - sim | N - Não')
    
    if (opcao.toUpperCase() === 'N') {
        continua = false
    } 
}