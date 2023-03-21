export default class Boom {
	constructor( x, y, velocity, radius ) {
		this.x = x;
		this.y = y;
		this.velocity = velocity;
		this.radius = radius;
		this.opacity = 1;
	}

	draw( c ) {
		c.save();
		c.globalAlpha = this.opacity;
		c.fillStyle = "#cfcfcf";
		c.fillRect(this.x, this.y, this.radius, 1);
		c.restore();
	}
	update( c ) {
		this.draw(c);
		this.x -= this.velocity.x;
		this.y -= this.velocity.y;
		this.opacity -= 0.01;
	}
}

