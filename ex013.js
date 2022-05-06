var idade = 67
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log('não vota')
} else if (idade >= 16 && idade < 18 || idade > 65) {
        console.log('Voto opcional')
    } else if (idade >= 18) {
        console.log('Voto obrigatorio')
    } 

// se a idade for menor de 16 'nao vota', se não se a idade for menor que 18 sabendo que menor do que 18 maior  ou igual a 16 então o voto é opcional, se a idade for maior que 65 o voto é opcional 
