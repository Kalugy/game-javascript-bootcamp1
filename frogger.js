const timeLeft = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const startPauseButton = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')
const logLeft = document.querySelectorAll('.log-left')
const logRight = document.querySelectorAll('.log-right')
const cardsLeft = document.querySelectorAll('.car-left')
const cardsRight = document.querySelectorAll('.car-right')
let currentIndex = 76
const width = 9 
let timerId
let currentTime = 20
let outComerId

function moveFrog(e){
    squares[currentIndex].classList.remove('frog')

    switch(e.key){
        case 'ArrowLeft':
            if(currentIndex%width!==0){
                currentIndex -= 1
            }
            break;
        case 'ArrowRight':
            if(currentIndex % width < width-1) currentIndex += 1
            break;    
        case 'ArrowUp':
            if(currentIndex - width >= 0) currentIndex -= width
            break;
        case 'ArrowDown':
            if(currentIndex + width  < width * width) currentIndex += width
            break;
    }
    squares[currentIndex].classList.add('frog')
}

function autoMoveElements(){
    logLeft.forEach(element => moveLogLeft(element))
    logRight.forEach(element => moveLogRight(element))
    cardsLeft.forEach(element => moveCarLeft(element))
    cardsRight.forEach(element => moveCarRight(element))
    currentTime--
    timeLeft.textContent = currentTime
}

function moveCarLeft(element){
    switch(true){
        case element.classList.contains('c1'):
            element.classList.remove('c1')
            element.classList.add('c2')
            break
        case element.classList.contains('c2'):
            element.classList.remove('c2')
            element.classList.add('c3')
            break
        case element.classList.contains('c3'):
            element.classList.remove('c3')
            element.classList.add('c1')
            break
    }
}


function moveCarRight(element){
    switch(true){
        case element.classList.contains('c1'):
            element.classList.remove('c1')
            element.classList.add('c3')
            break
        case element.classList.contains('c2'):
            element.classList.remove('c2')
            element.classList.add('c1')
            break
        case element.classList.contains('c3'):
            element.classList.remove('c3')
            element.classList.add('c2')
            break
    }
}

function moveLogLeft(element){
    switch(true){
        case element.classList.contains('l1'):
            element.classList.remove('l1')
            element.classList.add('l2')
            break
        case element.classList.contains('l2'):
            element.classList.remove('l2')
            element.classList.add('l3')
            break
        case element.classList.contains('l3'):
            element.classList.remove('l3')
            element.classList.add('l4')
            break
        case element.classList.contains('l4'):
            element.classList.remove('l4')
            element.classList.add('l5')
            break
        case element.classList.contains('l5'):
            element.classList.remove('l5')
            element.classList.add('l1')
            break
    }
}

function moveLogRight(element){
    switch(true){
        case element.classList.contains('l1'):
            element.classList.remove('l1')
            element.classList.add('l5')
            break
        case element.classList.contains('l2'):
            element.classList.remove('l2')
            element.classList.add('l1')
            break
        case element.classList.contains('l3'):
            element.classList.remove('l3')
            element.classList.add('l2')
            break
        case element.classList.contains('l4'):
            element.classList.remove('l4')
            element.classList.add('l3')
            break
        case element.classList.contains('l5'):
            element.classList.remove('l5')
            element.classList.add('l4')
            break
    }
}


function lose(){
    if(currentTime <= 0){
        resultDisplay.textContent = "You LOSE :("
        clearInterval(timerId)
        clearInterval(outComerId)
        squares[currentIndex].classList.remove('frog')
        document.removeEventListener('keyup',moveFrog)
        return
    }
    if( squares[currentIndex].classList.contains('c1')
        ||squares[currentIndex].classList.contains('l4')
        ||squares[currentIndex].classList.contains('l5')
         
    ){
        resultDisplay.textContent = "You LOSE :("
        clearInterval(timerId)
        clearInterval(outComerId)
        squares[currentIndex].classList.remove('frog')
        document.removeEventListener('keyup',moveFrog)
    
    }

}

function win(){
    if(squares[currentIndex].classList.contains('ending-block')){
        resultDisplay.textContent = "You WIN"
        clearInterval(timerId)
        document.removeEventListener('keyup',moveFrog)
    }
}

function checkoutWin(){
    win()
    lose()
}

function startGame(){
    if(timerId){
        clearInterval(timerId)
        clearInterval(outComerId)

        document.removeEventListener('keyup',moveFrog)
        timerId=null    
    }    
    else{
        timerId=setInterval(autoMoveElements,1000)
        document.addEventListener('keyup',moveFrog)
        outComerId = setInterval(checkoutWin,50)
    }
}
startPauseButton.addEventListener('click',startGame)