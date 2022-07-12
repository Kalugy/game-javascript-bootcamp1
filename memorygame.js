const cardArray = [
    {
        name:'fries',
        img: 'MemoryGameImg/fries.png'
    },
    {
        name:'cheeseburger',
        img: 'MemoryGameImg/cheeseburger.png'
    },
    {
        name:'hotdog',
        img: 'MemoryGameImg/hotdog.png'
    },
    {
        name:'ice-cream',
        img: 'MemoryGameImg/ice-cream.png'
    }
    ,
    {
        name:'milkshake',
        img: 'MemoryGameImg/milkshake.png'
    },
    {
        name:'pizza', 
        img: 'MemoryGameImg/pizza.png'
    },
    {
        name:'fries',
        img: 'MemoryGameImg/fries.png'
    },
    {
        name:'cheeseburger',
        img: 'MemoryGameImg/cheeseburger.png'
    },
    {
        name:'hotdog',
        img: 'MemoryGameImg/hotdog.png'
    },{
        name:'ice-cream',
        img: 'MemoryGameImg/ice-cream.png'
    }
    ,{
        name:'milkshake',
        img: 'MemoryGameImg/milkshake.png'
    }
    ,{
        name:'pizza', 
        img: 'MemoryGameImg/pizza.png'
    }
]

cardArray.sort(()=> 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')

let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []

function createBoard(){
    for(let i =0; i<cardArray.length;i++ ){
        const card=document.createElement('img')
        card.setAttribute('src','MemoryGameImg/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)
    }

}

createBoard()

function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name )
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length ===2){
        setTimeout(
            checkMatch,200)
    }
}

function checkMatch(){
    const cards = document.querySelectorAll('#grid img')
    if(cardsChosen[0] == cardsChosen[1]){
        if (confirm("Match") == true) {
            cards[cardsChosenIds[0]].setAttribute('src','MemoryGameImg/white.png')
            cards[cardsChosenIds[1]].setAttribute('src','MemoryGameImg/white.png')
            cards[cardsChosenIds[0]].removeEventListener('click',flipCard)
            cards[cardsChosenIds[1]].removeEventListener('click',flipCard)
            cardsWon.push(cardsChosen)
            
        }
    } 
    else{
        if (confirm("Sorry") == true) {
            cards[cardsChosenIds[0]].setAttribute('src','MemoryGameImg/blank.png')
            cards[cardsChosenIds[1]].setAttribute('src','MemoryGameImg/blank.png')
        
        }
    }

    resultDisplay.textContent = cardsWon.length
    
    if(cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = "Congratulations win"
    }
    cardsChosen=[]
    cardsChosenIds=[]
 
}