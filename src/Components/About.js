
const About = () => {
	// contnts for about page.
	return (
		<div className="min-h-screen flex flex-col items-start justify-center">
			<div id="about" className="flex flex-col items-start bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
				<img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/img/pp.jpg" alt="" />
				<div className="flex flex-col justify-between p-4 leading-normal">
					<div className="intro">
						<h1 className="text-3xl font-press-start py-5 my-5">Who am I?</h1>
						<p className="text-sm leading-relaxed">
							I'm a seasoned full-stack developer with over a decade of experience in developing web applications and websites using popular technologies such as ReactJs, NodeJs, WordPress, and MySQL. I've successfully delivered more than 100 web projects to clients, implementing CD/CI pipelines and zero downtime deployments to achieve seamless continuous development and deployment.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;