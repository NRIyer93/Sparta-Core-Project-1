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
	var timeoutInt;
	var splatAudio = new Audio('miscFiles/splat.mp3');

	/////////////////////////
	//	   FUNCTIONS	  //
	////////////////////////
	// First, we need to create a function that changes the colour of the
	// background. Call it in a random generator and then change back when 
	// clicked.

	// Function to show the mole in random boxes and after a certain time, hide them.
	function showMole(){
		var randSquare = Math.floor(Math.random() * 11);

		for(i = 0; i < $holes.length - 1; i++){
			
			if (time > 0){
				
				if(i === randSquare){
					var index = i;

					$($holes[i]).css('background-color','blue');
					setTimeout(function(){
						console.log('Index', i, 'here');
						$($holes[index]).css('background-color','black');
						$($holes[i]).off('click');
						}, timeoutInt);
					
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
	function moleTimer() {

		if(scoreCount <= 3 || scoreCount2 <= 3){
			timeoutInt = 1000;
			showInterval = setInterval(showMole, 2000);
		} else if ((scoreCount >= 6 || scoreCount2 >= 6) && (scoreCount <= 10 || scoreCount2 <= 10)){
			timeoutInt = 500;
			showInterval = setInterval(showMole, 1000);
		}	else if ((scoreCount > 10|| scoreCount2 > 10) && (scoreCount <= 20 || scoreCount2 <= 20)) {
			timeoutInt = 200;
			showInterval = setInterval(showMole, 500);
		} 

	}
	
	// Timing functions
	function countDown(){
		time--;
		$('.timer').html("Time left: " + time + 's');
		
		if (time === 0) {
			$('.timer').html("GAME OVER");
			window.clearInterval(interval);
			window.clearInterval(showInterval);
			$($holes).off();
			hideMole();
			turnCount++;
			time = 30;
		  
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
			
			if (scoreCount > scoreCount2){
				$(".jumbotron").html("PLAYER 1 WINS");
			} else if (scoreCount < scoreCount2){
				$(".jumbotron").html("PLAYER 2 WINS");
			} else {
				$(".jumbotron").html("DRAW!!")
			}

		}

	}

	// Function to run first game
	function runGame1(){
		
		startTimer();
		moleTimer();
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
	
	start();

});