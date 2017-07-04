// part 1 //

/*var v1 = vector.create(10, 5);

// console.log(v1.getX());
// console.log(v1.getY());
// console.log(v1.getAngle());
// console.log(v1.getLength());

v1.setAngle(Math.PI / 6);
v1.setLength(100);

console.log(v1.getX());
console.log(v1.getY());*/


// part2 //

/*var v1 = vector.create(10, 5),
	v2 = vector.create(3, 4),
	v3 = v1.add(v2),
	v4 = v1.multiply(2);

console.log(v1.getX(), v1.getY());
console.log(v2.getX(), v2.getY());
console.log(v3.getX(), v3.getY());
console.log(v4.getX(), v4.getY());*/


// Part3 //

var v1 = vector.create(10, 5),
	v2 = vector.create(3, 4);

v1.addTo(v2);
console.log(v1.getX(), v1.getY());
