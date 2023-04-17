import React from 'react';
import Canvas from './Canvas';

function Header() {
	return (
		<div id="home" className="relative">
			<Canvas />
			<header className='header sm:right-0 sm:bottom-10-percent'>
				<div className="info">
					<h1 className='max-sm:text-xl text-6xl'> Howdy, I am <span className="bg-pr-3 font-press-start text-3xl p-3 max-sm:text-xl">Biplav<span className="blink text-3xl max-sm:text-xl">!</span></span></h1>
					<p className='py-1 mt-3 text-xl max-sm:text-md'> Full stack Web Engineer && in-shower life contemplator.</p>
					<p className='hidden py-1 mt-1 max-sm:flex'> Hit me on up on my socials! </p>
				</div>
			</header>
		</div>
  	);
}

export default Header;