$(function() {

	function recursion() {
    $( "#resultIt" ).html( "Iteration is best" );
	}

		function iteration() {
    $( "#resultRec" ).html("Recursion is best");
	}

	$( "#genFib" ).click(function() {
		recursion();
		iteration();
	});
});
