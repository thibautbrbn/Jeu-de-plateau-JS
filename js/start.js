const newBoard = new board(Math.round(Math.random() * (15 - 10) + 10));
const player1 = new player("player1", "Minos", 100, Weapons.weapon0, 0, 0, "Minos", newBoard.boardSize, "attack")
const player2 = new player("player2", "Horos", 100, Weapons.weapon0, 0, 0, "Horos", newBoard.boardSize, "attack")

NewGame = function() {
    document.getElementById('board').innerHTML = "";
    newBoard.createBoard();
    newBoard.setBlockedCells();
    GenerateWeapons();

    player1.GeneratePlayer();
    player1.SetAdjacent();
    player1.PlayerInfos();

    player2.GeneratePlayer();
    player2.SetAdjacent();
    player2.PlayerInfos();

    whoStart()
}