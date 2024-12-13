//calculo de juros de veiculo ao ano
//quanto de juros ao ano vai pagar

function financiamentoVeiculo(valorFinanciamento, taxaDeJuros = 2.5 , quantidadeDeAnoFinanciamento = 5){
    return valorFinanciamento * taxaDeJuros / 100 * quantidadeDeAnoFinanciamento
}

console.log(financiamentoVeiculo(20000))



