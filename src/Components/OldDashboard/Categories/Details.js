import React from "react";

const Details = () => {
	return (
		<div className="categories">
			<div className="header d-flex justify-content-between align-items-center">
				<h1 className="title">Categories</h1>
				<button className="bg-orange btn text-light">
					Add more
					<i className="pl-2 fa fa-download"></i>
				</button>
			</div>
			<div className="my-categories mt-5">
				<h3 className="title text-muted">MY CATEGORIES</h3>
				<div className="d-flex justify-content-between wrapper">
					<div className="mb-3">
						<div className="img-container border p-3 p-md-4 rounded">
							<div className="d-flex justify-content-between align-items-center">
								<span>1</span>
								<span className="p-2 shadow rounded-circle line-height-0">
									<i className="fa fa-star text-danger"></i>
								</span>
							</div>
							<div className="thumbnail">
								<span className="bg-primary p-5 rounded-circle text-light">C</span>
							</div>
							<div className="name text-center mb-4">Footer</div>
						</div>
						<button className="bg-black py-2 text-center text-white rounded mt-4 btn w-100">View</button>
					</div>
					<div className="mb-3">
						<div className="img-container border p-3 p-md-4 rounded">
							<div className="d-flex justify-content-between align-items-center">
								<span>1</span>
								<span className="p-2 shadow rounded-circle line-height-0">
									<i className="fa fa-star text-danger"></i>
								</span>
							</div>
							<div className="thumbnail">
								<span className="bg-primary p-5 rounded-circle text-light">C</span>
							</div>
							<div className="name text-center mb-4">Footer</div>
						</div>
						<button className="bg-black py-2 text-center text-white rounded mt-4 btn w-100">View</button>
					</div>
					<div className="mb-3">
						<div className="img-container border p-3 p-md-4 rounded">
							<div className="d-flex justify-content-between align-items-center">
								<span>1</span>
								<span className="p-2 shadow rounded-circle line-height-0">
									<i className="fa fa-star text-danger"></i>
								</span>
							</div>
							<div className="thumbnail">
								<span className="bg-primary p-5 rounded-circle text-light">C</span>
							</div>
							<div className="name text-center mb-4">Footer</div>
						</div>
						<button className="bg-black py-2 text-center text-white rounded mt-4 btn w-100">View</button>
					</div>
				</div>
			</div>
			<div className="my-categories mt-5">
				<h3 className="title text-muted">SUGGESTED CATEGORIES</h3>
				<div className="d-flex justify-content-between wrapper">
					<div className="mb-3">
						<div className="img-container border p-3 p-md-4 rounded">
							<div className="d-flex justify-content-between align-items-center">
								<span>1</span>
								<span className="p-2 shadow rounded-circle line-height-0">
									<i className="fa fa-star text-danger"></i>
								</span>
							</div>
							<div className="thumbnail">
								<span className="bg-primary p-5 rounded-circle">C</span>
							</div>
							<div className="name text-center mb-4">Footer</div>
						</div>
						<div className="py-2 mt-4 d-flex justify-content-between">
                            <button className="bg-orange text-white rounded px-3 py-2 btn">Add to Gallery</button>
                            <button className="bg-black text-white rounded px-3 py-2 btn">View</button>
                        </div>
					</div>
					<div className="mb-3">
						<div className="img-container border p-3 p-md-4 rounded">
							<div className="d-flex justify-content-between align-items-center">
								<span>1</span>
								<span className="p-2 shadow rounded-circle line-height-0">
									<i className="fa fa-star text-danger"></i>
								</span>
							</div>
							<div className="thumbnail">
								<span className="bg-primary p-5 rounded-circle">C</span>
							</div>
							<div className="name text-center mb-4">Footer</div>
						</div>
						<div className="py-2 mt-4 d-flex justify-content-between">
                            <button className="bg-orange text-white rounded px-3 py-2 btn">Add to Gallery</button>
                            <button className="bg-black text-white rounded px-3 py-2 btn">View</button>
                        </div>
					</div>
					<div className="mb-3">
						<div className="img-container border p-3 p-md-4 rounded">
							<div className="d-flex justify-content-between align-items-center">
								<span>1</span>
								<span className="p-2 shadow rounded-circle line-height-0">
									<i className="fa fa-star text-danger"></i>
								</span>
							</div>
							<div className="thumbnail">
								<span className="bg-primary p-5 rounded-circle">C</span>
							</div>
							<div className="name text-center mb-4">Footer</div>
						</div>
						<div className="py-2 mt-4 d-flex justify-content-between">
                            <button className="bg-orange text-white rounded px-3 py-2 btn">Add to Gallery</button>
                            <button className="bg-black text-white rounded px-3 py-2 btn">View</button>
                        </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
