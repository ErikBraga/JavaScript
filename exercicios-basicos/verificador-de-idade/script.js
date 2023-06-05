function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'imagem')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade < 10) {
                // criança
                img.setAttribute('src', 'imagens/bebe-m.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if (idade < 60) {
                // adulto
                img.setAttribute('src', 'imagens/adulto-m.png')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        } else {
            genero = 'Mulher'
            if (idade < 10) {
                // criança
                img.setAttribute('src', 'imagens/bebe-f.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'imagens/jovem-f.png')
            } else if (idade < 60) {
                // adulto
                img.setAttribute('src', 'imagens/adulto-f.png')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}