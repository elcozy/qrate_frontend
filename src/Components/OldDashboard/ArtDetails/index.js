import React, { useState } from "react";
import FixedNavBar from "../FixedNavBar";
import ProfileDetails from "./ProfileDetails";
import Details from "./Details";
import Comment from "./Comment";
import PurchaseArt from "./PurchaseArt";

const ArtDetails = () => {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<div className="dashboard">
			<div className="grid-layout">
				<FixedNavBar />
				<div className="px-md-5 content">
					<ProfileDetails />
					<Details onClick={() => setModalOpen(true)} />
					<Comment />
					{modalOpen && <PurchaseArt onClose={() => setModalOpen(false)} />}
				</div>
			</div>
		</div>
	);
};

export default ArtDetails;
