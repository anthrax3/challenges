$(function() {
	$( "#genPass" ).click(function() {
		$( ".genPass" ).text(Math.random().toString(36).slice(-8));
	});
});
