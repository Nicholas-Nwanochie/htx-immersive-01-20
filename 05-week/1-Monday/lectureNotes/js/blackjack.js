

// let deck = [

//     {suit: "Hearts",
//      value: 2,
//      imageURL: "images/2H.jpg"},

//      {suit: "Hearts",
//      value: 3,
//      imageURL: "images/3H.jpg"},

    //  {suit: "Hearts",
    //  value: 4,
    //  imageURL: "images/4H.jpg"}
     

// ]

// let deck = [];


// let card = {suit: "Hearts",
// value: 2,
// imageURL: "images/2H.jpg"}

// deck.push(card);

// card = {suit: "Hearts",
// value: 3,
// imageURL: "images/3H.jpg"}

// deck.push(card);

// card = {suit: "Hearts",
// value: 4,
// imageURL: "images/4H.jpg"}

// deck.push(card);

// console.log(deck);

let deck = [];
let card = {};
let playerCards = [];
let dealerCards = [];

let suits = ["H", "D", "S", "C"];

let cardValues = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

let dealerContainer = document.getElementById("dealer-hand");
let playerContainer = document.getElementById("player-hand");
let dealerPoints = document.getElementById("dealer-points");
let playerPoints = document.getElementById("player-points");


suits.forEach(function(suit){

    let value = 0;
    cardValues.forEach(function(cardValue){

        value = cardValue;
        switch(cardValue){
            case "A":
                value = 1; 
                break;
            case "J":
                value = 10;
                break;
            case "Q":
                value = 10;
                break;
            case "K":
                value = 10
                break;
            default:
                break;
        }

        card = {
            suit: suit,
            value: value,
            imageURL: "images/" + cardValue + suit + ".jpg"
        }

        deck.push(card)
    })

})

console.log(deck);

function calculatePoints(playerArray, player){

    let sum = 0;

    playerArray.forEach(function(player){
        sum = sum + player.value;
    })

    
    switch(player){
        case "player":
            playerArray = playerCards;
            break;
        case "dealer":
            playerArray = dealerCards;
            break;
        default:
            break;
    }

}

function dealCards(player){

    let newCard = document.createElement("img");
    
    card = deck.pop();

    newCard.setAttribute("src", card.imageURL);

    if (player == "dealer"){
        dealerContainer.append(newCard);
        dealerCards.push(card);
    }
    else if (player == "player"){

        playerContainer.append(newCard);
        playerCards.push(card);

    }
    
}


document.getElementById("deal-button").addEventListener("click", function(e){
    //write dealer logic here

    //create deck()
    //deal cards()

    dealCards("player");

    dealCards("player");
    
    dealCards("dealer");

    dealCards("dealer");

    console.log(playerCards);
    console.log(dealerCards);

    
});


document.getElementById("hit-button").addEventListener("click", function(e){
    //write "hit" logic here

    dealCards("player");

});


document.getElementById("stand-button").addEventListener("click", function(e){
    //write "Stand" logic here
});


