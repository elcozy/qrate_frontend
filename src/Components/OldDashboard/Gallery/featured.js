import React from "react";

const Featured = () => {
	return (
		<div className="featured d-flex justify-content-center align-items-center">
            <button className="btn p-3"><i className="fa fa-arrow-left fa-2x"></i></button>
			<div className="grid-layout">
				<div className="text-center mt-5">
					<h2>Chris Samuel</h2>
					<p className="text-orange">Photographer</p>
					<img className="img-fluid" src="/images/dashboard/header/user.png" alt="User name" />
				</div>
				<div className="text-center">
					<h2>Eminem</h2>
					<p className="text-orange">Creative Designer</p>
					<img className="img-fluid" src="/images/dashboard/header/user.png" alt="User name" />
                    <div className="text-orange pt-3">
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x text-light"></i>
                    </div>
				</div>
				<div className="text-center mt-5">
					<h2>Chris Samuel</h2>
					<p className="text-orange">Photographer</p>
					<img className="img-fluid" src="/images/dashboard/header/user.png" alt="User name" />
				</div>
			</div>
			<button className="btn p-3"><i className="fa fa-arrow-right fa-2x"></i></button>
		</div>
	);
};

export default Featured;
