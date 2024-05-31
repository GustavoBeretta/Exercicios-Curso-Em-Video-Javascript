function Verificar() {

    var sexo
    var idade = 2024 - document.getElementById('ano').value
    for (var i = 0; i < 2; i++) {
        if (document.getElementsByName('sexo')[i].checked) {
            if (document.getElementsByName('sexo')[i].value == 'Masculino') {
                sexo = 'Homem'
            } else {
                sexo = 'Mulher'
            }
        }
    }

    if (document.getElementById('ano').value &&  document.getElementById('ano').value < 2025 && sexo != undefined ) {
        if (sexo == 'Mulher') {
            if (idade < 18) {
                document.getElementsByTagName('img')[0].src = 'images/menina.jpg'
            } else if (idade < 60) {
                document.getElementsByTagName('img')[0].src = 'images/adulta.jpeg'
            } else {
                document.getElementsByTagName('img')[0].src = 'images/idosa.jpg'
            }
        } else {
            if (idade < 18) {
                document.getElementsByTagName('img')[0].src = 'images/menino.jpg'
            } else if (idade < 60) {
                document.getElementsByTagName('img')[0].src = 'images/adulto.jpg'
            } else {
                document.getElementsByTagName('img')[0].src = 'images/idoso.jpeg'
            }
        }
        document.getElementById('resultado').innerHTML=`Detectamos: ${sexo} com ${idade} anos`
    } else {
        window.alert('Preencha todos os campos corretamente.')
    }
}