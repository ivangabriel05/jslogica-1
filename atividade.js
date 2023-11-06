const prompt = require("prompt-sync")()
var n1, n2, n3, mediaExe, mediaApro

 n1 = parseFloat(prompt(' Digiter a primeira nota: '))
 n2 = parseFloat(prompt(' Digiter a Segunda nota: '))
 n3 = parseFloat(prompt(' Digiter a terceira nota: '))
mediaExe =  parseFloat(prompt('Informe a média de execicios: '))
mediaApro = (n1 + n2 * 2 + n3 * 3 + mediaExe) / 7
    
{ if (mediaApro >= 9.0) {
    console.log('Conceito A')
} else if (mediaApro >= 7.5 && mediaApro < 9.0) {
    console.log('Conceito B')
} else if(mediaApro >=6.0 && mediaApro < 7.5) {
    console.log('Conceito C')
} else if(mediaApro < 6.0) {
    console.log('Conceito D')

} else mediaApro + mediaExe 
   

}




  

