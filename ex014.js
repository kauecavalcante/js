var agora = new Date() //para pegar a hora atual so fazer "new Date()"
var hora = agora.getHours() //em seguida escrever o nome da variavel(agora) com "get.hours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora  <12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else if (hora >18) {
    console.log('Boa noite!')
} 

// se a hora for menor que 12 'bom dia', e se a hora for menor ou igual que 18 'boa tarde', e se a hora for maior que 18 'boa noite'.