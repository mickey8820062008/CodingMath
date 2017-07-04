// part 3 //
window.onload = function() {
	console.log("lemon");
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		particles = [],
		numParticles = 100;
		
		for(var i = 0; i < numParticles; i++){
			particles.push(particle.create(width / 2, height / 2, Math.random() * 4 + 1, Math.random() * Math.PI * 2));
		}

		update();

		function update() {
			context.clearRect(0, 0, width, height);

			for(var i = 0; i < numParticles; i++){
				var p = particles[i];
				
				p.update();
				
				context.beginPath();
				context.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
				context.fill();				
			}

			requestAnimationFrame(update);
		}
};


// Part 2 //
/*window.onload = function() {
	console.log("lemon");
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		p = particle.create(100, 100, 3, Math.PI / 6);
		
		update();

		function update() {
			context.clearRect(0, 0, width, height);

			p.update();
			
			context.beginPath();
			context.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
			context.fill();

			requestAnimationFrame(update);
		}
};*/


// Part 1 //

/*window.onload = function() {
	console.log("lemon");
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		position = vector.create(100, 100),
		velocity = vector.create(0, 0);

		velocity.setLength(3);
		velocity.setAngle(Math.PI / 6);

		
		update();

		function update() {
			context.clearRect(0, 0, width, height);

			position.addTo(velocity);
			context.beginPath();
			context.arc(position.getX(), position.getY(), 10, 0, Math.PI * 2, false);
			context.fill();

			requestAnimationFrame(update);
		}
};*/