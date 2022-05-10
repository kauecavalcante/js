function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            } else if (idade >=10 && idade < 21 ) {
                //jovem
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            } else {
                //idoso
                img.setAttribute('src', 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            } if (idade > 100) {
                //caixão
                img.setAttribute('src', 'http://s2.glbimg.com/Pv4NPWNe_kR4cWt6K56orQ-6L9I=/290x386/s2.glbimg.com/p5tfKCkBXc5FWdDR_mj3Gx95Zx8=/s.glbimg.com/jo/g1/f/original/2015/03/15/caixao_interna2.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            } else if (idade >=10 && idade < 21 ) {
                //jovem
                img.setAttribute('src', 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            } else {
                //idoso
                img.setAttribute('src', 'https://images.pexels.com/photos/2050994/pexels-photo-2050994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            } if (idade > 100) {
                //caixão
                img.setAttribute('src', 'http://s2.glbimg.com/Pv4NPWNe_kR4cWt6K56orQ-6L9I=/290x386/s2.glbimg.com/p5tfKCkBXc5FWdDR_mj3Gx95Zx8=/s.glbimg.com/jo/g1/f/original/2015/03/15/caixao_interna2.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}