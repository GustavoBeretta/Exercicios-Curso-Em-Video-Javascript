function Contar() {
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    if (document.getElementById('inicio').value != '' && document.getElementById('fim').value != '' && inicio <= fim && passo > 0) {
        var contagem = ''
        do {
            contagem += inicio + ' 👉 '
            inicio += passo
        } while (inicio <= fim)
        contagem += '🏁'
        document.getElementById('resultado').innerHTML='Contando:<br>'+contagem
    } else {
        window.alert('Preencha todos os campos corretamente.')
    }
}