//vetor na tela
var valores = [8, 1, 7, 4, 2, 9]

//console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

for(var pos = 0; pos < valores.length; pos ++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}



//para(for) cada posição em(in) num, vai mostrar o num[pos]
//for(var pos  in num) {
    //cnsole.log( num[pos])
//}

for(var pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}



var oi = valores.indexOf(8) // outro jeito de mostrar a posição do vetor desejado.
console.log(`O valor 8 está na posição ${oi}`)
