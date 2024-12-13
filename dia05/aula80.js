//javascript move as funcoes para serem executadas primeiro
//hoisting

//as funcoes são prioridades de execução
//as funções expression ao ser associada a uma variavel são tratadas como uma variavel

//o bloco abaixo funciona por mais que o chamamento da funcao esteja antes da funcao
movie()
function movie(){
    console.log('The Matrix')
}


//o trecho abaixo não funciona pois está sendo tratado como uma variavel
car()
const car = function(){
    console.log('Tesla')
}

const caminhao = car()
console.log(caminhao)

