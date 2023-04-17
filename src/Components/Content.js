import am from './img/am.svg';
const Content = () => {
	return(
		<div className="min-h-screen flex flex-col justify-center">
			<div
				className="flex self-start flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
				<img
					className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
					src={am}
					alt="" />
				<div className="flex flex-col justify-start p-6">
					<h5
					className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
					Backend Engineer
					</h5>
					<p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
					Awesome Motive.
					</p>

				</div>
			</div>

			<div
				className="flex self-end flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
				<img
					className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
					src={am}
					alt="" />
				<div className="flex flex-col justify-start p-6">
					<h5
					className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
					Backend Engineer
					</h5>
					<p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
					Awesome Motive.
					</p>
				</div>
			</div>

			<div
				className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
				<img
					className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
					src={am}
					alt="" />
				<div className="flex flex-col justify-start p-6">
					<h5
					className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
					Backend Engineer
					</h5>
					<p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
					Awesome Motive.
					</p>
				</div>
			</div>

			<div
				className="flex flex-col self-end rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
				<img
					className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
					src={am}
					alt="" />
				<div className="flex flex-col justify-start p-6">
					<h5
					className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
					Backend Engineer
					</h5>
					<p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
					Awesome Motive.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Content;