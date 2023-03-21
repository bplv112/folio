import React from 'react';
import Canvas from './Canvas';

function Header() {
	return (
		<div id="home" className='min-h-screen'>
			<Canvas />
			<header className='min-h-screen flex flex-col items-start pt-20-percent justify-center'>
				<div className="info">
					<h1 className='text-3xl'> Howdy, I am <span className="bg-pr-3 font-press-start text-lg p-3">Biplav<span className="blink text-2xl">!</span></span></h1>
					<p className='py-1 my-1'> In a love-hate relationship with programming.</p>
				</div>
			</header>
		</div>
  	);
}

export default Header;