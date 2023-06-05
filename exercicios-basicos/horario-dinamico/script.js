var msg = window.document.getElementById('msg')
var hoje = new Date()
var hora = hoje.getHours()
msg.innerHTML = `<p>Agora são ${hora} horas.</p>`
if (hora > 5 && hora < 12) {
    msg.innerHTML = `Agora são ${hora} horas, Bom dia!`
    window.document.getElementById('corpo').style.backgroundColor = 'rgb(218, 195, 166)'
    window.document.getElementById('imagem').src="manha.png"
} else if (hora >= 12 && hora <= 18) {
    msg.innerHTML = `Agora são ${hora} horas, Boa tarde!`
    window.document.getElementById('corpo').style.backgroundColor = '#b4690d'
    window.document.getElementById('imagem').src="tarde.png"
} else {
    msg.innerHTML = `Agora são ${hora} horas, Boa noite!`
    window.document.getElementById('corpo').style.backgroundColor = '#0F2426'
    window.document.getElementById('imagem').src='noite.png'
}
