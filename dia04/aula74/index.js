

function calcular() {

    let num1 = Number(document.getElementById('primeiroNumero').value)
    let num2 = Number(document.getElementById('segundoNumero').value)
    let total = 0

    if (document.getElementById('adicao').checked)
        total = num1 + num2
    else if (document.getElementById('subtracao').checked)
        total = num1 - num2
    else if (document.getElementById('multiplicacao').checked)
        total = num1 * num2
    else if(document.getElementById('divisao').checked)
        total = num1 / num2
    document.getElementById('areaResultado').innerHTML = 'Resultado: ' + String(total)
}