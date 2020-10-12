const newBoard = new board(Math.round(Math.random() * (15 - 10) + 10));
newBoard.createBoard();
newBoard.setBlockedCells();
GenerateWeapons();

const player1 = new player("Minos", 10, "Mains nues", 0, 0, "Minos", newBoard.boardSize)
player1.GeneratePlayer();
player1.SetAdjacent();

const player2 = new player("Horos", 10, "Mains nues", 0, 0, "Horos", newBoard.boardSize)
player2.GeneratePlayer();
player2.SetAdjacent();

whoStart()