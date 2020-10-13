class board {
    constructor(boardSize) {
        this.boardSize = boardSize;
    }

    createBoard() {
        let board = document.getElementById("board");
        for (let i = 0; i < this.boardSize; i++) {
            let row = document.createElement("tr");
            board.appendChild(row);
            row.setAttribute("class", "row")
            for (let j = 0; j < this.boardSize; j++) {
                let cell = document.createElement("td");
                cell.setAttribute("class", "square");
                cell.setAttribute("data-y", i + 1);
                cell.setAttribute("data-x", j + 1);
                cell.setAttribute("available", "true");
                row.appendChild(cell);
            }
        }
    }

    setBlockedCells() {
        for (let i = 0; i < (this.boardSize * this.boardSize) * 0.15; i++) {
            let dataY = Math.round(Math.random() * (this.boardSize - 1) + 1);
            let dataX = Math.round(Math.random() * (this.boardSize - 1) + 1);
            let targetSquare = document.querySelector(`.square[data-y='${dataY}'][data-x='${dataX}']`);
            if (targetSquare.getAttribute("available") == "true") {
                targetSquare.setAttribute("available", "false");
                targetSquare.classList.add("blocked");
            } else {
                i--
            }
        }
    }
}