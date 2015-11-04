// not using jQuery because <canvas> element needs to be a standard JavaScript object
var canvas = document.getElementById('stage'),
    word = document.getElementById('word'),
    letters = document.getElementById('letters'),
    wordToGuess,
    wordLength,
    badGuesses,
    correctGuesses;

function init() {
	var w = screen.availWidth <= 800 ? screen.availWidth : 800;

	// Hide the loading message and display the control buttons
	$('#loading').hide();
	$('#play').css('display', 'inline-block').click(newGame);
	$('#clear').css('display', 'inline-block').click(resetScore);
}
