import github from './img/github.svg';
const Projects = () => {
	return(
        <div className="projects">
           <section className="">
            <h3 className="section-title text-6xl p-5 m-5 text-center"> Checkout my recent <span className="bg-pr-3 font-press-start text-3xl p-3">work<span className="blink text-2xl">!</span></span></h3>

            <div className="flex flex-wrap mx-auto md:flex-nowrap p-12 gap-6">
                <article
                className="flex-col hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] transition-all ease-in-out delay-150"
                >
                <div className="rounded-[10px] bplv-pr-project p-4 sm:p-6 relative">
                    <a href="https://github.com/bplv112/wp-local-addon-wpcli">
                        <div className="icon absolute top-5 right-10">
                            <img src={github} />
                        </div>
                        <h3 className="mt-0.5 text-xl font-medium text-gray-900">
                            WPCLI Fixer
                        </h3>
                    </a>

                    <div className="mt-4 flex flex-wrap gap-1">
                        <p className="">
                           WPCLI fixer fixes the wp-cli errors in local by flywheel and makes the wp-cli work on all your terminals removing the need of sshing into the dev env.
                        </p>
                    </div>
                </div>
                </article>

                <article
                className="flex-col hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] transition-all ease-in-out delay-150"
                >
                <div className="rounded-[10px] bplv-pr-project p-4 sm:p-6 relative">

                    <a href="https://github.com/bplv112/spam-buster">
                        <div className="icon absolute top-5 right-10">
                            <img src={github} />
                        </div>
                        <h3 className="mt-0.5 text-xl font-medium text-gray-900">
                            Discord Spam Buster
                        </h3>
                    </a>

                    <div className="mt-4 flex flex-wrap gap-1">
                        <p className="">
                           A anti-spam bot for discord that catches and bans users spreading spam and malicious contents on discord servers.
                        </p>
                    </div>
                </div>
                </article>

            </div>
            <h2 className="text-3xl text-center font-bold mb-12">View more on <a href="https://github.com/bplv112" className='hover:text-pr-5 transition ease-in'><u className="">Github</u></a></h2>
            </section>
        </div>
	);
}

export default Projects;