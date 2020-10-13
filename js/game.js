const whoStart = function() {
    randomPlayer = Math.floor(Math.random() * 2) + 1;
    if (randomPlayer == "1") {
        player1Movement();
    } else {
        player2Movement();
    }
}

const player1Movement = function() {
    const p1Move = new move(player1);
    p1Move.moveUp();
    p1Move.moveDown();
    p1Move.moveLeft();
    p1Move.moveRight();

    let targets = document.querySelectorAll('.MinosMovement');
    let firstPosition = document.querySelector(`.square[data-y='${player1.posY}'][data-x='${player1.posX}']`);

    const targetMove = (el) => {
        firstPosition.classList.remove(player1.name);
        firstPosition.setAttribute("available", "true");
        firstPosition.removeAttribute("Player");
        el.setAttribute("available", "false");
        el.setAttribute('player', player1.name);
        el.classList.add(player1.css_class);
        player1.posY = parseInt(el.getAttribute("data-y"));
        player1.posX = parseInt(el.getAttribute("data-x"));
        WeaponChange(el);
        if (el.getAttribute("adjacent") == "trueHoros") {
            dropEvent();
            alert("Le combat commence, bonne chance !")
            fightPlayer1();
        } else {
            dropEvent();
            player1.SetAdjacent();
            player2Movement();
        }
    }

    const clickHandler = (e) => {
        targetMove(e.target);
    };

    targets.forEach((target) => {
        target.addEventListener('click', clickHandler);
    });

    function dropEvent() {
        targets.forEach((drop) => {
            drop.removeAttribute('adjacent');
            drop.classList.remove('MinosMovement');
            drop.removeEventListener('click', clickHandler);
        });
    }

    function WeaponChange(el) {
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

const player2Movement = function() {
    const p2Move = new move(player2);
    p2Move.moveUp();
    p2Move.moveDown();
    p2Move.moveLeft();
    p2Move.moveRight();

    let targets = document.querySelectorAll('.HorosMovement');
    let firstPosition = document.querySelector(`.square[data-y='${player2.posY}'][data-x='${player2.posX}']`);

    const targetMove = (el) => {
        firstPosition.classList.remove(player2.name);
        firstPosition.setAttribute("available", "true");
        firstPosition.removeAttribute("Player");
        el.setAttribute("available", "false");
        el.setAttribute('player', player2.name);
        el.classList.add(player2.css_class);
        player2.posY = parseInt(el.getAttribute("data-y"));
        player2.posX = parseInt(el.getAttribute("data-x"));
        WeaponChange(el);
        if (el.getAttribute("adjacent") == "trueMinos") {
            dropEvent();
            alert("Le combat commence, bonne chance !")
            fightPlayer2();
        } else {
            dropEvent();
            player2.SetAdjacent();
            player1Movement();
        }
    }

    const clickHandler = (e) => {
        targetMove(e.target);
    };

    targets.forEach((target) => {
        target.addEventListener('click', clickHandler);
    });

    function dropEvent() {
        targets.forEach((drop) => {
            drop.removeAttribute('adjacent');
            drop.classList.remove('HorosMovement');
            drop.removeEventListener('click', clickHandler);
        });
    }

    function WeaponChange(el) {
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

const fightPlayer1 = function() {
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

const fightPlayer2 = function() {
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