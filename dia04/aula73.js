//filtrar e retornar os valores de acordo com uma condicao de uma array
const temperaturaLondres = [18, 13, 8, 2, 0]

//faz uma filtragem dentro do array, se todas as temperaturas estiverem positivas é mostrada, 
const temperaturaPositiva = temperaturaLondres.filter(valor => valor >= 0)

console.log(temperaturaPositiva)
