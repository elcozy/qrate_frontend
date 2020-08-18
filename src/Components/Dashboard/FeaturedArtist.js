import React from "react";
import { Link } from 'react-router-dom';

const FeaturedArtist = () => {
	return (
		<div className="featured-artists">
			<div className="heading d-flex justify-content-between align-items-center mb-md-4">
				<div>
					<h2>Featured Artists</h2>
					<span className="line"></span>
				</div>
				<div>
					<svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="31" cy="31" r="31" fill="#F7931E" />
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M30.9999 14.0909C32.1672 14.0909 33.1135 15.0372 33.1135 16.2045V45.7955C33.1135 46.9628 32.1672 47.9091 30.9999 47.9091C29.8325 47.9091 28.8862 46.9628 28.8862 45.7955V16.2045C28.8862 15.0372 29.8325 14.0909 30.9999 14.0909Z"
							fill="white"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M14.0908 31C14.0908 29.8327 15.0371 28.8864 16.2045 28.8864H45.7954C46.9627 28.8864 47.909 29.8327 47.909 31C47.909 32.1673 46.9627 33.1136 45.7954 33.1136H16.2045C15.0371 33.1136 14.0908 32.1673 14.0908 31Z"
							fill="white"
						/>
					</svg>
				</div>
			</div>
			<div className="artist-list">
				<div className="row mb-5 justify-content-center justify-content-md-between">
					<div className="col-md-3 d-flex my-4">
						<div className="featured">
							<img
								className="p-2 rounded-border border border-orange"
								src="/images/dashboard/artistList/pic.png"
								alt="Featured Artist Name"
							/>
							<Link to="/dashboard/art/id" id="1" className="d-block mt-3 bg-black rounded py-2 text-light mw-100">
								<span className="text-center w-75 d-inline-block">Learn more</span>
								<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M13.6837 5.05062C14.3042 5.05062 14.8071 5.55359 14.8071 6.17403V21.9019C14.8071 22.5223 14.3042 23.0253 13.6837 23.0253C13.0633 23.0253 12.5603 22.5223 12.5603 21.9019V6.17403C12.5603 5.55359 13.0633 5.05062 13.6837 5.05062Z"
										fill="white"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M4.69629 14.038C4.69629 13.4175 5.19926 12.9145 5.81971 12.9145H21.5476C22.168 12.9145 22.671 13.4175 22.671 14.038C22.671 14.6584 22.168 15.1614 21.5476 15.1614H5.81971C5.19926 15.1614 4.69629 14.6584 4.69629 14.038Z"
										fill="white"
									/>
								</svg>
							</Link>
						</div>
					</div>
					<div className="col-md-3 d-flex my-4">
						<div className="featured">
							<img
								className="p-2 rounded-border border border-orange"
								src="/images/dashboard/artistList/pic.png"
								alt="Featured Artist Name"
							/>
							<Link to="/dashboard/art/id" id="2" className="d-block mt-3 bg-black rounded py-2 text-light mw-100">
								<span className="text-center w-75 d-inline-block">Learn more</span>
								<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M13.6837 5.05062C14.3042 5.05062 14.8071 5.55359 14.8071 6.17403V21.9019C14.8071 22.5223 14.3042 23.0253 13.6837 23.0253C13.0633 23.0253 12.5603 22.5223 12.5603 21.9019V6.17403C12.5603 5.55359 13.0633 5.05062 13.6837 5.05062Z"
										fill="white"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M4.69629 14.038C4.69629 13.4175 5.19926 12.9145 5.81971 12.9145H21.5476C22.168 12.9145 22.671 13.4175 22.671 14.038C22.671 14.6584 22.168 15.1614 21.5476 15.1614H5.81971C5.19926 15.1614 4.69629 14.6584 4.69629 14.038Z"
										fill="white"
									/>
								</svg>
							</Link>
						</div>
					</div>
					<div className="col-md-3 d-flex my-4">
						<div className="featured">
							<img
								className="p-2 rounded-border border border-orange"
								src="/images/dashboard/artistList/pic.png"
								alt="Featured Artist Name"
							/>
							<Link to="/dashboard/art/id" id="3" className="d-block mt-3 bg-black rounded py-2 text-light mw-100">
								<span className="text-center w-75 d-inline-block">Learn more</span>
								<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M13.6837 5.05062C14.3042 5.05062 14.8071 5.55359 14.8071 6.17403V21.9019C14.8071 22.5223 14.3042 23.0253 13.6837 23.0253C13.0633 23.0253 12.5603 22.5223 12.5603 21.9019V6.17403C12.5603 5.55359 13.0633 5.05062 13.6837 5.05062Z"
										fill="white"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M4.69629 14.038C4.69629 13.4175 5.19926 12.9145 5.81971 12.9145H21.5476C22.168 12.9145 22.671 13.4175 22.671 14.038C22.671 14.6584 22.168 15.1614 21.5476 15.1614H5.81971C5.19926 15.1614 4.69629 14.6584 4.69629 14.038Z"
										fill="white"
									/>
								</svg>
							</Link>
						</div>
					</div>
					<div className="col-md-3 d-flex my-4">
						<div className="featured">
							<img
								className="p-2 rounded-border border border-orange"
								src="/images/dashboard/artistList/pic.png"
								alt="Featured Artist Name"
							/>
							<Link to="/dashboard/art/id" id="4" className="d-block mt-3 bg-black rounded py-2 text-light mw-100">
								<span className="text-center w-75 d-inline-block">Learn more</span>
								<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M13.6837 5.05062C14.3042 5.05062 14.8071 5.55359 14.8071 6.17403V21.9019C14.8071 22.5223 14.3042 23.0253 13.6837 23.0253C13.0633 23.0253 12.5603 22.5223 12.5603 21.9019V6.17403C12.5603 5.55359 13.0633 5.05062 13.6837 5.05062Z"
										fill="white"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M4.69629 14.038C4.69629 13.4175 5.19926 12.9145 5.81971 12.9145H21.5476C22.168 12.9145 22.671 13.4175 22.671 14.038C22.671 14.6584 22.168 15.1614 21.5476 15.1614H5.81971C5.19926 15.1614 4.69629 14.6584 4.69629 14.038Z"
										fill="white"
									/>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedArtist;
