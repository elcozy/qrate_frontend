import React from "react";
import FixedNavBar from "./FixedNavBar";
import TopBar from "./TopBar";
import FeaturedArtist from './FeaturedArtist';
import Gallery from './Gallery';

const Dashboard = () => {
	document.title = "My Dashboard"
	return (
		<div className="dashboard">
			<div className="grid-layout">
				<FixedNavBar />
				<div className="px-md-5 content">
					<TopBar />
					<FeaturedArtist />
					<Gallery />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
