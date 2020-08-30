import React from "react";
import FixedNavBar from "../FixedNavBar";
import TopBar from "../TopBar";
import Details from "./Details";

const Categories = () => {
	document.title = "Categories";
	return (
		<div className="dashboard">
			<div className="grid-layout">
				<FixedNavBar />
				<div className="px-md-5 content">
					<TopBar />
					<Details />
				</div>
			</div>
		</div>
	);
};

export default Categories;
