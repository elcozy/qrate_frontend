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
