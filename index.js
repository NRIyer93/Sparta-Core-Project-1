//////////////////////////////
// WHACK-A-MOLE JAVASCRIPT //
////////////////////////////

/////////////////
//	  Begin    //
/////////////////
$(function(event){

//-----------------------------------------------------------------------//

////////////////////////////
//		Variables		 				//
///////////////////////////

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
// Var to set mole intervals
var moleInterval;
// Variable for timer
var time = 20;
// Variable for timer interval
var interval;
//------------------------------------------------------------------------// 

/////////////////////////
//	   FUNCTIONS	  //
////////////////////////

// First, we need to create a function that changes the colour of the
// background. Call it in a random generator and then change back when 
// clicked.

// Function to change box colour on click
function changeCol(){
	// where 'i' is the active square.
	var randSquare = Math.floor(Math.random() * 11);
		for (i = 0; i < $holes.length; i++){
			
			if(time > 0){
				if(i === randSquare){
					$($holes[i]).css('background-color', 'red');
					
					$($holes[i]).click(function() {
						$(this).css('background-color', 'black');
						console.log('this works');
						scoreCount++;
						console.log(scoreCount);
						if(turnCount === 0){
							$(".player1").html("Player 1: " + scoreCount);
						}else {
							$(".player1").html("Player 1: " + scoreCount);
						}
						// prevents user from clicking on same panel to score again
						$(this).off('click');
					})
				}
			}
		} 
}
//-------------------------------------------------//

// Function to show time
function countDown(){
	time--;
	$('.timer').html("Time left: " + time + 's');
	if(time === 0){
		$('.timer').html("GAME OVER");
		window.clearInterval(interval);
		turnCount++;
		console.log("player switch")
	}
}

function startTimer(){
	interval = setInterval(countDown, 1000);
}

//-------------------------------------------------//

// Function to switch players
function playerSwitch(){

	// if timer is zero, increment turn count and 
	// play again.
	turnCount++;
	changeCol();
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

//--------------------------------------------------//
function intervalChange(){
	if(scoreCount <= 3){
		moleInterval = setInterval(changeCol, 1000);
	}
	if (scoreCount >= 4 && scoreCount <= 10){
		moleInterval = setInterval(changeCol, 250);
	}
	if(scoreCount >= 11 && scoreCount <= 14 ){
		moleInterval = setInterval(changeCol, 100);
	}
	if(scoreCount >= 14 && scoreCount <= 20 ){
		moleInterval = setInterval(changeCol, 50);
	}
	if(scoreCount > 20){
		moleInterval = setInterval(changeCol, 25);
	}
}

//--------------------------------------------------//

// Function to run game
function runGame(){
	
	startTimer();
	intervalChange();
	changeCol();
	//playerSwitch(); ///
	//endGame();	 		 /////////// Lines 141 to 143 to be used later
	//scoreCompare(); ///
}

//-------------------------------------------------//

// Function to end game
function endGame(){
	if (turnCount === 2) {
		console.log("end of game");
	}

}
//--------------------------------------------------//
runGame();

})








