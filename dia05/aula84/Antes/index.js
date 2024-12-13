// function update(){
//     let bill = Number(document.getElementById('yourBill').value)
//     let tipPercent = document.getElementById('tipInput').value
//     let split = document.getElementById('splitInput').value
//     //console.log({bill, tipPercent, split})

//     let tipValue = bill * (tipPercent / 100)
//     let billTotal = bill + tipValue
//     let billEach = billTotal / split

//     document.getElementById('tipPercent').innerHTML = tipPercent + ' %'
//     document.getElementById('tipValue').innerHTML = '$ ' + tipValue
//     document.getElementById('totalWithTip').innerHTML = '$ ' + billTotal
//     document.getElementById('splitValue').innerHTML = split
//     document.getElementById('billEach').innerHTML = billTotal / split
// }

function update2(){
    //conta
    let conta = Number(document.getElementById('inputConta').value)
    //percentual de gorjeta
    let percentualGorjeta = document.getElementById('inputGorjeta').value
    //quantidade de pessoas para dividir
    let quantidadePessoas = document.getElementById('inputQuantidadePessoas').value

    //calculo da gorjeta, conta * percentual da gorjeta
    let calculoPercentualDaGorjeta = conta * (percentualGorjeta / 100)

    //calculo da conta + gorjeta
    let contaTotal = conta + calculoPercentualDaGorjeta

    //
    let billEach = contaTotal / quantidadePessoas

    document.getElementById('tipPercent').innerHTML = percentualGorjeta + ' %'
    document.getElementById('tipValue').innerHTML = 'R$ ' + calculoPercentualDaGorjeta
    document.getElementById('totalWithTip').innerHTML = 'R$ ' + contaTotal
    document.getElementById('splitValue').innerHTML = quantidadePessoas
    document.getElementById('billEach').innerHTML = 'R$ ' + contaTotal / quantidadePessoas
}


