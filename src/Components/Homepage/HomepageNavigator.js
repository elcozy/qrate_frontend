import React from "react";

const HomepageNavigator = (props) => {
	return (
		<div className="wrap">
			<div className="navigator mw ml-4 ml-md-5">
				<div className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
					<span
						className={`d-inline-block my-2 rounded-circle nav-btn ${(props.display === "FirstPage") ? "bg-light" : "bg-transparent"}`}
						value="FirstPage"
						onClick={() => {
							props.onClick("FirstPage");
						}}
					></span>
					<span
						className={`d-inline-block my-2 rounded-circle nav-btn ${(props.display === "SecondPage") ? "bg-light" : "bg-transparent"}`}
						value="SecondPage"
						onClick={() => props.onClick("SecondPage")}
					></span>
					<span
						className={`d-inline-block my-2 rounded-circle nav-btn ${(props.display === "ThirdPage") ? "bg-light" : "bg-transparent"}`}
						value="ThirdPage"
						onClick={() => props.onClick("ThirdPage")}
					></span>
					<span
						className={`d-inline-block my-2 rounded-circle nav-btn ${(props.display === "FourthPage") ? "bg-light" : "bg-transparent"}`}
						value="FourthPage"
						onClick={() => props.onClick("FourthPage")}
					></span>
					<span
						className={`d-inline-block my-2 rounded-circle nav-btn ${(props.display === "FifthPage") ? "bg-light" : "bg-transparent"}`}
						value="FifthPage"
						onClick={() => props.onClick("FifthPage")}
					></span>
					<span
						className={`d-inline-block my-2 rounded-circle nav-btn ${(props.display === "SixthPage") ? "bg-light" : "bg-transparent"}`}
						value="SixthPage"
						onClick={() => props.onClick("SixthPage")}
					></span>
					<span
						className={`d-inline-block my-2 rounded-circle nav-btn ${(props.display === "SeventhPage") ? "bg-light" : "bg-transparent"}`}
						value="SeventhPage"
						onClick={() => props.onClick("SeventhPage")}
					></span>
				</div>
			</div>
		</div>
	);
};

export default HomepageNavigator;
