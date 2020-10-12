game.new = function() {
    game.Board.createBoard();
    game.Board.setBlockedCells();
    game.Board.GenerateWeapons();
    game.players.GeneratePlayers();
    game.players.VerifyAdjacent();
    game.Move.moveUp()
    game.Move.moveDown()
    game.Move.moveLeft()
    game.Move.moveRight()
}