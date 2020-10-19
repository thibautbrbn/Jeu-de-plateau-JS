// Function to know which player starts the game randomly

const whoStart = () => {
    randomPlayer = Math.floor(Math.random() * 2) + 1;
    if (randomPlayer == "1") {
        player1Movement();
    } else {
        player2Movement();
    }
}

/* ------- Function when it is player1's turn to play ------- */
// Function to set cells where the player can move on the game table
const player1Movement = () => {
    const p1Move = new move(player1);
    p1Move.moveUp();
    p1Move.moveDown();
    p1Move.moveLeft();
    p1Move.moveRight();

    let firstPosition = document.querySelector(`.square[data-y='${player1.posY}'][data-x='${player1.posX}']`); // Variable to get where the player is before moving

    // Function and evenlistener to move the player from its firstposition to its new position using Jquery

    $(".MinosMovement").on("click", function move() {
        firstPosition.classList.remove(player1.name);
        firstPosition.setAttribute("available", "true");
        firstPosition.removeAttribute("Player");
        this.setAttribute("available", "false");
        this.setAttribute('player', player1.name);
        this.classList.add(player1.css_class);
        player1.posY = parseInt(this.getAttribute("data-y"));
        player1.posX = parseInt(this.getAttribute("data-x"));
        WeaponChange(this);
        if (this.getAttribute("adjacent") == "trueHoros") { // If target cell is an adjacent cell of player2, fight begin
            dropEvent();
            alert("Le combat commence, bonne chance !");
            fightPlayer1(); // Function to start fight
        } else { // If target cell is not an adjacent cell of player2, player2 plays
            dropEvent();
            player1.SetAdjacent();
            player2Movement();
        }
    });

    const dropEvent = () => {
        $(".MinosMovement").each(function() {
            this.removeAttribute('adjacent');
            this.classList.remove('MinosMovement');
            $(".MinosMovement").off('click');
        });
    }

    // Function to change weapon if the player finds one in its path

    const WeaponChange = (el) => {
        let posXFirstPosition = parseInt(firstPosition.getAttribute("data-x"));
        let posYFirstPosition = parseInt(firstPosition.getAttribute("data-y"));
        let posXTarget = parseInt(el.getAttribute("data-x"));
        let posYTarget = parseInt(el.getAttribute("data-y"));

        let moveX = posXTarget - posXFirstPosition;
        let moveY = posYTarget - posYFirstPosition;

        if (moveX > 0) {
            for (let i = 0; i < moveX; i++) {
                let cellsToCheck = document.querySelector(`.square[data-y='${player1.posY}'][data-x='${player1.posX - i}']`);
                if (cellsToCheck.hasAttribute("weapon")) {
                    weapon = cellsToCheck.getAttribute("weapon");
                    cellsToCheck.setAttribute("weapon", player1.weapon.number);
                    cellsToCheck.classList.toggle(player1.weapon.css_class);
                    player1.weapon = Weapons[weapon];
                    cellsToCheck.classList.toggle(player1.weapon.css_class);
                    player1.PlayerInfos();
                    break
                }
            }
        } else if (moveX < 0) {
            for (let i = 0; i > moveX; i--) {
                let cellsToCheck = document.querySelector(`.square[data-y='${player1.posY}'][data-x='${player1.posX - i}']`);
                if (cellsToCheck.hasAttribute("weapon")) {
                    weapon = cellsToCheck.getAttribute("weapon");
                    cellsToCheck.setAttribute("weapon", player1.weapon.number);
                    cellsToCheck.classList.toggle(player1.weapon.css_class);
                    player1.weapon = Weapons[weapon];
                    cellsToCheck.classList.toggle(player1.weapon.css_class);
                    player1.PlayerInfos();
                    break
                }
            }
        } else if (moveY > 0) {
            for (let i = 0; i < moveY; i++) {
                let cellsToCheck = document.querySelector(`.square[data-y='${player1.posY - i}'][data-x='${player1.posX}']`);
                if (cellsToCheck.hasAttribute("weapon")) {
                    weapon = cellsToCheck.getAttribute("weapon");
                    cellsToCheck.setAttribute("weapon", player1.weapon.number);
                    cellsToCheck.classList.toggle(player1.weapon.css_class);
                    player1.weapon = Weapons[weapon];
                    cellsToCheck.classList.toggle(player1.weapon.css_class);
                    player1.PlayerInfos();
                    break
                }
            }
        } else if (moveY < 0) {
            for (let i = 0; i > moveY; i--) {
                let cellsToCheck = document.querySelector(`.square[data-y='${player1.posY - i}'][data-x='${player1.posX}']`);
                if (cellsToCheck.hasAttribute("weapon")) {
                    weapon = cellsToCheck.getAttribute("weapon");
                    cellsToCheck.setAttribute("weapon", player1.weapon.number);
                    cellsToCheck.classList.toggle(player1.weapon.css_class);
                    player1.weapon = Weapons[weapon];
                    cellsToCheck.classList.toggle(player1.weapon.css_class);
                    player1.PlayerInfos();
                    break
                }
            }
        }
    }
}

/* ------- Function when it is player2's turn to play ------- */
// Function to set cells where the player can move on the game table
const player2Movement = () => {
    const p2Move = new move(player2);
    p2Move.moveUp();
    p2Move.moveDown();
    p2Move.moveLeft();
    p2Move.moveRight();

    let firstPosition = document.querySelector(`.square[data-y='${player2.posY}'][data-x='${player2.posX}']`); // Variable to get where the player is before moving

    // Function and evenlistener to move the player from its firstposition to its new position using Jquery

    $(".HorosMovement").on("click", function move() {
        firstPosition.classList.remove(player2.name);
        firstPosition.setAttribute("available", "true");
        firstPosition.removeAttribute("Player");
        this.setAttribute("available", "false");
        this.setAttribute('player', player2.name);
        this.classList.add(player2.css_class);
        player2.posY = parseInt(this.getAttribute("data-y"));
        player2.posX = parseInt(this.getAttribute("data-x"));
        WeaponChange(this);
        if (this.getAttribute("adjacent") == "trueMinos") { // If target cell is an adjacent cell of player2, fight begin
            dropEvent();
            alert("Le combat commence, bonne chance !")
            fightPlayer2(); // Function to start fight
        } else { // If target cell is not an adjacent cell of player1, player1 plays
            dropEvent();
            player2.SetAdjacent();
            player1Movement();
        }
    });

    const dropEvent = () => {
        $(".HorosMovement").each(function() {
            this.removeAttribute('adjacent');
            this.classList.remove('HorosMovement');
            $(".HorosMovement").off('click');
        });
    }

    // Function to change weapon if the player finds one in its path

    const WeaponChange = (el) => {
        let posXFirstPosition = parseInt(firstPosition.getAttribute("data-x"));
        let posYFirstPosition = parseInt(firstPosition.getAttribute("data-y"));
        let posXTarget = parseInt(el.getAttribute("data-x"));
        let posYTarget = parseInt(el.getAttribute("data-y"));

        let moveX = posXTarget - posXFirstPosition;
        let moveY = posYTarget - posYFirstPosition;

        if (moveX > 0) {
            for (let i = 0; i < moveX; i++) {
                let cellsToCheck = document.querySelector(`.square[data-y='${player2.posY}'][data-x='${player2.posX - i}']`);
                if (cellsToCheck.hasAttribute("weapon")) {
                    weapon = cellsToCheck.getAttribute("weapon");
                    cellsToCheck.setAttribute("weapon", player2.weapon.number);
                    cellsToCheck.classList.toggle(player2.weapon.css_class);
                    player2.weapon = Weapons[weapon];
                    cellsToCheck.classList.toggle(player2.weapon.css_class);
                    player2.PlayerInfos();
                    break
                }
            }
        } else if (moveX < 0) {
            for (let i = 0; i > moveX; i--) {
                let cellsToCheck = document.querySelector(`.square[data-y='${player2.posY}'][data-x='${player2.posX - i}']`);
                if (cellsToCheck.hasAttribute("weapon")) {
                    weapon = cellsToCheck.getAttribute("weapon");
                    cellsToCheck.setAttribute("weapon", player2.weapon.number);
                    cellsToCheck.classList.toggle(player2.weapon.css_class);
                    player2.weapon = Weapons[weapon];
                    cellsToCheck.classList.toggle(player2.weapon.css_class);
                    player2.PlayerInfos();
                    break
                }
            }
        } else if (moveY > 0) {
            for (let i = 0; i < moveY; i++) {
                let cellsToCheck = document.querySelector(`.square[data-y='${player2.posY - i}'][data-x='${player2.posX}']`);
                if (cellsToCheck.hasAttribute("weapon")) {
                    weapon = cellsToCheck.getAttribute("weapon");
                    cellsToCheck.setAttribute("weapon", player2.weapon.number);
                    cellsToCheck.classList.toggle(player2.weapon.css_class);
                    player2.weapon = Weapons[weapon];
                    cellsToCheck.classList.toggle(player2.weapon.css_class);
                    player2.PlayerInfos();
                    break
                }
            }
        } else if (moveY < 0) {
            for (let i = 0; i > moveY; i--) {
                let cellsToCheck = document.querySelector(`.square[data-y='${player2.posY - i}'][data-x='${player2.posX}']`);
                if (cellsToCheck.hasAttribute("weapon")) {
                    weapon = cellsToCheck.getAttribute("weapon");
                    cellsToCheck.setAttribute("weapon", player2.weapon.number);
                    cellsToCheck.classList.toggle(player2.weapon.css_class);
                    player2.weapon = Weapons[weapon];
                    cellsToCheck.classList.toggle(player2.weapon.css_class);
                    player2.PlayerInfos();
                    break
                }
            }
        }
    }
}

// Function when fight has started for player1

const fightPlayer1 = () => {
    let fightBlock = document.getElementById('AttackorDefend');
    let attackButton = document.getElementById('attack');
    let defendButton = document.getElementById('defend');
    let player1life = document.getElementById("player1_life");
    let player2life = document.getElementById("player2_life");

    fightBlock.style.backgroundColor = "rgb(77, 131, 212, 0.5)";
    attackButton.style.backgroundColor = "rgb(77, 131, 212, 0.7)";
    defendButton.style.backgroundColor = "rgb(77, 131, 212, 0.7)";

    if (player1life.textContent == "0") {
        if (confirm("Minos n'a pas été à la hauteur et a été abattu. Voulez-vous recommencer une nouvelle partie ?")) {
            NewGame()
        } else {

        }
    } else {
        // Function if player click on 'attack'
        const LifeReduce = () => {
                if (player2.fight == "attack") {
                    player2life.textContent -= player1.weapon.damage;
                    if (player2life.textContent < 0) {
                        player2life.textContent = 0
                    }
                } else {
                    player2life.textContent -= (player1.weapon.damage / 2);
                    if (player2life.textContent < 0) {
                        player2life.textContent = 0
                    }
                }
                attackButton.removeEventListener("click", LifeReduce);
                defendButton.removeEventListener("click", DamageReduce);
                player2.fight = "attack";
                fightPlayer2();
            }
            // Function if player click on 'defend'
        const DamageReduce = () => {
            player1.fight = "defend"
            attackButton.removeEventListener("click", LifeReduce)
            defendButton.removeEventListener("click", DamageReduce)
            fightPlayer2()
        }

        attackButton.addEventListener("click", LifeReduce);
        defendButton.addEventListener("click", DamageReduce);
    }
}

// Function when fight has started for player2

const fightPlayer2 = () => {
    let fightBlock = document.getElementById('AttackorDefend');
    let attackButton = document.getElementById('attack');
    let defendButton = document.getElementById('defend');
    let player1life = document.getElementById("player1_life");
    let player2life = document.getElementById("player2_life");

    fightBlock.style.backgroundColor = "rgb(204, 50, 50, 0.5)";
    attackButton.style.backgroundColor = "rgb(204, 50, 50, 0.7)";
    defendButton.style.backgroundColor = "rgb(204, 50, 50, 0.7)";

    if (player2life.textContent == "0") {
        if (confirm("Horos n'a pas été à la hauteur et a été abattu. Voulez-vous recommencer une nouvelle partie ?")) {
            NewGame()
        } else {

        }
    } else {
        // Function if player click on 'attack'
        const LifeReduce = () => {
                if (player1.fight == "attack") {
                    player1life.textContent -= player2.weapon.damage;
                    if (player1life.textContent < 0) {
                        player1life.textContent = 0
                    }
                } else {
                    player1life.textContent -= (player2.weapon.damage / 2)
                    if (player1life.textContent < 0) {
                        player1life.textContent = 0
                    }
                }
                attackButton.removeEventListener("click", LifeReduce);
                defendButton.removeEventListener("click", DamageReduce);
                player1.fight = "attack";
                fightPlayer1();
            }
            // Function if player click on 'defend'
        const DamageReduce = () => {
            player2.fight = "defend"
            attackButton.removeEventListener("click", LifeReduce)
            defendButton.removeEventListener("click", DamageReduce)
            fightPlayer1()
        }

        attackButton.addEventListener("click", LifeReduce);
        defendButton.addEventListener("click", DamageReduce);
    }
}