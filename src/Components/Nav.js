
const Nav = () => {
	return (
		<div className="sidebar fixed right-0 top-3 pr-10-percent sm:pr-0 z-10">
			<nav className="m-3 p-3 text-left align-center text-xs leading-7 text-pr-6">
				<ul>
					<li className="p-2">
						<a href="https://github.com/bplv112/" className="hover:text-pr-5 transition ease-in">
							<svg className="h-4 w-4 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
						</a>
					</li>
					<li className="p-2">
						<a href="mailto:bplv.me@gmail.com" className="hover:text-pr-5 transition ease-in">
							<svg className="h-4 w-4 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />  <polyline points="22,6 12,13 2,6" /></svg>
						</a>
					</li>
					<li className="p-2">
						<a href="https://www.linkedin.com/in/bplv/" className="hover:text-pr-5 transition ease-in">
							<svg className="h-4 w-4 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
						</a>
					</li>
					<li className="p-2">
						<a href="https://www.instagram.com/beeppss" className="hover:text-pr-5 transition ease-in">
							<svg className="h-4 w-4 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
						</a>
					</li>
				</ul>
			</nav>
		</div>

	);
}

export default Nav;