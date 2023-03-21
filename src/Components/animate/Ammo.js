export default class Ammo {
	constructor( x, y ) {
		this.x = x;
		this.y = y;
	}

	draw( c ) {
		c.fillStyle = "#fac2c1";
		c.fillRect(this.x, this.y - 25, 15, 3);
		c.fillRect(this.x, this.y -15, 15, 3);
	}
	update( c ) {
		this.draw(c);
		this.x += 5;
	}
}