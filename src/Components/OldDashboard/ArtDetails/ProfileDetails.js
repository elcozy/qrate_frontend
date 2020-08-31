import React from "react";
import { Link } from "react-router-dom";

const ProfileDetails = () => {
	return (
		<div className="profile-details pt-5">
			<div className="d-flex justify-content-start align-items-center">
				<Link to="/dashboard"><i className="fa fa-arrow-left text-black"></i></Link>
				<h1 className="text-orange ml-4 mb-0">
					Pleasure paint<span className="dot">.</span>
					<span className="small text-dark">water color</span>
				</h1>
			</div>
			<div className="d-flex justify-content-between align-items-stretch">
				<div className="d-flex justiy-content-start align-items-center profile mt-3">
					<img className="rounded" src="/images/dashboard/gallery/02.png" alt="Artist name" />
					<div className="pl-2">
						<h3>Picasso Kenyon</h3>
						<p className="text-orange mb-0">
							Paint Artist <span className="badge badge-pill bg-orange text-light">PRO</span>
						</p>
					</div>
				</div>
				<div className="d-flex flex-column justify-content-between align-items-end">
					<button className="text-light bg-orange py-2 px-5 rounded border-0 btn">Follow</button>
					<Link to="/" className="text-black view-profile">
						View Profile
					</Link>
				</div>
			</div>
			<div></div>
		</div>
	);
};

export default ProfileDetails;
