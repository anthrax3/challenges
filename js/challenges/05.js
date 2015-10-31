$(function() {
	$( "#fizzbuzz" ).click(function() {
    for(i=1;i<=100;++i) {
      $( ".fizzbuzz" ).append(((i%3?'':'Fizz')+(i%5?'':'Buzz')||i)+"<br />");
    }
	});
});
