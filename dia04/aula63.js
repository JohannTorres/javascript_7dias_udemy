const num = [7,8,9]

//adiciona numeros ou string ao fim do array
num.push(10,11,12)

//adiciona numeros ou string no inicio do array
num.unshift(1,2,3)

//adiciona numeros ou string dentro do intervalo do array
//sintaxe:
//informa o index que deve ser adicionado, informa se deseja apagar algum item atraves do index, informa o que adicionar 
num.splice(3, 0, 4, 5, 6)

console.log(num)

