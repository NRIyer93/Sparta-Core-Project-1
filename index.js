//////////////////////////////
// WHACK-A-MOLE JAVASCRIPT //
////////////////////////////

/////////////////
//	  Begin    //
/////////////////
$(function(event){

//-----------------------------------------------------------------------//

////////////////////////////
//		Variables		 //
///////////////////////////

// Variable to store name of player
var name = prompt("WELCOME TO WHACK-A-MOLE! Please enter your name: ");
// Variable to find the display boxes
var $holes = $("td");
// Variable to keep track of Player 1 score
var player1score = 0;
// Variable to keep track of Player 2 score
var player2score = 0;
// Variable with score to beat
var highScore = [];
// Counter to increment score
var scoreCount = 0;
// Counter to switch turns
var turnCount = 0;
// Variable to show scoreboard to include player 1 and player 2 scores
var scoreBoard = [[null],[null]];

//------------------------------------------------------------------------// 

/////////////////////////
//	   FUNCTIONS	  //
////////////////////////

// Function to change box colour on click

// First, we need to create a function that changes the colour of the
// background. Call it in a random generator and then change back when 
// clicked.
function changeCol(){
	// The hole that is clicked
	var $hole = $(this);
	$hole.html().
}
//-------------------------------------------------//

// Initiate event listeners for the boxes
function addListeners(){

}
//-------------------------------------------------//

// Function to show 'moles'
function showMoles(){

}
//-------------------------------------------------//

// Function to hide 'moles'
function hideMoles(){

}

//-------------------------------------------------//

// Function to switch players
function playerSwitch(){

	// if timer is zero, increment turn count and 
	// play again.
}
//-------------------------------------------------//

// Function to compare player 1 and player 2 score
function scoreCompare(){
	if (player1score > player2score){
		console.log("Player 1 has won!!");
	}else if (player1score < player2score){
		console.log("Player 2 has won!!");
	}else {
		console.log("Draw!!!!")
	}
}
//-------------------------------------------------//

// Function to randomly assign the square


//-------------------------------------------------//

// Function to run game
function runGame(){

}
//-------------------------------------------------//

// Function to end game
function endGame(){
	// when turn count is equal to 2
	// display "game over" screen and end

}
//--------------------------------------------------//

})







