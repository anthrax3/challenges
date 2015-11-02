$(function() {
	$( ".fa" ).click(function() {
		var computerChoice = Math.random();
		if (computerChoice <= 0.33) {
		   computerChoice = 'rock';
		} else if (computerChoice > 0.33 && 0.66) {
		    computerChoice = 'paper';
		} else {
		    computerChoice = 'scissors';
		}
		var userChoice = $( this ).parent().text().toLowerCase();
		var compare = function(choice1, choice2) {
	    if (choice1 === choice2) {
	        return 'The result is a tie!';
	    } else if (choice1 === 'rock') {
	    	if (choice2 === 'scissors') {
	      	return 'rock wins';    
	      } else {
	        return 'paper wins';   
	      }
	    } else if (choice1 === 'paper') {
	    	if (choice2 === 'rock') {
	      	return 'paper wins';   
	      } else {
	      	return 'scissors wins';
	      }
	    } else if (choice1 === 'scissors') {
	    	if (choice2 === 'rock') {
	        return 'rock wins';
	      } else {
	      	return 'scissors wins';
	      }
	    }
	  };
		$( "#result" ).text("You chose " + userChoice + ". Computer chose " + computerChoice + "<br />" + compare(userChoice,computerChoice));
	});
});
