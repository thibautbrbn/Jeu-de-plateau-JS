const newBoard = new board(Math.round(Math.random() * (15 - 10) + 10)); // Create a newBoard instance of board class with a random table size
const player1 = new player("player1", "Minos", 100, Weapons.weapon0, 0, 0, "Minos", newBoard.boardSize, "attack") // Create player1 instance of player class
const player2 = new player("player2", "Horos", 100, Weapons.weapon0, 0, 0, "Horos", newBoard.boardSize, "attack") // Create player2 instance of player class

// Function to be loaded on click ('Nouvelle partie')

NewGame = function() {
    document.getElementById('board').innerHTML = ""; // Clean the game table
    newBoard.createBoard(); // Create the table
    newBoard.setBlockedCells(); // Set the unavailable cells
    GenerateWeapons(); // Set weapons on the table 

    player1.GeneratePlayer(); // Set player1 on the table 
    player1.SetAdjacent(); // Set player1's adjacent cells
    player1.PlayerInfos(); // Display player1's infos in HTML 

    player2.GeneratePlayer(); // Set player2 on the table 
    player2.SetAdjacent(); // Set player2's adjacent cells
    player2.PlayerInfos(); // Display player2's infos in HTML 

    whoStart()
}