$(document).ready(function () {
    var boardGame = $('#boardGame');

    function creatCard(srcArr) {
        for(var i = 0; i<srcArr.length; i++) {
            var card = $("<div>");
            card.addClass('card');
            card.css('background-image', 'url("./images/cardBack.png")')
            card.attr('id','card' + (i +1));
            boardGame.append(card);
            var cardId = $( '.card#card'+ (i+1) );
            console.log(cardId);
            cardId.css( "border", "3px solid red" );
            //cardId.css('background-image', 'url("./images/'+srcArr[i]+'.png")')
            
        }
    }
    var unshuffledImg = ['card1', 'card1', 'card2', 'card2', 'card3', 'card3', 'card4', 'card4','card5', 'card5', 'card6', 'card6',]

    var shuffledImg = unshuffledImg
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)
    
        console.log(shuffledImg);

        creatCard(shuffledImg);







    // ------------ TENTATIVE FLIP .. FAIL
    // $(".front").css('background', 'red')
    // $(".back").css('background', 'green')
    // $("#card").on('click', returnCard())
    // function returnCard(event) {
    //     $("#card").flip();

    //     setTimeout(function(){$("#card").flip();}, 1000);
    // }


















});