export default class Stars {
	constructor( x, y, velocity, radius ) {
		this.x = x;
		this.y = y;
		this.velocity = 2;
	}

	draw( c ) {
		c.fillStyle = "#EEEEEE";
		c.fillRect(this.x, this.y, 1, 1);

	}
	update( c ) {
		this.draw(c);
		this.x -= this.velocity;
	}
}

