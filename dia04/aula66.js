//arrow function

//é uma função com retorno
//usa-se =>  

const filmes = [
    {id: 1, nomeFilme: 'Dejavu'},
    {id: 2, nomeFilme: 'Back to the future'},
    {id: 3, nomeFilme: 'The Matrix'}
]

console.log(filmes.includes( {id: 1, nomeFilme: 'Dejavu'}))


console.log(filmes.find(filmes => filmes.nomeFilme === 'The Matrix'))





