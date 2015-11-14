$(function() {

	function recursion(n) {
	var recTimeA = performance.now();
    $( "#resultIt" ).html( "Iteration is best" );
    if(n <= 2) {
				//$( "#resultRec" ).append(1 + '<br />');
        return 1;
    } else {
$( "#resultRec" ).append(recursion(n - 1) + recursion(n - 2) + '<br />');
    }

    var recTimeB = performance.now();
    $( "#resultIt" ).append( "It took " + (recTimeB - recTimeA) + " ms." );
	}

	function iteration(n) {
	var itTimeA = performance.now();
	  var a = 0, b = 1, f = 1;
	  for(var i = 2; i <= n; i++) {
	      f = a + b;
	      a = b;
	      b = f;
				$( "#resultRec" ).append(f + '<br />');
	  }
        $( "#resultRec" ).append('mario');
     var itTimeB = performance.now();
    $( "#resultIt" ).append( "It took " + (itTimeB - itTimeA) + " ms." );

	}

	$( "#genFib" ).click(function() {
		recursion($( "#input" ).val());
		iteration($( "#input" ).val());
	});
});
