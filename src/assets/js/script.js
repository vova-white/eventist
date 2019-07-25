$(document).ready(function(){
	var input = document.querySelector("#phone");

  var iti = window.intlTelInput(input, {
  nationalMode: true,
  utilsScript: "utils.js?1562189064761" // just for formatting/placeholders etc
});

  var handleChange = function() {
  var text = (iti.isValidNumber()) ? "International: " + iti.getNumber() : "Please enter a number below";
  var textNode = document.createTextNode(text);
  output.innerHTML = "";
  output.appendChild(textNode);
};

// listen to "keyup", but also "change" to update when the user selects a country
input.addEventListener('change', handleChange);
input.addEventListener('keyup', handleChange);

	$(".sort__button>a").on("click" ,function(e){
		e.preventDefault();
		$(".overlay__modal").fadeIn(300);
		$(".sort__modal").fadeIn(300);
		$("body").css("overflow-y" , "hidden");
	});

	$(".bottom__sort>a").on("click" , function(e){
		$(".overlay__modal").fadeOut(300);
		$(".sort__modal").fadeOut(300);
		$("body").css("overflow-y" , "auto");
	});
	var slider = document.getElementById('slider');

	if ($("#slider").length) {
		noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});
	slider.noUiSlider.on('change.one', function () { 
		$("#span1").text(Math.round(+$("#slider .noUi-handle-lower").attr("aria-valuemin") + +$("#slider .noUi-handle-lower").attr("aria-valuenow")).toFixed(0) + "%");
		$("#span2").text(Math.round(+$("#slider .noUi-handle-upper ").attr("aria-valuenow") - +$("#slider .noUi-handle-lower").attr("aria-valuenow")).toFixed(0) +  "%");
		$("#span3").text(Math.round(+$("#slider .noUi-handle-upper ").attr("aria-valuemax") - +$("#slider .noUi-handle-upper").attr("aria-valuenow")).toFixed(0) +  "%");
	});
	}

});