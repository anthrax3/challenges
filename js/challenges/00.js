$(function() {
	var namesMale = [
	"Adam", "Barry", "Colin",
	"Dean", "Ethan", "Fred"
	];
	var namesFemale = [
	"Anna", "Beth", "Carol",
	"Daisy", "Emily", "Felicity"
	];
	var randomName = function(arr) {
		return arr[0];
	}
	$( "#name-male" ).click(function() {
		console.log('#name-male clicked');
  	$(".name-male").text(randomName(namesMale));
	});
	$( "#name-female" ).click(function() {
		console.log('#name-female clicked');
  	$(".name-female").text("Mary");
	});
});
