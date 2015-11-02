$(function() {
	function guessNumber(number, tries) {
		$( "#guessNumber" ).click(function() {
			newGame = " . A new number has now been chosen";
	    guess = $( "#input " ).val();
	    tries--;
	    var att = tries === 1 ? " attempt left!" : " attempts left!";
	    if(guess == number) {
	    	$( ".guessNumber" ).text("You won! The number was " + number + newGame);
	    	number = Math.floor(Math.random() * 10) + 1;
	    	tries = 3;
	    } else if(!(guess > 0 || guess <= 10)) {
	    		tries++;
	    		$( ".guessNumber" ).text("Guess must be a number between 1 and 10. " + tries + att);
	    } else {
	        var miss = guess > number ? " high! " : " low! ";
	        $( ".guessNumber" ).text("Your guess of " + guess + " is too" + miss + tries + att);
	    }
	    if(tries === 0) {
	    	$( ".guessNumber" ).text("You lost! The number was " + number + newGame);
	      number = Math.floor(Math.random() * 10) + 1;
	    	tries = 3;
	    }
		});
	}
	guessNumber(Math.floor(Math.random() * 10) + 1, 3);
});
