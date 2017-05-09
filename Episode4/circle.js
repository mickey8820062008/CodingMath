window.onload = function() {
	console.log("lemon");
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight;

	var centerX = width * 0.5,
		centerY = height * 0.5,
		radius = 400,
		speed = 0.05,
		angle = 0;

	var xRadius = 200,
		yRadius = 300,
		xAngle = 0,
		yAngle = 0,
		xSpeed = 0.1,
		ySpeed = 0.131;

	var objAngle = 0,
		objRadius = 300,
		numObjects = 10,
		slice = Math.PI * 2 / numObjects;

	
	render();

	function render() {
		var Circle_y = centerY + Math.sin(angle) * radius;
		var Circle_x = centerX + Math.cos(angle) * radius;
		var Lissajous_x = centerX + Math.cos(xAngle) * xRadius;
		var Lissajous_y = centerY + Math.sin(yAngle) * yRadius;

		context.clearRect(0, 0, width, height);
		context.beginPath();
		context.arc(Circle_x, Circle_y, 40, 0, Math.PI * 2, false);
		context.arc(Lissajous_x, Lissajous_y, 10, 0, Math.PI * 2, false);
		context.fill();

		angle += speed;
		xAngle += xSpeed;
		yAngle += ySpeed;

		requestAnimationFrame(render);

		// a round of obj //	
		for(var i = 0; i < numObjects; i += 1){
			var objAngle = slice * i;
			var obj_x = centerX + Math.cos(objAngle) * objRadius;
			var obj_y = centerY + Math.sin(objAngle) * objRadius;
			context.beginPath();
			context.arc(obj_x, obj_y, 20, 0, Math.PI * 2, false);
			context.fill();
		}
	}
};