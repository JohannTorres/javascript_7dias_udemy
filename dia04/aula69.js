//concatenar array(juntar)

//dividir array (cortar)

let num = [5, 6, 7, 8]

let letras = ['a', 'b', 'c']

juntar = num.concat(letras)

//a partir do index 3 e antes do index 5(pega da posicao inicial até antes da posicao final)
pegarParteArray = juntar.slice(3,5)

console.log(num) //array de numeros
console.log(letras) //array de letras
console.log(juntar) //array de numeros e letras
console.log(pegarParteArray) //parte do array, do index 3 até antes do index 5

