//declaracao de funcão
function movie(){
    console.log('The Matrix')
}
movie()


//function expresssion
//funcao sem nome e que é associada a uma variavel

const car = function(){
    console.log('Tesla')
}
car()

//funcao associada a uma variavel
const caminhao = car()
console.log(caminhao)
