//////////////////////////////
// WHACK-A-MOLE JAVASCRIPT //
////////////////////////////

$(function(event){
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
	var time = 30;
	// Variable for timer interval
	var interval;
	// Variable for mole interval
	var showInterval;
	// Timeout interval
	var timeoutInt;
	// SFX
	var splatAudio = new Audio('miscFiles/splat.mp3');

	/////////////////////////
	//	   FUNCTIONS	  	//
	////////////////////////

	// Function to show the mole in random boxes and after a certain time, hide them.
	function showMole(){
		var randSquare = Math.floor(Math.random() * 11);

		for(i = 0; i < $holes.length - 1; i++){
			// If the timer is greater than zero, the game is active.
			if (time > 0){

				if(i === randSquare){
					var index = i;

					// After a designated time, tiles disappear
					$($holes[i]).css('background-color','blue');
					setTimeout(function(){
						$($holes[index]).css('background-color','black');
						$($holes[i]).off('click');
						}, timeoutInt);
					
					// If player clicks the right tile, increment point counter 
					$($holes[i]).click(function() {
						splatAudio.play();
						$(this).css('background-color', 'black');
						if(turnCount === 0){
							scoreCount++;
							$(".player1").html("Player 1: " + scoreCount);
						}else{
							scoreCount2++;
							$(".player2").html("Player 2: " + scoreCount2);
						}
						
						$(this).off('click');
					});
				}
			}
		}
	}

	// Function to hide mole
	function hideMole(){
		$($holes[i]).css('background-color','black');
	}

	//  Function that runs the intervals at which the mole appears
	function moleTimer(scoreCount, scoreCount2) {
		if (turnCount === 0 || turnCount === 1){
			// If the score count is less than 3 change the rates at which
			// the tiles appear and disappear
			if(scoreCount < 3 || scoreCount2 < 3){
				timeoutInt = 500;
				showInterval = setInterval(showMole, 1000);
			} else if ((scoreCount >= 5 && scoreCount <= 11) || (scoreCount2 >= 5 && scoreCount2 <= 11)){
				timeoutInt = 250;
				showInterval = setInterval(showMole, 500);
			}	else if ((scoreCount >= 12 && scoreCount <= 20) || (scoreCount2 >= 12 && scoreCount2 <= 20)) {
				timeoutInt = 200;
				showInterval = setInterval(showMole, 500);
			} 
		}
	}
	
	// Timing functions
	function countDown(){
		time--;
		$('.timertxt').html("Time left: " + time + 's');
		
		// When the timer reaches zero, display GAME OVER and increment turn counter
		if (time === 0) {
			$('.timertxt').html("GAME OVER");
			window.clearInterval(interval);
			window.clearInterval(showInterval);
			$($holes).off();
			hideMole();
			turnCount++;
			time = 30;
		  
		  // If the turn counter increments to 1, show button for second player
		  // else, show player scores
		  if (turnCount === 1) {
		  	$(".start").show();
			  $(".start").html("Player 2 ready - Begin");
			} else if (turnCount ===2) {
				scoreCompare(scoreCount, scoreCount2);
			}

		}

	}

	// Sets the countdown interval to 1 second
	function startTimer(){
		interval = setInterval(countDown, 1000);
	}

	// Function to compare player 1 and player 2 score
	function scoreCompare(scoreCount,scoreCount2){
		if (turnCount === 2){
			// To say what it does
			if (scoreCount > scoreCount2){
				$(".scoreContainer").html("PLAYER 1 WINS");
			} else if (scoreCount < scoreCount2){
				$(".scoreContainer").html("PLAYER 2 WINS");
			} else {
				$(".scoreContainer").html("DRAW!!")
			}
		}
	}

	// Function to run first game
	function runGame1(){
		startTimer();
		moleTimer(scoreCount, scoreCount2);
		showMole();
	}
	
	// Function to end game
	function endGame(){
		if (turnCount === 2) {
			console.log("end of game");
		}
	}

	// Function to start the game
	function start(){
		$('.start').on('click', function(){
			$(this).hide();
			runGame1();
		});
	}

	// Function for welcome screen
	function welcomeScreen(){
		$('.confirm').on('click', function(){
			$('.instruct').hide();
		})
	}

	welcomeScreen();
	start();

});