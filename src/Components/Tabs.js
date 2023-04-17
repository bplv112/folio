
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";

function Tabs() {
	return (
        <div className="tabs">
            <div
            className="hidden opacity-100 transition-all duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-home03"
            role="tabpanel"
            aria-labelledby="tabs-home-tab03"
            data-te-tab-active>
			    <Header />
		    </div>
            <div
            className="hidden opacity-0 transition-all duration-250 ease-linear data-[te-tab-active]:block"
            id="tabs-profile03"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab03">
                <About />
            </div>
            <div
            className="flex flex-col items-end justify-center hidden opacity-0 transition-all duration-250 ease-linear data-[te-tab-active]:block"
            id="tabs-exp03"
            role="tabpanel"
            aria-labelledby="tabs-exp-tab03">
                <Projects />
            </div>
        </div>

  	);
}

export default Tabs;