
import aboutImage from './img/pp.jpg';
import am from './img/am.svg';
import elegant from './img/elegant.svg';
import wpmudev from './img/wpmudev.svg';
import olivers from './img/olivers.webp';
import webdev from './img/webdev.png';
import awesome from './img/awesome-motive.png';

const About = () => {
	// contnts for about page.
	return (
		// <div id="about" className="min-h-screen flex flex-col items-center justify-center">
		// 	<div className="">
		// 	</div>
		// 	{ /* About section */}
		// 	<div className="flex flex-col items-start bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
		// 		<img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/img/pp.jpg" alt="" />
		// 		<div className="flex flex-col justify-between p-4 leading-normal">
		// 			<div className="intro">
		// 				<h1 className="text-3xl font-press-start py-5 my-5">Who am I?</h1>
		// 				<p className="text-sm leading-relaxed">
		// 					I'm a seasoned full-stack developer with over a decade of experience in developing web applications and websites using popular technologies such as ReactJs, NodeJs, WordPress, and MySQL. I've successfully delivered more than 100 web projects to clients, implementing CD/CI pipelines and zero downtime deployments to achieve seamless continuous development and deployment.
		// 				</p>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
		<>
			<section className="">
				<div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
					<div className="mr-auto place-self-center lg:col-span-7">
						<h1 className="max-w-2xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-5xl dark:text-white">Who am I?</h1>
						<p className="max-w-2xl px-5 py-3 mr-3 mb-6 font-light text-md">I'm a seasoned full-stack developer with over a decade of experience in developing web applications and websites using popular technologies such as ReactJs, NodeJs, WordPress, and MySQL. I've successfully delivered more than 100 web projects to clients, implementing CD/CI pipelines and zero downtime deployments to achieve seamless continuous development and deployment.</p>
					</div>
					<div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
						<img src={aboutImage} alt="mockup" className="w-70-percent rounded"/>
					</div>
				</div>
			</section>
			<section className="mb-32 text-center">
				<h2 className="text-3xl font-bold mb-12">Worked with <u className="">Industry's Top Names</u></h2>
				<div className="grid items-center md:grid-cols-2 lg:grid-cols-5 px-6 gap-6">
					<div className="mb-12 lg:mb-0 mx-auto">
						<img
						src={awesome}
						className="img-fluid grayscal max-w-90px"
						/>
					</div>

					<div className="mb-12 lg:mb-0 mx-auto">
						<img
						src={elegant}
						className="img-fluid grayscale max-w-90px"
						/>
					</div>

					<div className="mb-12 lg:mb-0 mx-auto">
						<img
						src={olivers}
						className="img-fluid grayscale max-w-90px"
						/>
					</div>

					<div className="mb-12 lg:mb-0 mx-auto">
						<img
						src={wpmudev}
						className="img-fluid grayscale max-w-90px"
						alt="wpmu dev - logo"
						/>
					</div>

					<div className="mb-12 lg:mb-0 mx-auto">
						<img
						src={webdev}
						className="img-fluid grayscale max-w-90px"
						alt="Webdev - logo"
						/>
					</div>
				</div>
			</section>
		</>

	);
};

export default About;