/**
 * Draw the Asteroids.
 * @param {obj} c - Canvas context.
 */
export default class Asteroids {
	constructor( x, y ) {
		this.x = x;
		this.y = y + 29;
		this.angle = 45;
		this.rotation = 0.02;
		let randomizer = (Math.floor(Math.random() * 2) == 0);
		if(randomizer){
			this.rotation = 0.02;
		}else{
			this.rotation = -0.02;
		}
	}

	draw( c ) {
		const img = new Image();
		let self  = this;
		img.src   = require('./assets/asteroid.png');
		img.onload = function() {
			c.save();
			c.translate(self.x, self.y);
			c.rotate(-self.angle + Math.PI/2.0);
			c.translate(-self.x, -self.y);
			c.drawImage(img,self.x,self.y,60,60);
			c.restore();
			// c.drawImage(img, self.x, self.y, 80, 80);
		}
	}

	update( c ) {
		this.draw(c);
		this.x -= 2;
		this.angle += this.rotation;
	}
}