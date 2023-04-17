
import { useContext } from 'react';
import TabContext from '../Store/tab-context';

const PrimaryNav = () => {
	const tabCtx = useContext( TabContext );

	return (
		<div className="primary-nav mt-3">
			<ul
			className="mr-4 flex list-none flex-col flex-wrap p-3"
			role="tablist"
			data-te-nav-ref>
				<li role="presentation" className="flex-grow text-center" onClick={()=>{ tabCtx.onTabChange('home') }}>
					<a
					href="#tabs-home03"
					className="hover:text-pr-5 transition ease-in my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-pr-2 dark:data-[te-nav-active]:text-pr-2"
					data-te-toggle="pill"
					data-te-target="#tabs-home03"
					data-te-nav-active
					role="tab"
					aria-controls="tabs-home03"
					aria-selected="true"
					>Home
					</a>
				</li>
				<li role="presentation" className="flex-grow text-center"  onClick={()=>{ tabCtx.onTabChange('about') }}>
					<a
					href="#tabs-profile03"
					className="hover:text-pr-5 transition ease-in focus:border-transparen my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-pr-2 dark:data-[te-nav-active]:text-pr-2"
					data-te-toggle="pill"
					data-te-target="#tabs-profile03"
					role="tab"
					aria-controls="tabs-profile03"
					aria-selected="false"
					>
						About
					</a>
				</li>
				<li role="presentation" className="flex-grow text-center"  onClick={()=>{ tabCtx.onTabChange('project') }}>
					<a
					href="#tabs-exp03"
					className="hover:text-pr-5 transition ease-in focus:border-transparen my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-pr-2 dark:data-[te-nav-active]:text-pr-2"
					data-te-toggle="pill"
					data-te-target="#tabs-exp03"
					role="tab"
					aria-controls="tabs-exp03"
					aria-selected="false"
					>
						Projects
					</a>
				</li>
			</ul>
		</div>
	);
}

export default PrimaryNav;