$(function() {
	$( "#fizzbuzz" ).click(function() {
	  if ($( "#fizzbuzz" ).text() != 'Reset') {
      for(i=1;i<=100;++i) {
        $( ".fizzbuzz" ).append(((i%3?'':'Fizz')+(i%5?'':'Buzz')||i)+"<br />");
       }
       $( "#fizzbuzz" ).text('Reset');
    } else {
    	$( ".fizzbuzz" ).text('');
			$( "#fizzbuzz" ).text('Generate FizzBuzz');
    }
	});
});
