import Nav from "./Nav";
import PrimaryNav from "./PrimaryNav";
import Tabs from "./Tabs";
import { useEffect } from "react";

// Initialization for ES Users
import {
	Tab,
	Animate,
	initTE,
	Carousel,
  } from "tw-elements";

const Main = ( props ) => {
	useEffect(() => {
		initTE({ Tab, Animate, Carousel });
	}, []);

	return (
		<div className="">

			<main className={'transition-all ease-in-out delay-150 main bplv-pr-' + props.tab}>
				<div className="pri-nav">
					<PrimaryNav />
				</div>

				<aside className="aside relative">
					<Nav />
				</aside>
				<div className="container mx-auto flex justify-center">
					<div className="mt-10 px-4 w-full text-left mx-4">
						<Tabs />
					</div>
				</div>
			</main>
		</div>
	);
}


export default Main;