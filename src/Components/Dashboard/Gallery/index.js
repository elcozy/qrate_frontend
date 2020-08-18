import React, { useState, useEffect } from "react";
import FixedNavBar from "../FixedNavBar";
import TopBar from "../TopBar";
import Nav from "./Nav";
import Featured from "./featured";
import Interview from "./interview";



const Gallery = () => {
	const [display, setDisplay] = useState("Featured");

	function switchDisplay (display) {
		if (display === "Featured") {
			setDisplay("Interview");
		} else {
			setDisplay("Featured");
		}
	}

	document.title = "Gallery";

	return (
		<div className="dashboard">
			<div className="grid-layout">
				<FixedNavBar />
				<div className="px-md-5 content">
					<TopBar />
					<Nav display={display} onClick={switchDisplay} />
					{display === "Featured" ? <Featured /> : <Interview />}
				</div>
			</div>
		</div>
	);
};

export default Gallery;
