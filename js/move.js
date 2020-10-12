class move {
    constructor(player) {
        this.player = player;
    }

    moveUp() {
        for (let i = 0; i < 3; i++) {
            let move = document.querySelector(`.square[data-y='${this.player.posY - i - 1}'][data-x='${this.player.posX}']`);
            if (move === null) {
                break;
            } else if (move.getAttribute("available") == "true") {
                move.classList.add(String(this.player.css_class) + "Movement");
            } else {
                break;
            }
        }
    }

    moveDown() {
        for (let i = 0; i < 3; i++) {
            let move = document.querySelector(`.square[data-y='${this.player.posY + i + 1}'][data-x='${this.player.posX}']`);
            if (move === null) {
                break;
            } else if (move.getAttribute("available") == "true") {
                move.classList.add(String(this.player.css_class) + "Movement");
            } else {
                break;
            }
        }
    }

    moveRight() {
        for (let i = 0; i < 3; i++) {
            let move = document.querySelector(`.square[data-y='${this.player.posY}'][data-x='${this.player.posX + i + 1}']`);
            if (move === null) {
                break;
            } else if (move.getAttribute("available") == "true") {
                move.classList.add(String(this.player.css_class) + "Movement");
            } else {
                break;
            }
        }
    }


    moveLeft() {
        for (let i = 0; i < 3; i++) {
            let move = document.querySelector(`.square[data-y='${this.player.posY}'][data-x='${this.player.posX - i - 1}']`);
            if (move === null) {
                break;
            } else if (move.getAttribute("available") == "true") {
                move.classList.add(String(this.player.css_class) + "Movement");
            } else {
                break;
            }
        }
    }
}