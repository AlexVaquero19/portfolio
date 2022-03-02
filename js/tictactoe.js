$(document).ready(function(){
    let clicks = 0;
    let player1 = 'X';
    let player2 = 'O';
    let player = '';
    let winner = '';
    let mode = '';
    let clickedPlayers = ["","","","","","","","",""];
    let playerBoard = [0,1,2,3,4,5,6,7,8];
    let automaticPlayerClick = 0;
    const winningOptions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    $(".mode").on("click", function() {
        mode = $(this).attr("mode");
        let txtMode = mode.charAt(0).toUpperCase() + mode.slice(1);
        $(".gameModeSelected").html("<h4 class='my-1'>VS " + txtMode + "</h4>");
        $(".game").removeClass("d-none");

        console.log(mode);
        mode == "amigo" ? $("#turn").html("Turno de " + player1) : $("#turn").html('');
    });

    $(".cells").on("click", function(e){
        if(e.target.innerHTML == "" && !winner) {
            let boardClicked = parseInt($(this).attr("data-cell-index"));
            player = selectPlayer(clicks, player1, player2);

            $(e.target).html(player);

            clickedPlayers[boardClicked] = player;
            playerBoard.splice(playerBoard.indexOf(boardClicked), 1);
            clicks++;

            player = selectPlayer(clicks, player1, player2);
            mode == "amigo" ? $("#turn").html("Turno de " + player) : $("#turn").html("");

            let playerWinner = checkWinner();

            if(mode == "maquina" && playerWinner == ''){
                playerBoard.sort(() => Math.random() - 0.5);
                player = selectPlayer(clicks, player1, player2);
                if(!compruebaEmpate()) {
                    automaticPlayerTurn(player);
                    clicks++;
                }
            }

            playerWinner = checkWinner();
            if(playerWinner != '') {
                let result = parseInt($("."+playerWinner).text());

                $("#turn").html("");
                $("#message").html("Jugador " + playerWinner + " ha ganado!");
                $("."+playerWinner).html(result + 1);
                restartButton();
            }else if(compruebaEmpate()) {
                $("#turn").html("");
                $("#message").html("Empate!");
                restartButton();
            }
        }
    });

    function selectPlayer(clicks, player1, player2) {
        return clicks % 2 == 0 ? player1 : player2;
    }

    function automaticPlayerTurn(player) {
        automaticPlayerClick = playerBoard[0];

        clickedPlayers[automaticPlayerClick] = player;

        $(".board").find(".cells")[automaticPlayerClick].innerHTML = player;
        playerBoard.splice(playerBoard.indexOf(automaticPlayerClick), 1);
        console.log(playerBoard);
    }

    $("#btnRestart").on("click", function() {
        for (let i = 0; i < 9; i++) {
            clickedPlayers[i] = "";
        }
        
        $(".cells").html("");
        $("#message").html("");
        $("#btnRestart").addClass("d-none");

        player = 'X';
        mode == "amigo" ? $("#turn").html("Turno de " + player) : $("#turn").html("");
        playerBoard = [0,1,2,3,4,5,6,7,8];
        winner = '';
        clicks = 0;
    });

    function checkWinner() {
        winningOptions.forEach(options => {
            if(clickedPlayers[options[0]] == 'X' && clickedPlayers[options[1]] == 'X' && clickedPlayers[options[2]] == 'X')
                winner = 'X';
            else if(clickedPlayers[options[0]] == 'O' && clickedPlayers[options[1]] == 'O' && clickedPlayers[options[2]] == 'O' && !winner)
                winner = 'O';
        });
        return winner;
    }

    function compruebaEmpate() {
        let filled = true;

        clickedPlayers.forEach(value => {
            if(value == "")
                filled = false;
        });
        return filled;
    }

    function restartButton() {
        $("#btnRestart").removeClass("d-none");
    }
});