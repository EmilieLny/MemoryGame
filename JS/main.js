$(document).ready(function () {
    // All my cards 
    var unshuffledImg = ['card1', 'card1', 'card2', 'card2', 'card3', 'card3', 'card4', 'card4','card5', 'card5', 'card6', 'card6',]
    // Suffled my cards
    var shuffledImg = unshuffledImg
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)
    // Select my Board Game
    var boardGame = $('#boardGame');
    // Creat a new board game with suffled cards (back cards)
    function creatCard(srcArr) {
        for(var i = 0; i<srcArr.length; i++) {
            var card = $("<div>");
            card.addClass('card');
            card.css('background-image', 'url("./images/cardBack.png")')
            card.attr('id','card' + (i +1));
            boardGame.append(card);
            var cardId = $( '.card#card'+ (i+1) );
            cardId.on('click',showCard);
            //console.log(cardId);
            //cardId.css( "border", "3px solid red" );
            //cardId.css('background-image', 'url("./images/'+srcArr[i]+'.png")')
        }
    }
    creatCard(shuffledImg);
    // Select all my cards
       var cards = $('.card');
       //console.log(cards)
    // Show my card selected
    function showCard() {
        //var e = event;
        for(var i = 0; i<cards.length; i++) {
            var cardChoosed = event.target;
            //console.log(cardChoosed)
            if (cardChoosed == cards[i]) {
                var cardsVal = shuffledImg[i];
                var idName = cards[i].id;
                //console.log('idName : ' +idName)
                var cardId = $( '.card#'+idName );
                cardId.css( "border", "3px solid red" );
                cardId.css('background-image', 'url("./images/'+cardsVal+'.png")')
            }

        }
    }
    //for(var i = 0; i<unshuffledImg.length; i++) {
        //card0.addEventListener('click', showCard ) 
    //}
    






    // ------------ TENTATIVE FLIP .. FAIL
    // $(".front").css('background', 'red')
    // $(".back").css('background', 'green')
    // $("#card").on('click', returnCard())
    // function returnCard(event) {
    //     $("#card").flip();

    //     setTimeout(function(){$("#card").flip();}, 1000);
    // }


















});