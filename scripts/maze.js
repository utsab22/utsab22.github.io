$(function () {
    let gameStarted = false;
    let gameFinished = false;
    let gameLost = false;

    $("#start").click(function () {
        gameStarted = true;
        gameFinished = false;
        $('#status').text("Game started, do not touch and go out of the boundary!!");
        if (gameLost) {
            $(".boundary").removeClass("youlose");
            $('#status').text('Click the "S" to begin.');
            gameStarted = false;
            gameLost = false;
        }
    })
    $("#end").click(function () {
        if (gameStarted) {
            gameFinished = true;
            gameStarted = false;
            $('#status').html("You win &#x1F602; . Click 'S' to reset");
        }
    })

    $("#maze").mouseleave(function () {
        changeBoundaryColor()
    })

    $("#maze").children(".boundary").mouseover(function () {
        changeBoundaryColor()
    })

    function changeBoundaryColor() {
        if (gameStarted) {
          gameStarted = false;
          gameLost = true;
          $(".boundary").addClass("youlose");
            $('#status').html("Sorry, you lost &#x1F622; . Click 'S' to reset");
        }
    }
})
