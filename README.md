#Sparta Core Project 1

## Introduction
After spending a week learning JavaScript, I was given a project to complete which involved creating a game that could be played online. My game of choice was a classic "Whack-a-Mole"-style game in which the user has to press on highlighted tiles when they appear to score a points before the timer ends. In this document, you will find the instructions on how to play the game as well as  a description of the design process which resulted in the final product.

## Requirements

Below is a list of requirements for the game:

* Instructions for the game
* Display message before start of game
* Should be styled
* Be hosted on line

In addition to the above, bonus specifications were given which are listed below:

* Could support 2 players
* Could include animations 
* Could include HTML5 Audio

## Design and Developement

### Design
After the idea was approved by the instructor, the design process began with the construction of wire frames to visualise the look of the MVP (Minimum Viable Project). These wireframes can be seen below: 

![The initial layout of the game]('readMeFiles/wireframe1.png')

![Representation of illuminating panels]('readMeFiles/wireframe2.png')

After the wireframes were constructed, I began the process of structuring my HTML, CSS and JavaScript files, the later using psuedocode, declaring variables and functions.
### Development
The project described in this document is a game written in JavaScript along with its HTML and CSS components that loads upon the opening of the web browser. The link to this website will be provided at the end of this document.
#### Approach
Once the pseudocode had been written, I began the process of writing the JavaScript using JQuery. Using the game 'Tic-Tac-Toe' as a template, I structured the main game container as a 3x4 grid system and activated the tiles in this grid system using the code below:

~~~~
 var $holes = $("td"); 
~~~~
Once the tiles had been activated, I constructed a function which took a random tile of the grid system and changed it's colour to blue and, using a **setTimeout** function, disappeared after a defined interval. If the tile is clicked during the time in which it is in it's "blue" state, the score counter for the current player increments. This function was in turn linked to a second function called **moleTimer()**. The purpose of this function was to increment the speed at which the blue tiles appeared in the grid depending on the current score of the player.

Another important function for the game is the game timer itself. This was implimented using the **setInterval(function, milliseconds)** method with the function parameter being the **countdown()** function which governed the clock display in the game window:

~~~~
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

~~~~
In the function above, when the timer reaches zero, the turn counter increments and resets the time of the game to 30 seconds, allowing the second player to proceed. The **if/else** statement at the end of the function checks the turn counter to see if the second player has finished. If the turn counter is equal to 2, this means the second player has finised and the score comparison function is executed, displaying the result in the game window.

#### Challenges

During the development process, the aesthetic vision for the game changed. Initially, the theme of the game was that of a circus park, however, due to difficulty in aquiring an appropriate image for the background, the theme changed to a retro 1980s style arcade game. Upon the conclusion of the project I found that the 1980s design was better than the original circus theme as it made the game window look more vibrant. The final design can be seen below:

![Screenshot of final game]('readMeFiles/gameshot.png')

Another challenged that I faced was changing the intervals at which the tiles appeared depending on the score of the player. This issue was never resolved, however. In order to get around this issue, I only implimented one interval which was done in order to make the game as challenging as it could possibly be without making it impossible to play.

One of the final issues that arose was concerned more with the HTML side of the game. As the look of the game changed over time, so did the structure of the page and as a result, containers for the scoreboard and the game board itself had to be rearranged. A change in one container affected the position of the other. The process of rearranging the div containers took a lot of time to get right and was only corrected within the last day.

In regards to the final version of the game, I am most proud of the way in which the visuals turned out, especially the animated game title. I think that the styling of the website fits well with the game itself, "Whack-a-mole" being an arcade game, and in the end, I preffered the final theme to the original circus theme that was planned in the beginning stages of the project.

## Instructions

In order to play my "Whack-a-mole" game, the user must have an internet connection.

The instructions to play the game are straightforward:

Within the allocated time, click the blue tiles when they appear on the grid.

## Author

Naren Richard Iyer

### Links

![Game link](https://nriyer93.github.io/Sparta-Core-Project-1/)