const filmes = [
    {id: 1, nomeFilme: 'Dejavu'},
    {id: 2, nomeFilme: 'Back to the future'},
    {id: 3, nomeFilme: 'The Matrix'}
]
//array primitiva usa includes
//não funciona no trecho abaixo
console.log(filmes.includes( {id: 1, nomeFilme: 'Dejavu'}))

//array com varias referencias, objeto usa-se find
console.log(filmes.find(function buscar(filmes){
    return filmes.nomeFilme === 'The Matrix'
} ))



