function soma (num1, num2){
    soma = num1 + num2
   return soma
}
console.log(soma(10,20))

function somaMais(){
    let total = 0
    for (let value of arguments)
        total += value
        return total
}
console.log(somaMais(10, 1, 2))