$(function() {
	var fizzbuzz = function() {
	for(i=0;i<100;)return((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i);
	}
	$( "#fizzbuzz" ).click(function() {
  	$( ".fizzbuzz" ).text(fizzbuzz());
	});
});
