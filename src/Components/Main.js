import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Nav from "./Nav";
import PrimaryNav from "./PrimaryNav";
import About from "./About";

const Main = () => {
	return (
		<main className="main">
			<aside className="aside flex flex-col items-start fixed left-0 bottom-0 pr-10-percent">
				<Nav />
			</aside>
			<div className="container mx-auto flex justify-center">
				<div className="mt-10 px-4 max-w-screen-lg text-left mx-4">
					<Header />
					<About />
					<Content />
					<Footer />
				</div>
			</div>
			<PrimaryNav />
		</main>
	);
}


export default Main;