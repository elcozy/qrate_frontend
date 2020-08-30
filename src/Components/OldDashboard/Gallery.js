import React from "react";

const Gallery = () => {
	return (
		<div className="gallery">
			<div className="heading mb-4">
				<h2>Your Gallery</h2>
				<span className="line"></span>
			</div>

			<div className="row mb-md-4">
				<div className="col-sm-6 col-md-4 mt-4 d-flex">
					<div className="galleryPic shadow rounded">
						<img src="/images/dashboard/gallery/01.png" alt="Gallery Art" />
						<div className="p-3 d-flex justify-content-between align-items-center">
							<div>
								<i className="fa fa-heart text-danger"></i>
								<span> 30</span>
							</div>
							<div>
								<i className="fa fa-ellipsis-v"></i>
							</div>
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-md-4 mt-4 d-flex">
					<div className="galleryPic shadow rounded">
						<img src="/images/dashboard/gallery/01.png" alt="Gallery Art" />
						<div className="p-3 d-flex justify-content-between align-items-center">
							<div>
								<i className="fa fa-heart text-danger"></i>
								<span> 30</span>
							</div>
							<div>
								<i className="fa fa-ellipsis-v"></i>
							</div>
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-md-4 mt-4 d-flex">
					<div className="galleryPic shadow rounded">
						<img src="/images/dashboard/gallery/01.png" alt="Gallery Art" />
						<div className="p-3 d-flex justify-content-between align-items-center">
							<div>
								<i className="fa fa-heart text-danger"></i>
								<span> 30</span>
							</div>
							<div>
								<i className="fa fa-ellipsis-v"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
