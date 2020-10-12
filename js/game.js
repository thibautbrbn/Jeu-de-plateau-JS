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
}