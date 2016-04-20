
	function calculate() {

		var weight = $('#weight').val();
		var planet = $('#select').val();
		var results = weight * planet;


		$('#result').append("<p>If you were on Earth, you would weigh " + Math.round(results) +"lbs! </p>");
		console.log(results);
}