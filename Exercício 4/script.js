function Calcular() {
    if (document.getElementById('numero').value != '') {
        var numero = Number(document.getElementById('numero').value)
        for (var i = 1; i < 11; i++) {
            document.getElementsByTagName('option')[i-1].innerHTML = `${numero} x ${i} = ${numero * i}`
        }
    } else {
        window.alert('Digite um número')
    }
}