function Adicionar() {
    if (document.getElementById('numero').value < 1 || document.getElementById('numero').value > 100) {
        window.alert('Digite um número válido')
    } else {
        var opcoes = document.getElementsByTagName('option')
        var igual = false
        for (var i = 0; i < opcoes.length; i++) {
            if (opcoes[i].value == document.getElementById('numero').value) {
                igual = true
                break
            }
        }
        if (igual) {
            window.alert('O número já foi adicionado')
        } else {
            document.getElementsByClassName('finalizar')[1].innerHTML = ''
            var numero = document.createElement('option')
            numero.innerHTML = `Valor ${Number(document.getElementById('numero').value)} adicionado`
            numero.value = document.getElementById('numero').value
            document.getElementsByTagName('select')[0].appendChild(numero)
        }
    }
}

function Finalizar() {
    var opcoes = document.getElementsByTagName('option')
    var numeros = []
    var soma = 0
    for (var i = 0; i < opcoes.length; i++) {
        numeros.push(opcoes[i].value)
        soma += (Number(opcoes[i].value))
    }
    numeros.sort
    var media = soma/numeros.length
    document.getElementsByClassName('finalizar')[1].innerHTML = `Ao todo, temos ${numeros.length} números cadastrados.<br><br>O maior valor informado foi ${numeros[numeros.length-1]}.<br><br>O menos valor informado foi ${numeros[0]}.<br><br>Somando todos os valores temos ${soma}.<br><br>A média dos valores digitados é ${media}.`
}