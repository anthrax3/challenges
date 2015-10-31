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
		return (arr[(Math.floor(Math.random() * arr.length))]);
	}
	$( "#name-male" ).click(function() {
  	$(".name-male").text(randomName(namesMale));
	});
	$( "#name-female" ).click(function() {
  	$(".name-female").text(randomName(namesFemale));
	});
});
