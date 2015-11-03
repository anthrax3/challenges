$(function() {
	function reverseStr() {
		str = $( "#input " ).val();
    $( ".reverseStr" ).text(str + " reversed is " + str.split('').reverse().join(''));
	}
	$( "#reverseStr" ).click(function() {
		reverseStr();
	});
});
