angular.module('challengesApp').config(function($locationProvider, $urlRouterProvider, $stateProvider){

	//$locationProvider.html5Mode(true);

	$urlRouterProvider.otherwise('/');

	$stateProvider

	.state('main', {
		url: '/',
		templateUrl: '/challenges/views/main.html',
		controller: function($scope) {
			$scope.myarr = ['1','2','3','4','5'];
		}
	})

	.state('challenges', {
		url: '/challenges/',
		templateUrl: '/challenges/views/challenges.html'
	});

for (c=0;c<=100;++c) {
  c<10?c='0'+c:'';
  $stateProvider
  	.state('challenges-' + c, {
			url: '/' + c,
			templateUrl: 'challenges/views/challenges/' + c + '.html'
		})
};

})

.controller('sidebarCtrl', function() {
	var main = this;
	var check = 'fa fa-check fa-lg';	
	main.challenges = [
		{"num":"00", "info":['Name Generator', check]},
		{"num":"01", "info":['Higher/Lower', '']},
		{"num":"02", "info":['Temperature Converter', '']},
		{"num":"03", "info":['Calculate Age in Seconds', '']},
		{"num":"04", "info":['Encrypt/Decrypt Algorithm', '']},
		{"num":"05", "info":['FizzBuzz', '']},
		{"num":"06", "info":['Rock Paper Scissors', '']},
		{"num":"07", "info":['Hangman', '']},
		{"num":"08", "info":['Love Calculator', '']},
		{"num":"09", "info":['Pseudorandom Sentence Generator', '']},
		{"num":"10", "info":['Password Generator', '']},
		{"num":"11", "info":['Atomically Correct Internet Time', '']},
		{"num":"12", "info":['Haiku Generator', '']},
		{"num":"13", "info":['Magic Eight Ball', '']},
		{"num":"14", "info":['Collatz Conjecture', '']},
		{"num":"15", "info":['Reverse a String', '']},
		{"num":"16", "info":['Simple File Explorer', '']},
		{"num":"17", "info":['Count Words in a String', '']},
		{"num":"18", "info":['Minesweeper', '']},
		{"num":"19", "info":['Connect Four', '']},
		{"num":"20", "info":['BMI Calculator', '']},
		{"num":"21", "info":['4chan Thread Downloader (Images)', '']},
		{"num":"22", "info":['Sudoku Generator/Solver', '']},
		{"num":"23", "info":['Maze Generator/Solver', '']},
		{"num":"24", "info":['Decimal/Binary Converter', '']},
		{"num":"25", "info":['Picross Solver', '']},
		{"num":"26", "info":['Eulerian Path', '']},
		{"num":"27", "info":['Fibonnaci Sequence', '']},
		{"num":"28", "info":['Calculate & Print 100 Factorial', '']},
		{"num":"29", "info":['Create a Cipher Encrypt/Decrypt Tool', '']},
		{"num":"30", "info":['Blackjack', '']},
		{"num":"31", "info":['Dungeons & Dragons with AI', '']},
		{"num":"32", "info":['Generate ASCII Tree', '']},
		{"num":"33", "info":['Use Genetic Algorithm on Polygons', '']},
		{"num":"34", "info":['Benford\'s Law', '']},
		{"num":"35", "info":['Currency Converter', '']},
		{"num":"36", "info":['Static Website Generator', '']},
		{"num":"37", "info":['Crossword Game', '']},
		{"num":"38", "info":['Scientific Calculator', '']},
		{"num":"39", "info":['Perlin Noise Algorithm', '']},
		{"num":"40", "info":['Image Viewer', '']},
		{"num":"41", "info":['ASCII Digital Clock', '']},
		{"num":"42", "info":['Dijkstra\'s Algorithm', '']},
		{"num":"43", "info":['Text/Morse Translator', '']},
		{"num":"44", "info":['Tic-Tac-Toe', '']},
		{"num":"45", "info":['Snake Game', '']},
		{"num":"46", "info":['FTP Client', '']},
		{"num":"47", "info":['Telnet Server', '']},
		{"num":"48", "info":['IMP Interpreter', '']},
		{"num":"49", "info":['Tetris', '']},
		{"num":"50", "info":['Conways Game of Life', '']},
		{"num":"51", "info":['Web Crawler', '']},
		{"num":"52", "info":['Text Editor', '']},
		{"num":"53", "info":['RSS Feed Creator', '']},
		{"num":"54", "info":['Evaluate Binomial Coefficents', '']},
		{"num":"55", "info":['RPN Calculator', '']},
		{"num":"56", "info":['Mandlebrot Set', '']},
		{"num":"57", "info":['Sorting Algorithm', '']},
		{"num":"58", "info":['Convert Markup->HTML', '']},
		{"num":"59", "info":['N Queens Problem', '']},
		{"num":"60", "info":['Credential Validator', '']},
		{"num":"61", "info":['Linked List', '']},
		{"num":"62", "info":['Mastermind', '']},
		{"num":"63", "info":['Random Image Generator', '']},
		{"num":"64", "info":['Ulam Spiral', '']},
		{"num":"65", "info":['Klingon Translator', '']},
		{"num":"66", "info":['Prime Number Generator using a Sieve', '']},
		{"num":"67", "info":['Markov Chain', '']},
		{"num":"68", "info":['Graphical Analog Clock + GUI', '']},
		{"num":"69", "info":['Send Strings Between 2 Languages', '']},
		{"num":"70", "info":['Triangle Number Calculator', '']},
		{"num":"71", "info":['Calculate Typing Speed', '']},
		{"num":"72", "info":['Name Art in ASCII', '']},
		{"num":"73", "info":['Towers of Hanoi', '']},
		{"num":"74", "info":['Quine', '']},
		{"num":"75", "info":['IRC Bot', '']},
		{"num":"76", "info":['Brainfuck Interpreter', '']},
		{"num":"77", "info":['Visualisation of #57', '']},
		{"num":"78", "info":['Chip-8 Emulator', '']},
		{"num":"79", "info":['Geekcode Generator', '']},
		{"num":"80", "info":['Define, Translate, & Rotate a Polygon', '']},
		{"num":"81", "info":['Pong with Variable Vectors', '']},
		{"num":"82", "info":['Battleships with AI', '']},
		{"num":"83", "info":['Simple Paint Program', '']},
		{"num":"84", "info":['TCP Chat with Basic Encryption (XOR)', '']},
		{"num":"85", "info":['Incremental Economy Simulator', '']},
		{"num":"86", "info":['Encrypt/Decrypt Text into an Image', '']},
		{"num":"87", "info":['Pascal\'s Triangle', '']},
		{"num":"88", "info":['Sine Wave Generator', '']},
		{"num":"89", "info":['Basic HTML Web Browser', '']},
		{"num":"90", "info":['Flappy Bird', '']},
		{"num":"91", "info":['Fast Fourier Transform', '']},
		{"num":"92", "info":['Method Ringing Simulator', '']},
		{"num":"93", "info":['Binary Search', '']},
		{"num":"94", "info":['Nintendo Oil Panic', '']},
		{"num":"95", "info":['Sierpinski Triangle Generator', '']},
		{"num":"96", "info":['Calculate Dot & Cross of 2 Vectors', '']},
		{"num":"97", "info":['Little Man Computer Simulator', '']},
		{"num":"98", "info":['Basic Lisp Interpreter', '']},
		{"num":"99", "info":['Enigma Machine Simulator', '']}
		];
})
