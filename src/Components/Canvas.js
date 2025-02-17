import React from 'react';
import Player from './animate/Player';
import Ammo from './animate/Ammo';
import Asteroids from './animate/Asteroids';
import Boom from './animate/Boom';
import Stars from './animate/Stars';

export default function Canvas() {
	const canvas = React.useRef(),
	position = {
		x: 100,
		y: 100
	};

	let asteroidX = 1100;

	let speed = 0.3;
	const Ammos = [];
	const Rocks = [];
	const Bombs = [];
	const Bg    = [];

	const [ height, setHeight ] = React.useState(null);
	const [ width, setWidth ] = React.useState(null);
	const div = React.useCallback(node => {
	  if (node !== null) {
		setHeight(node.getBoundingClientRect().height);
		setWidth(node.getBoundingClientRect().width);
	  }
	}, []);
	console.log(div);
	/**
	 * Animate the spaceship.
	 */
	const animate = (c) => {
		c.width  = window.innerWidth;
		c.height = window.innerHeight;
		Player( c, position.x, position.y );

		if( position.y > 300 ) {
			speed = -speed;
		} else if ( position.y < 80 ) {
			speed = -speed;
		}
		const bgY =  Math.random() * window.innerHeight;
		let bgX =  Math.random() * window.innerWidth;

		if( bgY < position.y || ( bgY > position.y && bgY > position.y + 50 ) ) {
			Bg.push( new Stars( bgX, bgY, 5, 1 ) );
		}
		// animate ammo
		Ammos.forEach(fire => {
			fire.update(c);
		});

		// animate asteroids
		Rocks.forEach(fire => {
			fire.update(c);

			// remove if getting too close to the left side of the screen.
			if( fire.x < 400 ) {
				Rocks.shift();
			}

			// remove if gets beamed.
			Ammos.forEach((beam, index) => {
				if( beam.x > fire.x - 40 ) {
					Rocks.shift();
					Ammos.splice(index, 1);
					for( let i = 0; i < 10; i++){
						Bombs.push( new Boom(fire.x, fire.y, {x:(Math.random() - 0.5)*2, y:(Math.random() - 0.5)*2}, Math.random() * 10) );
					}
				}
			});
		});

		// animate boom
		Bombs.forEach(bomb => {
			if( bomb.opacity < 0 ) {
				Bombs.shift();
			} else {
				bomb.update(c);
			}
		});

		Bg.forEach(bomb => {
			if( bomb.opacity < 0 ) {
				Bombs.shift();
			} else {
				bomb.update(c);
			}
		});
		// for( let i = 0; i < 10; i++){
		// 	Bombs.push( new Boom(Math.random() * c.width, Math.random() * c.height,{x:1,y:0}, Math.random() * 10) );
		// }
		// console.log(Bombs);

		position.y += speed;
	}

	/**
	 * Wait for the dom mount to run animate.
	 */
	React.useEffect(() => {
		console.log('here');
		const c = canvas.current.getContext('2d');

		let animationFrameId;
		let interval;

		//Our draw came here
		const render = () => {
		  animate(c);
		  animationFrameId = window.requestAnimationFrame(render);
		}

		interval = setInterval(() => {
			Ammos.push( new Ammo(position.x + 100, position.y + 70) );
			Rocks.push( new Asteroids(asteroidX, position.y + 50) );
		}, 2000);

		render();

		window.addEventListener('blur', (e) => {
			console.log('blur');
			clearInterval(interval);
			window.cancelAnimationFrame(animationFrameId);
		});

		window.addEventListener('focus', (e) => {

			interval = setInterval(() => {
				Ammos.push( new Ammo(position.x + 100, position.y + 70) );
				Rocks.push( new Asteroids(asteroidX, position.y + 50) );
			}, 2000);
			render();
		});

		return () => {
		 <></>
		}

	}, []);

	return (
		<div ref={div} className="h-80screen canvas max-h-screen max-w-100-percent h-100-percent">
			<canvas id="arcade" ref={canvas} width={width} height={height - 200}></canvas>
		</div>
	);

}
