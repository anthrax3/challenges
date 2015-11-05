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
  badGuesses = 0;
	correctGuesses = 0;
	wordToGuess = getWord();
	wordLength = wordToGuess.length;

// Get selected letter and remove it from the alphabet pad
function getLetter() {
    checkLetter(this.innerHTML);
    this.innerHTML = '&nbsp;';
    this.style.cursor = 'default';
    this.onclick = null;
}

// Check whether selected letter is in the word to be guessed
function checkLetter(letter) {
   var placeholders = word.innerHTML,
       wrongGuess = true;
   // split the placeholders into an array
   placeholders = placeholders.split('');
   // loop through the array
   for (var i = 0; i < wordLength; i++) {
      // if the selected letter matches one in the word to guess,
      // replace the underscore and increase the number of correct guesses
      if (wordToGuess.charAt(i) == letter.toLowerCase()) {
         placeholders[i] = letter;
         wrongGuess = false;
         correctGuesses++;
         // redraw the canvas only if all letters have been guessed
         if (correctGuesses == wordLength) {
            drawCanvas();
         }
      }
   }
   // if the guess was incorrect, increment the number of bad
   // guesses and redraw the canvas
   if (wrongGuess) {
      badGuesses++;
      drawCanvas();
   }
   // convert the array to a string and display it again
   word.innerHTML = placeholders.join('');
}

	// create row of underscores the same length as letters to guess
	for (var i = 0; i < wordLength; i++) {
		placeholders += '_';
	}
	word.innerHTML = placeholders;

	// create an alphabet pad to select letters
letters.innerHTML = '';
for (i = 0; i < 26; i++) {
    var div = document.createElement('div');
    div.style.cursor = 'pointer';
    div.innerHTML = abc[i];
    div.onclick = getLetter;
    frag.appendChild(div);
}
letters.appendChild(frag);

	$( "#result" ).html(abc + wordToGuess + wordLength);
} // close newGame

// Select random word to guess
function getWord() {
  var a = new Array('abate','aberrant','abscond','accolade','acerbic','acumen','adulation','adulterate','aesthetic','aggrandize','alacrity','alchemy','amalgamate','ameliorate','amenable','anachronism','anomaly','approbation','archaic','arduous','ascetic','assuage','astringent','audacious','austere','avarice','aver','axiom','bolster','bombast','bombastic','bucolic','burgeon','cacophony','canon','canonical','capricious','castigation','catalyst','caustic','censure','chary','chicanery','cogent','complaisance','connoisseur','contentious','contrite','convention','convoluted','credulous','culpable','cynicism','dearth','decorum','demur','derision','desiccate','diatribe','didactic','dilettante','disabuse','discordant','discretion','disinterested','disparage','disparate','dissemble','divulge','dogmatic','ebullience','eccentric','eclectic','effrontery','elegy','eloquent','emollient','empirical','endemic','enervate','enigmatic','ennui','ephemeral','equivocate','erudite','esoteric','eulogy','evanescent','exacerbate','exculpate','exigent','exonerate','extemporaneous','facetious','fallacy','fawn','fervent','filibuster','flout','fortuitous','fulminate','furtive','garrulous','germane','glib','grandiloquence','gregarious','hackneyed','halcyon','harangue','hedonism','hegemony','heretical','hubris','hyperbole','iconoclast','idolatrous','imminent','immutable','impassive','impecunious','imperturbable','impetuous','implacable','impunity','inchoate','incipient','indifferent','inert','infelicitous','ingenuous','inimical','innocuous','insipid','intractable','intransigent','intrepid','inured','inveigle','irascible','laconic','laud','loquacious','lucid','luminous','magnanimity','malevolent','malleable','martial','maverick','mendacity','mercurial','meticulous','misanthrope','mitigate','mollify','morose','mundane','nebulous','neologism','neophyte','noxious','obdurate','obfuscate','obsequious','obstinate','obtuse','obviate','occlude','odious','onerous','opaque','opprobrium','oscillation','ostentatious','paean','parody','pedagogy','pedantic','penurious','penury','perennial','perfidy','perfunctory','pernicious','perspicacious','peruse','pervade','pervasive','phlegmatic','pine','pious','pirate','pith','pithy','placate','platitude','plethora','plummet','polemical','pragmatic','prattle','precipitate','precursor','predilection','preen','prescience','presumptuous','prevaricate','pristine','probity','proclivity','prodigal','prodigious','profligate','profuse','proliferate','prolific','propensity','prosaic','pungent','putrefy','quaff','qualm','querulous','query','quiescence','quixotic','quotidian','rancorous','rarefy','recalcitrant','recant','recondite','redoubtable','refulgent','refute','relegate','renege','repudiate','rescind','reticent','reverent','rhetoric','salubrious','sanction','satire','sedulous','shard','solicitous','solvent','soporific','sordid','sparse','specious','spendthrift','sporadic','spurious','squalid','squander','static','stoic','stupefy','stymie','subpoena','subtle','succinct','superfluous','supplant','surfeit','synthesis','tacit','tenacity','terse','tirade','torpid','torque','tortuous','tout','transient','trenchant','truculent','ubiquitous','unfeigned','untenable','urbane','vacillate','variegated','veracity','vexation','vigilant','vilify','virulent','viscous','vituperate','volatile','voracious','waver','zealous');
  return a[parseInt(Math.random()* a.length)];
}

// Draw the canvas
function drawCanvas() {

}

init();
