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
	$('#loading').hide();
	$('#newGame').css('display', 'inline-block').click(newGame);
}

function newGame() {
    alert('Game started');
}

//init();
