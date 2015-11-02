$(function() {
	$( "#celsius" ).on('change keyup paste', function() {
    $( "#fahrenheit " ).val($(this).val() * 9 / 5 + 32);
	});
  $( "#fahrenheit" ).on('change keyup paste', function() {
    $( "#celsius " ).val(($(this).val()-32) * 5 / 9);
	});
});
