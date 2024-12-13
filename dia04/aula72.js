//every verifica se um item dentro de um array é menor que zero, sem precisar checar item a item
const temperaturaLondres = [18, 13, 8, 2, 0]

//checar valores dentro do array, se todas as temperaturas estiverem positivas a resposta é true, 
// se alguma temperatura estiver negativa a resposta é false
const temperaturaPositiva = temperaturaLondres.every((function (value){
    return value >= 0
}
))
console.log(temperaturaPositiva)
