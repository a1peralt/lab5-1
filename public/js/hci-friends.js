'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");

	$(".0").click( function(e) {
		console.log(this.className);
		e.preventDefault();
	$(".0 h3").text(anagrammedName($(this).text()));

	});

	$(".1").click( function(e) {
		console.log(this.className);
		e.preventDefault();
	$(".1 h3").text(anagrammedName($(this).text()));

	});

	$(".2").click( function(e) {
		console.log(this.className);
		e.preventDefault();
	$(".2 h3").text(anagrammedName($(this).text()));

	});

	$(".3").click( function(e) {
		console.log(this.className);
		e.preventDefault();
	$(".3 h3").text(anagrammedName($(this).text()));

	});

	$(".4").click( function(e) {
		console.log(this.className);
		e.preventDefault();
	$(".4 h3").text(anagrammedName($(this).text()));

	});

	$(".5").click( function(e) {
		console.log(this.className);
		e.preventDefault();
	$(".5 h3").text(anagrammedName($(this).text()));

	});


}

function anagrammedName(name) {
	// Thanks, Internet Anagram Server!
	
	if (name == "Doug Engelbart") {
		return "Notable Grudge";
	} 
	else if (name == "Ivan Sutherland") {
		return "Vandal Heist Run";
	}
	else if (name == "JCR Licklider") {
		return "Crick Rid Jell";
	}
	else if (name == "Vannevar Bush") {
		return "Ravens Van Hub";
	}
	else if (name == "Alan C. Kay") {
		return "Canal Yak";
	}
	else if (name == "Allen Newell") {
		return "Ellen All New";
	}
	else if (name == "Lucy Suchman") {
		return "Lunacy Chums";
	}
	else if (name == "Grace Hopper") {
		return "Gear Chopper";
	}
	else {
		console.log(name + " not known for anagramming.");
		return name;
	}
}