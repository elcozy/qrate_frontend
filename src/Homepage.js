import React, { useState } from "react";

// Components
import SecondHomepage from "./Components/Homepage/SecondHomepage";
import ThirdHomepage from "./Components/Homepage/ThirdHomepage";
import FourthHomepage from "./Components/Homepage/FourthHomepage";
import FifthHomepage from "./Components/Homepage/FifthHomepage";
import SixthHomepage from "./Components/Homepage/SixthHomepage";
import SeventhHomepage from "./Components/Homepage/SeventhHomepage";
import HomepageNavigator from "./Components/Homepage/HomepageNavigator";
import HomepageHeader from "./Components/Homepage/HomepageHeader";
import FirstHomepage from "./Components/Homepage/FirstHomepage";



const Homepage = () => {
	const [showComponent, setWhichComponentToShow] = useState("StartPage");
	const [displayNext, setDisplayNext] = useState("FirstPage");

	document.title = "Qrate";

	
	// For Scrolling

	

	// useEffect(() => {
	// 	const components = ["FirstPage", "SecondPage", "ThirdPage", "FourthPage", "FifthPage", "SixthPage", "SeventhPage"];
	// 	const pages = [
	// 		"FirstHomepage",
	// 		"SecondHomepage",
	// 		"ThirdHomepage",
	// 		"FourthHomepage",
	// 		"FifthHomepage",
	// 		"SixthHomepage",
	// 		"SeventhHomepage",
	// 	];
	// 	const idlePeriod = 100;
	// 	const animationDuration = 800;

	// 	var lastAnimation = 0;
	// 	let index = 0;

	// 	function scroll(e) {
	// 		var delta = e.wheelDelta;
	// 		var timeNow = new Date().getTime();
	
	// 		const changeComponent = (index, state) => {
	// 			if (state === "show") {
	// 				setDisplayNext(components[index]);
	// 			}
	// 		};
	
	// 		if (timeNow - lastAnimation < idlePeriod + animationDuration) {
	// 			// e.preventDefault();
	// 			return;
	// 		}
	
	// 		if (delta < 0) {
	// 			console.log("Scroll up");
	// 			if (index > 6) return;
	// 			index++;
	// 			pages.forEach((page, i) => {
	// 				if (i === index) {
	// 					changeComponent(i, "show");
	// 					// page.scrollIntoView({behaviour: "smooth"});
	// 					// page.scrollIntoView({block: 'end', behavior: 'smooth'});
	// 				}
	// 			});
	// 		} else console.log("Scroll down");
	
	// 		lastAnimation = timeNow;
	// 	}

	// 	document.addEventListener("wheel", scroll);

	// 	return () => document.removeEventListener("wheel", scroll);
	// });

	return (
		<div className="homepage">
			<HomepageHeader
				onClick={(value, route) => {
					setWhichComponentToShow(value);
					setDisplayNext(route);
				}}
			/>

			<FirstHomepage showComponent={showComponent} onClick={(value) => setWhichComponentToShow(value)} display={displayNext} />

			<SecondHomepage display={displayNext} />

			<ThirdHomepage display={displayNext} />

			<FourthHomepage display={displayNext} />

			<FifthHomepage display={displayNext} />

			<SixthHomepage display={displayNext} />

			<SeventhHomepage
				display={displayNext}
				onClick={(value, route) => {
					setWhichComponentToShow(value);
					setDisplayNext(route);
				}}
			/>

			<HomepageNavigator display={displayNext} onClick={(value) => setDisplayNext(value)} />
		</div>
	);
};

export default Homepage;
