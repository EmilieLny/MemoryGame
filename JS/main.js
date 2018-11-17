$(document).ready(function () {

    // All my cards 
    var unshuffledImg = ['card1', 'card1', 'card2', 'card2', 'card3', 'card3', 'card4', 'card4', 'card5', 'card5', 'card6', 'card6',]
    
    // Suffled cards
    var shuffledImg = unshuffledImg.sort(function() { return 0.5 - Math.random() });
    
    // Select my Board Game
    var boardGame = document.getElementById('boardGame');

    // Creat a new board game with suffled cards (back cards)
    function creatCard(srcArr) {
        for (var i = 0; i < srcArr.length; i++) {
            var card = document.createElement("div");
            card.setAttribute('class','card');
            card.style.backgroundImage = 'url("./images/cardBack.png")';
            card.setAttribute('id', 'card' + (i + 1));
            boardGame.append(card);
            cardId = boardGame.lastElementChild;
            cardId.addEventListener('click', showCard);
            cardId.addEventListener('click', checkMatch);
        }
    }
    creatCard(shuffledImg);

    // Select all my cards
    var cards = boardGame.children; // obj
    
    // Show my card selected
    function showCard() {
        var cardChoosed = this;
        for (var i = 0; i < cards.length; i++) {
            if (cardChoosed == cards[i]) {
                var cardId = $('.card#' + cardChoosed.id);
                cardId.css("border", "3px solid red");
                cardId.css('background-image', 'url("./images/' + shuffledImg[i] + '.png")');
            }
        }
    }

   
    var arrSelection = []; // Array of the selection of the user
    var match = 0; // Number of matchs
    var count = 0;// Number of no matchs

    // Count the number of matchs and show to the user when he won the game !
    function checkMatch() {
        arrSelection.push(this);
        if (arrSelection.length === 2) {
            boardGame.setAttribute('class','disable col-lg-8')
            if (arrSelection[0].style.backgroundImage == arrSelection[1].style.backgroundImage) {
                match++;
                arrSelection[0].setAttribute('class','card disable');
                arrSelection[1].setAttribute('class','card disable');
                boardGame.setAttribute('class','col-lg-8')
            } else {
                count++;
                var selected1 = arrSelection[0];
                var selected2 = arrSelection[1]
                interval = setTimeout(function () {
                    boardGame.setAttribute('class','col-lg-8')
                    selected1.style.backgroundImage = 'url("./images/cardBack.png")'
                    selected2.style.backgroundImage = 'url("./images/cardBack.png")'
                }, 1000);
            }
            arrSelection = [];

            if(match == (unshuffledImg.length/2)){
                $('#won').modal({
                    show: true
                })
            }
        }
    }

});