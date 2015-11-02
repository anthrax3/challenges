$(function() {
	$( ".fa" ).click(function() {
	$( "#result" ).text("You chose " + $( this ).parent().text().toLowerCase());
	});
});
