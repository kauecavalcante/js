//funções

var v = function(x) {
    return x*2
}

console.log(v(7))

//fatorial
function fatorial(n) {
    var fat = 1
    for(var c = n; c>1; c--) { //c começando em n, e enuanto o c for maior do que 1,o c perde 1 
        fat *= c
    }
    return fat
}

console.log(fatorial(5))