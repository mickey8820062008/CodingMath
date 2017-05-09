window.onload = function() {
	console.log("lemon");
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight;

	var centerX = width * 0.5,
		centerY = height * 0.5,
		// feature 1 //
		offset = height * 0.4,
		// feature 2 //
		// offset = height * 0.4,
		// feature 3 //
		// baseRadius = 100,
		// offset = 50,
		// feature 4 //
		// baseAlpha = 0.5,
		// offset = 0.5,
		// general //
		speed = 0.05,
		angle = 0;

	render();

	function render() {
		// feature 1 //
		var y = centerY + Math.sin(angle) * offset;
		// feature 2 //
		// var y = centerY + Math.sin(angle) * offset;
		// var x = centerX + Math.cos(angle) * offset;
		// feature 3 //
		// var radius = baseRadius + Math.sin(angle) * offset;
		// feature 4 //
		// var alpha = baseAlpha + Math.sin(angle) * offset;

		context.clearRect(0, 0, width, height);
		context.beginPath();
		// feature 1 //
		context.arc(centerX, y, 50, 0, Math.PI * 2, false);
		// feature 2 //
		// context.arc(x, y, 50, 0, Math.PI * 2, false);
		// feature 3 //
		// context.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
		// feature 4 //
		// context.fillStyle = "rgba(0, 0, 0, "+ alpha +")";
		// context.arc(centerX, centerY, 100, 0, Math.PI * 2, false);
		context.fill();

		angle += speed;

		requestAnimationFrame(render);
	}
};