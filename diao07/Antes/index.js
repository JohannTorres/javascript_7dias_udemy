let computerNumber
let userNumbers = []
let attempts = 0
let maxVezes = 10

function newGame() {
    window.location.reload()
}

function init (){
  computerNumber =  Math.floor(Math.random() * 100 + 1)
  console.log(computerNumber)
}

function compareNumbers(){
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers

    if (attempts < maxVezes){

        if (userNumber > computerNumber){
            document.getElementById('textOutput').innerHTML = 'Seu numero está acima'
            document.getElementById('inputInbox').value = ' '
            attempts++
            document.getElementById('attempts').innerHTML = attempts
    
        }else if (userNumber < computerNumber){
            document.getElementById('textOutput').innerHTML = 'Seu numero está abaixo'
            document.getElementById('inputBox').value = ' '
            attempts++
            document.getElementById('attempts').innerHTML = attempts
            
    
         }else{
             document.getElementById('textOutput').innerHTML = 'ACERTOU!'
            attempts++
            document.getElementById('attempts').innerHTML = attempts
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
        }
    } else{
        document.getElementById('textOutput').innerHTML = 'perdeu! O numero do computador era: ' + computerNumber
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')

        }

    
}


