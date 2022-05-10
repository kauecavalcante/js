function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //window.alert('[ERRO!] faltam dados!!')
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo invalido! considerando PASSO 1')
            p = 1
        }
        if (i < f) { // se o valor do i for menor que o f 
            //contagem crescente 
            for (var c = i; c <= f; c += p) { //o C vai começar no I e enquanto o contador for menor ou igual ao F o c vai receber ele mesmo mais o PASSO
                res.innerHTML += `${c} \u{1F449}` 
                }
               
        } else {
            // contagem regressiva
            for (var c = i; c >= f;  c -= p) { //
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
}