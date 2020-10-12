class player {
    constructor(player_number, name, life, weapon, posX, posY, css_class, boardSize) {
        this.player_number = player_number
        this.name = name
        this.life = life
        this.weapon = weapon
        this.posX = posX
        this.posY = posY
        this.css_class = css_class
        this.boardSize = boardSize
    }

    GeneratePlayer() {
        let dataY = Math.round(Math.random() * (this.boardSize - 1) + 1);
        let dataX = Math.round(Math.random() * (this.boardSize - 1) + 1);
        let targetSquare = document.querySelector(`.square[data-y='${dataY}'][data-x='${dataX}']`);
        if (targetSquare.getAttribute("available") == "true" && targetSquare.getAttribute("adjacent") == "false") {
            targetSquare.setAttribute("player", this.name);
            targetSquare.setAttribute("available", "false");
            targetSquare.classList.add(this.css_class);
            this.posY = dataY;
            this.posX = dataX;
        } else {
            return this.GeneratePlayer()
        }
    }

    SetAdjacent() {
        let adjUp = document.querySelector(`.square[data-y='${this.posY - 1}'][data-x='${this.posX}']`)
        let adjDown = document.querySelector(`.square[data-y='${this.posY + 1}'][data-x='${this.posX}']`);
        let adjLeft = document.querySelector(`.square[data-y='${this.posY}'][data-x='${this.posX - 1}']`);
        let adjRight = document.querySelector(`.square[data-y='${this.posY}'][data-x='${this.posX + 1}']`);
        if (adjUp !== null) {
            adjUp.setAttribute("adjacent", "true")
        }
        if (adjDown !== null) {
            adjDown.setAttribute("adjacent", "true")
        }
        if (adjLeft !== null) {
            adjLeft.setAttribute("adjacent", "true")
        }
        if (adjRight !== null) {
            adjRight.setAttribute("adjacent", "true")
        }
    };

    PlayerInfos() {
        let name = document.getElementById(this.player_number + "_name")
        let life = document.getElementById(this.player_number + "_life")
        let weapon = document.getElementById(this.player_number + "_weapon")
        let damages = document.getElementById(this.player_number + "_damages")
        name.textContent = this.name;
        life.textContent = this.life;
        weapon.textContent = this.weapon.name;
        damages.textContent = this.weapon.damage;
    }
}