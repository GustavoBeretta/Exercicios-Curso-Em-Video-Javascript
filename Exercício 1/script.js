function carregar() {
    let horario = new Date()
    let hora = horario.getHours()
    let minuto = horario.getMinutes()
    document.getElementById('agora_sao').innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    console.log()
    if (hora > 18 || (hora == 18 && minuto > 46 ) || hora < 6 || (hora == 6 && minuto < 40)) {
        var cor = '#1b2846'
        var fonte = 'images/noite.jpg'
    } else if (hora > 12 || (hora == 12 && minuto >= 30)) {
        var cor = '#FFB37B'
        var fonte = 'images/tarde.jpg'
    } else {
        var cor = '#409cd5'
        var fonte = 'images/manha.jpg'
    }
    document.body.style.background = cor
    document.getElementsByTagName('img')[0].src = fonte
}