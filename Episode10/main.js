// Part 2 //
window.onload = function() {
	console.log("lemon");
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		ship = particle.create(width / 2, height / 2, 0, 0),
		thrust = vector.create(0, 0),
		angle = 0,
		turningLeft = false,
		turningRight = false,
		thrusting = false;
		
		update();

		document.body.addEventListener("keydown", function(event) {
			// console.log(event.keyCode);
			switch(event.keyCode) {
				case 38: // up
					thrusting = true;
					break;

				case 37: // left
					turningLeft = true;
					break;

				case 39: // right
					turningRight = true;
					break;

				default:
					break;
			}
		});


		document.body.addEventListener("keyup", function(event) {
			// console.log(event.keyCode);
			switch(event.keyCode) {
				case 38: // up
					thrusting = false;
					break;

				case 37: // left
					turningLeft = false;
					break;

				case 39: // right
					turningRight = false;
					break;

				default:
					break;
			}
		});

		function update() {
			context.clearRect(0, 0, width, height);

			if(turningLeft) {
				angle -= 0.05;
			}

			if(turningRight) {
				angle += 0.05;
			}

			thrust.setAngle(angle);

			if(thrusting) {
				thrust.setLength(0.1);
			}
			else {
				thrust.setLength(0);
			}

			ship.accelerate(thrust);
			ship.update();

			context.save();
			context.translate(ship.position.getX(), ship.position.getY());
			context.rotate(angle);

			context.beginPath();
			context.moveTo(10, 0);
			context.lineTo(-10, -7);
			context.lineTo(-10, 7);
			context.lineTo(10, 0);
			if(thrusting) {
				if(Math.random() > 0.5) {
					context.moveTo(-12, 0);
					context.lineTo(-23, 0);
					context.moveTo(-10, 3);
					context.lineTo(-18, 1);
					context.moveTo(-10, -3);
					context.lineTo(-18, -1);
				}
				else{
					context.moveTo(-12, 0);
					context.lineTo(-18, 0);
					context.moveTo(-10, 2);
					context.lineTo(-15, 1);
					context.moveTo(-10, -2);
					context.lineTo(-15, -1);
				}
				
			}
			context.stroke();

			context.restore();

			if(ship.position.getX() > width){
				ship.position.setX(0);
			}

			if(ship.position.getX() < 0){
				ship.position.setX(width);
			}

			if(ship.position.getY() > height){
				ship.position.setY(0);
			}

			if(ship.position.getY() < 0){
				ship.position.setY(height);
			}

			requestAnimationFrame(update);
		}
};

// Part 1 //
/*window.onload = function() {
	console.log("lemon");
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		ship = particle.create(width / 2, height / 2, 0, 0),
		thrust = vector.create(0, 0);
		
		update();

		document.body.addEventListener("keydown", function(event) {
			// console.log(event.keyCode);
			switch(event.keyCode) {
				case 38: // up
					thrust.setY(-0.1);
					break;

				case 40: // down
					thrust.setY(0.1);
					break;

				case 37: // left
					thrust.setX(-0.1);
					break;

				case 39: // right
					thrust.setX(0.1);
					break;

				default:
					break;
			}
		});


		document.body.addEventListener("keyup", function(event) {
			// console.log(event.keyCode);
			switch(event.keyCode) {
				case 38: // up
					thrust.setY(0);
					break;

				case 40: // down
					thrust.setY(0);
					break;

				case 37: // left
					thrust.setX(0);
					break;

				case 39: // right
					thrust.setX(0);
					break;

				default:
					break;
			}
		});

		function update() {
			context.clearRect(0, 0, width, height);

			ship.accelerate(thrust);
			ship.update();

			context.beginPath();
			context.arc(ship.position.getX(), ship.position.getY(), 10, 0, Math.PI * 2, false);
			context.fill();

			if(ship.position.getX() > width){
				ship.position.setX(0);
			}

			if(ship.position.getX() < 0){
				ship.position.setX(width);
			}

			if(ship.position.getY() > height){
				ship.position.setY(0);
			}

			if(ship.position.getY() < 0){
				ship.position.setY(height);
			}

			requestAnimationFrame(update);
		}
};*/