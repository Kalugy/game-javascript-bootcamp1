const squares = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
const Score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime =10
let timerId

function randomSquare () {
    squares.forEach(element => {
        element.classList.remove('mole')
    });

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')
    hitPosition=randomSquare.id
}

squares.forEach(element => {
    element.addEventListener('mousedown', ()=>{
        if(element.id==hitPosition){
            result++
            Score.textContent=result
            hitPosition=null
        } 
    } ) 
})

function moveMole(){
    timerId = setInterval(randomSquare,1000)
}
function countDown(){
    currentTime--
    timeLeft.textContent = currentTime
    if(currentTime==0){
        clearInterval(countDowmTimerId)
        clearInterval(timerId)
        alert("timeover") 
    }
}

moveMole()
let countDowmTimerId = setInterval(countDown,1000)