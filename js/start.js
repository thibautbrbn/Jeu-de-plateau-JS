const newBoard = new board(Math.round(Math.random() * (15 - 10) + 10));
newBoard.createBoard();
newBoard.setBlockedCells();
GenerateWeapons();

const player1 = new player("player1", "Minos", 10, Weapons.weapon0, 0, 0, "Minos", newBoard.boardSize)
player1.GeneratePlayer();
player1.SetAdjacent();
player1.PlayerInfos();

const player2 = new player("player2", "Horos", 10, Weapons.weapon0, 0, 0, "Horos", newBoard.boardSize)
player2.GeneratePlayer();
player2.SetAdjacent();
player2.PlayerInfos();

whoStart()