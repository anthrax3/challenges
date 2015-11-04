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
	$('#newGame').css('display', 'block').click(newGame);
}

function newGame() {
  var placeholders = '',
      frag = document.createDocumentFragment(),
      abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
            'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	$( "#result" ).html(abc);
}


init();
