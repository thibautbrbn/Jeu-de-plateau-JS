game.Move = {};

game.Move.moveUp = function() {
    for (let i = 0; i < 3; i++) {
        let moveUp = document.querySelector(`.square[data-y='${game.players.player1.posY - i - 1}'][data-x='${game.players.player1.posX}']`);
        if (moveUp === null) {
            break;
        } else if (moveUp.getAttribute("available") == "true") {
            moveUp.classList.add("MinosMovement")
        } else {
            break;
        }
    }
}

game.Move.moveDown = function() {
    for (let i = 0; i < 3; i++) {
        let moveDown = document.querySelector(`.square[data-y='${game.players.player1.posY + i + 1}'][data-x='${game.players.player1.posX}']`);
        if (moveDown === null) {
            break;
        } else if (moveDown.getAttribute("available") == "true") {
            moveDown.classList.add("MinosMovement")
        } else {
            break;
        }
    }
}

game.Move.moveRight = function() {
    for (let i = 0; i < 3; i++) {
        let moveRight = document.querySelector(`.square[data-y='${game.players.player1.posY}'][data-x='${game.players.player1.posX + i + 1}']`);
        if (moveRight === null) {
            break;
        } else if (moveRight.getAttribute("available") == "true") {
            moveRight.classList.add("MinosMovement")
        } else {
            break;
        }
    }
}

game.Move.moveLeft = function() {
    for (let i = 0; i < 3; i++) {
        let moveLeft = document.querySelector(`.square[data-y='${game.players.player1.posY}'][data-x='${game.players.player1.posX - i - 1}']`);
        if (moveLeft === null) {
            break;
        } else if (moveLeft.getAttribute("available") == "true") {
            moveLeft.classList.add("MinosMovement")
        } else {
            break;
        }
    }
}

class move {
    constructor(player, left, right, up, down) {
        this.player = player;
        this.left = left;
        this.right = right
        this.up = up
        this.down = down
    }


    function() {
        for (let i = 0; i < 3; i++) {
            let move = document.querySelector(`.square[data-y='${game.players.player1.posY}'][data-x='${game.players.player1.posX - i - 1}']`);
            if (move === null) {
                break;
            } else if (move.getAttribute("available") == "true") {
                move.classList.add("MinosMovement")
            } else {
                break;
            }
        }
    }
}