$(function() {
	$( "#name-male" ).click(function() {
		console.log('#name-male clicked');
  	$(".name-male").text("John");
	});
	$( "#name-female" ).click(function() {
		console.log('#name-female clicked');
  	$(".name-female").text("Mary");
	});
});
