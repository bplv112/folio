/**
 * Draw the spaceship.
 * @param {obj} c - Canvas context.
 */
const Player = ( c, x, y ) => {
	const img = new Image();
	img.src   = require('./assets/ship.png');
	img.onload = function() {
		c.clearRect( 0, 0, c.width, c.height );
		c.drawImage(img, x, y, 100, 100);
	}
}

export default Player;