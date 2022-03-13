document.addEventListener('DOMContentLoaded', ()=> {

    // card pool : cards * 2
    const cardArray = [
        {
            name:"cheeseburger",
            images:"../images/cheeseburger.png"
        },
        {
            name:"fries",
            images:"../images/fries.png"
        },
        {
            name:"hotdog",
            images:"../images/hotdog.png"
        },
        {
            name:"ice-cream",
            images:"../images/ice-cream.png"
        },
        {
            name:"milkshake",
            images:"../images/milkshake.png"
        },
        {
            name:"pizza",
            images:"../images/pizza.png"
        },
        {
            name:"cheeseburger",
            images:"../images/cheeseburger.png"
        },
        {
            name:"fries",
            images:"../images/fries.png"
        },
        {
            name:"hotdog",
            images:"../images/hotdog.png"
        },
        {
            name:"ice-cream",
            images:"../images/ice-cream.png"
        },
        {
            name:"milkshake",
            images:"../images/milkshake.png"
        },
        {
            name:"pizza",
            images:"../images/pizza.png"
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
            card.setAttribute('src', 'images/blank.png')
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
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cards[optionOneId].removeEventListener('click',flipCard)
            cards[optionTwoId].removeEventListener('click',flipCard)
            cardsWon.push(cardsChosen)
        }

        // the different card
        else{
            document.getElementById("Display").innerHTML = 'Sorry, try again'
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
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



