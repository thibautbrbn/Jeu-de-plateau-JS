game = {};
game.Board = {};

game.Board.Size = function() {
    boardSize = Math.round(Math.random() * (15 - 10) + 10);
    return boardSize;
}

let randomBoardSize = game.Board.Size()

game.Board.createBoard = function() {
    let board = document.getElementById("board");
    for (let i = 0; i < randomBoardSize; i++) {
        let row = document.createElement("tr");
        board.appendChild(row);
        row.setAttribute("class", "row")
        for (let j = 0; j < randomBoardSize; j++) {
            let cell = document.createElement("div");
            cell.setAttribute("class", "square");
            cell.setAttribute("data-y", i + 1);
            cell.setAttribute("data-x", j + 1);
            cell.setAttribute("available", "true")
            row.appendChild(cell);
        }
    }
}

game.Board.setBlockedCells = function() {
    for (let i = 0; i < (randomBoardSize * randomBoardSize) * 0.15; i++) {
        let dataY = Math.round(Math.random() * (randomBoardSize - 1) + 1);
        let dataX = Math.round(Math.random() * (randomBoardSize - 1) + 1);
        let targetSquare = document.querySelector(`.square[data-y='${dataY}'][data-x='${dataX}']`);
        if (targetSquare.getAttribute("available") == "true") {
            targetSquare.setAttribute("available", "false");
            targetSquare.classList.add("blocked");
        } else {
            i--
        }
    }
}

let Weapons = {
    weapon0: {
        name: "Mains nues",
        damage: 10,
        css_class: "Hands"
    },
    weapon1: {
        name: "Couteau",
        damage: 12,
        css_class: "Knife"
    },
    weapon2: {
        name: "Épée",
        damage: 14,
        css_class: "Sword"
    },
    weapon3: {
        name: "Pistolet",
        damage: 16,
        css_class: "Gun"
    },
    weapon4: {
        name: "Fatal Bazooka",
        damage: 18,
        css_class: "Bazooka"
    }
}

game.Board.GenerateWeapons = function() {
    let numberOfWeapon = Math.floor(Math.random() * 4 + 1);
    for (let i = 0; i < numberOfWeapon; i++) {
        let dataY = Math.round(Math.random() * (randomBoardSize - 1) + 1);
        let dataX = Math.round(Math.random() * (randomBoardSize - 1) + 1);
        let targetSquare = document.querySelector(`.square[data-y='${dataY}'][data-x='${dataX}']`);
        if (targetSquare.getAttribute("available") == "true") {
            targetSquare.setAttribute("weapon", "Weapon" + (i + 1));
            targetSquare.classList.add(Weapons["weapon" + (i + 1)]["css_class"])
        } else {
            i--
        }
    }
}