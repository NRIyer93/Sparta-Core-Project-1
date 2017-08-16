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
// Counter to increment score for player 1 and 2
var scoreCount = 0;
var scoreCount2 = 0;
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
// Variable for mole interval
var showInterval;
//------------------------------------------------------------------------// 

/////////////////////////
//	   FUNCTIONS	  //
////////////////////////

// First, we need to create a function that changes the colour of the
// background. Call it in a random generator and then change back when 
// clicked.

// Function to change box colour on click
//--------------------------------------------------//


//-------------------------------------------------//
function showMole(){
	var randSquare = Math.floor(Math.random() * 11);
	for(i = 0; i < $holes.length - 1; i++){
		if (time > 0){
			if(i === randSquare){
				// console.log('here', i, randSquare);
				var index = i;
				console.log('------------------------', index);
				$($holes[i]).css('background-color','blue');
				setTimeout(function(){
					console.log('Index', i, 'here');
					$($holes[index]).css('background-color','black');
					$($holes[i]).off();
				}, 1000);
				
				$($holes[i]).click(function() {
						$(this).css('background-color', 'black');
						console.log('this works');
						if(turnCount === 0){
							scoreCount++;
							$(".player1").html("Player 1: " + scoreCount);
						}else{
							scoreCount2++;
							$(".player2").html("Player 2: " + scoreCount2);
						}
						$(this).off('click');
				})
			}
		}
	}
}
//-------------------------------------------------//

function hideMole(){
					console.log("timeout");
	$($holes[i]).css('background-color','black');
}

//--------------------------------------------------//
function moleTimer() {
		
		showInterval = setInterval(showMole, 2000);

	}

//---------------------------------------------------------//
// Timing functions
function countDown(){
	time--;
	$('.timer').html("Time left: " + time + 's');
	if(time === 0){
		$('.timer').html("GAME OVER");
		window.clearInterval(interval);
		$holes.off();
		hideMole();
		$holes = [];
		turnCount++;
		console.log(turnCount);
		time = 20;
		console.log("player 2 turn")
		// clearInterval(moleInterval);
	}
}

function startTimer(){
	interval = setInterval(countDown, 1000);
}
//-------------------------------------------------//

//-------------------------------------------------//

// Function to compare player 1 and player 2 score
function scoreCompare(){
	if (turnCount === 2){
		if (scoreCount > scoreCount2){
			console.log("Player 1 has won!!");
		}else if (scoreCount < scoreCount2){
			console.log("Player 2 has won!!");
		}else {
			console.log("Draw!!!!")
		}
	}
}

//--------------------------------------------------//
// function intervalChange(//scoreCounter,moleInt
// 	){
// 	// var playerSpeed = scoreCounter;
// 	// var moleInter = moleInt;
// 	if(turnCount === 0){
// 		if(scoreCount <= 3){
// 			console.log("< 3");
// 			moleInterval= setInterval(showMole, 3000);
// 		}// }else if (scoreCount >= 4 && scoreCount <= 10){
		// 	console.log("< 10");
		// 	clearInterval(moleInterval);
		// 	moleInterval = setInterval(changeCol, 2000);
		// }else if(scoreCount >= 11 && scoreCount <= 14 ){
		// 	console.log("< 14");
		// 	clearInterval(moleInterval);
		// 	moleInterval = setInterval(changeCol, 1000);
		// }else if(scoreCount >= 14 && scoreCount <= 20 ){
		// 	clearInterval(moleInterval);
		// 	moleInterval = setInterval(changeCol, 900);
		// }else{
		// 	clearInterval(moleInterval);
		// 	moleInterval = setInterval(changeCol, 800);
		// }
// 	}
// }

//--------------------------------------------------//

// Function to run first game
function runGame1(){
	startTimer();
	//intervalChange();
	moleTimer();
	showMole();
}

//-------------------------------------------------//

// Function to run second game
 function runGame2(){
 	startTimer();
 	// intervalChange();
 	moleTimer();
 	showMole();

 }
//-------------------------------------------------//
// Function to end game
function endGame(){
	if (turnCount === 2) {
		console.log("end of game");
	}

}
//--------------------------------------------------//
$('.start').on('click', function(){
        runGame1();
    });
// runGame();
$('.start2').on('click', function(){
				 $holes = $("td");
				 time = 20;
        runGame2();
    });
scoreCompare();
console.log(scoreCompare);

});










