//V1
const computerChoiceDisplay = document.getElementById('computer-choice')
const useChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

possibleChoices.forEach((possibleChoice =>  possibleChoice.addEventListener('click',(e) => {
    let userChoice = e.target.id
    useChoiceDisplay.innerHTML = userChoice
    generateComputerChoice(userChoice,getResult)
    
    
})))

function generateComputerChoice(userChoice,callback){
    const randomNumber = Math.floor(Math.random () * 3)
    if(randomNumber===0){
        computerChoice = 'rock'
    }
    if(randomNumber===1){
        computerChoice = 'paper'
    }
    if(randomNumber===2){
        computerChoice = 'scissor'
    }
    computerChoiceDisplay.innerHTML = computerChoice
    callback(userChoice,computerChoice)
}

function getResult(userChoice,computerChoice){
    let result
    if(computerChoice === userChoice){
        result='Draw'
    }
    if(userChoice === 'rock' && computerChoice === 'paper'){
        result='You Lose'
    }
    if(userChoice === 'rock' && computerChoice === 'scissor'){
        result='You Win'
    }
    if(userChoice === 'scissor' && (computerChoice === 'rock'||computerChoice === 'scissor') ){
        result='You Lose'
    }
    if(userChoice === 'scissor' && (computerChoice === 'paper'||computerChoice === 'scissor') ){
        result='You Win'
    }
    if(userChoice === 'paper' && (computerChoice === 'rock'||computerChoice === 'scissor') ){
        result='You Win'
    }
    if(userChoice === 'paper' && (computerChoice === 'scissor'||computerChoice === 'scissor') ){
        result='You Lose'
    }
    resultDisplay.innerHTML = result
}

//V2
const choicesDisplay2 = document.querySelector('#choices')
const resultDisplay2 = document.querySelector('#result2')
const choices = ['rock', 'paper','scissor']

const handleClick = (e) => {
    getResult2(e.target.innerHTML, choices[Math.floor(Math.random() * choices.length)])
}

choices.forEach(choice  =>{
    const button = document.createElement('button')
    button.innerHTML = choice
    button.addEventListener('click', handleClick)
    choicesDisplay2.appendChild(button)
})

const getResult2 = (userCho, compuCho) => {
    switch (userCho + compuCho){
        case 'scissorpaper':
        case 'rockscissor':
        case 'paperrock':
            resultDisplay2.innerHTML = "You won you choose " + userCho + " computer choose " + compuCho;
            break;
        case 'scissorrock':
        case 'rockpaper':
        case 'paperscissor':
            resultDisplay2.innerHTML = "You Lose you choose " + userCho + "computer choose " + compuCho;
            break;
        case 'scissorscissor':
        case 'rockrock':
        case 'paperpaper':
            resultDisplay2.innerHTML = "You Draw you choose " + userCho + " computer choose " + compuCho;
            break;
    }
}
