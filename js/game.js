let whoStart = function() {
    randomPlayer = Math.floor(Math.random() * 2) + 1;
    if (randomPlayer == "1") {
        player1Movement();
    } else {
        player2Movement();
    }
}

let player1Movement = function() {
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
        el.setAttribute('adjacent', 'false');
        el.setAttribute('player', player1.name);
        el.classList.add(player1.css_class);
        player1.posY = parseInt(el.getAttribute("data-y"));
        player1.posX = parseInt(el.getAttribute("data-x"));
        dropEvent();
        WeaponChange(el);
        player2Movement();
    }

    const clickHandler = (e) => {
        targetMove(e.target);
    };

    targets.forEach((target) => {
        target.addEventListener('click', clickHandler);
    });

    function dropEvent() {
        targets.forEach((drop) => {
            drop.setAttribute('adjacent', 'false');
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

let player2Movement = function() {
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
        el.setAttribute('adjacent', 'false');
        el.setAttribute('player', player2.name);
        el.classList.add(player2.css_class);
        player2.posY = parseInt(el.getAttribute("data-y"));
        player2.posX = parseInt(el.getAttribute("data-x"));
        dropEvent();
        WeaponChange(el);
        player1Movement();
    }

    const clickHandler = (e) => {
        targetMove(e.target);
    };

    targets.forEach((target) => {
        target.addEventListener('click', clickHandler);
    });

    function dropEvent() {
        targets.forEach((drop) => {
            drop.setAttribute('adjacent', 'false');
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