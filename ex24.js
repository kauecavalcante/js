//funções

//são ações executadas asim que são CHAMADAS ou em decorrência de algum EVENTO.

//Uma função pode receber PARÂMETROS e retornar um RESULTADO.

function parimpar(n) {
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

console.log(parimpar(5))