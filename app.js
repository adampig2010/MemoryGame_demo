document.addEventListener('DOMContentLoaded', ()=> {

    // card pool : cards * 2
    const cardArray = [
        {
            name:"cheeseburger",
            images:"cheeseburger.png"
        },
        {
            name:"fries",
            images:"fries.png"
        },
        {
            name:"hotdog",
            images:"hotdog.png"
        },
        {
            name:"ice-cream",
            images:"ice-cream.png"
        },
        {
            name:"milkshake",
            images:"milkshake.png"
        },
        {
            name:"pizza",
            images:"pizza.png"
        },
        {
            name:"cheeseburger",
            images:"cheeseburger.png"
        },
        {
            name:"fries",
            images:"fries.png"
        },
        {
            name:"hotdog",
            images:"hotdog.png"
        },
        {
            name:"ice-cream",
            images:"ice-cream.png"
        },
        {
            name:"milkshake",
            images:"milkshake.png"
        },
        {
            name:"pizza",
            images:"pizza.png"
        },
    ]

    // Random the card's order
    cardArray.sort( ()=> Math.random()-0.5 )


    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    function createBoard() {

        for(let i=0; i<cardArray.length; i++){
            const card = document.createElement('img')
            card.setAttribute('src', 'blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }

    function flipCard(){
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].images)
        if( cardsChosen.length === 2 ){
            setTimeout(checkForMatch, 500)
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        // the same card
        if(cardsChosen[0] === cardsChosen[1]){
            document.getElementById("Display").innerHTML = 'You found a match'
            cards[optionOneId].setAttribute('src', 'white.png')
            cards[optionTwoId].setAttribute('src', 'white.png')
            cards[optionOneId].removeEventListener('click',flipCard)
            cards[optionTwoId].removeEventListener('click',flipCard)
            cardsWon.push(cardsChosen)
        }

        // the different card
        else{
            document.getElementById("Display").innerHTML = 'Sorry, try again'
            cards[optionOneId].setAttribute('src', 'blank.png')
            cards[optionTwoId].setAttribute('src', 'blank.png')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length

        if  (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }

    }

    //--- main ---
    createBoard()
    
})
