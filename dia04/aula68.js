//zerar array

let num = [5, 6, 7, 8]
console.log(num)

//limpa o array, que deve ser let, pois se declarado como const ela não muda
num = []

//segunda forma de limpar o array, informa que o tamanho é zero
num.length = 0

//terceira forma de limpar o array, a partir do index 0, chamando o array. o seu tamanho
num.splice(0, num.length)

console.log(num)
