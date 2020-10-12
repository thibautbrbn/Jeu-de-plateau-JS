game.players = {

    player1: {
        name: "Minos",
        life: 10,
        weapon: "Mains nues",
        posX: 0,
        posY: 0,
        css_class: "Minos"
    },

    player2: {
        name: "Horos",
        life: 10,
        weapon: "Mains nues",
        posX: 0,
        posY: 0,
        css_class: "Horos"
    }
};

game.players.GeneratePlayers = function() {
    for (let i = 1; i < 3; i++) {
        let dataY = Math.round(Math.random() * (randomBoardSize - 1) + 1);
        let dataX = Math.round(Math.random() * (randomBoardSize - 1) + 1);
        let targetSquare = document.querySelector(`.square[data-y='${dataY}'][data-x='${dataX}']`);
        if (targetSquare.getAttribute("available") == "true") {
            targetSquare.setAttribute("player", game.players['player' + i].name);
            targetSquare.setAttribute("available", "false");
            targetSquare.classList.add(game.players['player' + i].css_class)
            game.players['player' + i].posX = dataX;
            game.players['player' + i].posY = dataY;
            game.players.VerifyAdjacent();
        } else {
            i--
        }
    }
};

game.players.getAdjacent = function() {
    posU = [game.players.player1.posY - 1, game.players.player1.posX];
    posD = [game.players.player1.posY + 1, game.players.player1.posX];
    posL = [game.players.player1.posY, game.players.player1.posX - 1];
    posR = [game.players.player1.posY, game.players.player1.posX + 1];
    posP2 = [game.players.player2.posY, game.players.player2.posX];

    if (JSON.stringify(posU) == JSON.stringify(posP2) ||
        JSON.stringify(posD) == JSON.stringify(posP2) ||
        JSON.stringify(posL) == JSON.stringify(posP2) ||
        JSON.stringify(posR) == JSON.stringify(posP2)) {
        return true
    } else {
        return false
    }
};

game.players.VerifyAdjacent = function() {
    if (game.players.getAdjacent() == true) {
        let player1 = document.querySelector(`.square[data-y='${game.players.player1.posY}'][data-x='${game.players.player1.posX}']`)
        let player2 = document.querySelector(`.square[data-y='${game.players.player2.posY}'][data-x='${game.players.player2.posX}']`)
        player1.removeAttribute("player");
        player1.setAttribute("available", "true");
        player1.classList.remove("Minos");
        player2.removeAttribute("player");
        player2.setAttribute("available", "true");
        player2.classList.remove("Horos");
        game.players.GeneratePlayers();
    }
};