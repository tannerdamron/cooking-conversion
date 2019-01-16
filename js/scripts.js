// ### Back-end ###

var convertGrams = function(num1){
	return num1 / 28.35;
}

var convertGal = function(num1){
	return num1 * 3.785;
}

var convertTb = function(num1){
	return num1 / 16;
}

 // ### UI ###

$(document).ready(function() {
	$("form#gramToOunce").submit(function(event) {
		event.preventDefault();
		var result = convertGrams($("#gto").val());
		$("#outputGto").text(result);
	});

	$("form#galToLit").submit(function(event) {
		event.preventDefault();
		var result = convertGal($("#gtl").val());
		$("#outputGtl").text(result);
	});

	$("form#tbToCup").submit(function(event) {
		event.preventDefault();
		var result = convertTb($("#ttc").val());
		$("#outputTtc").text(result);
	});

});
