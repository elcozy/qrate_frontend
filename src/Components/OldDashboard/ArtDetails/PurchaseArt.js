import React, { useLayoutEffect } from "react";

const PurchaseArt = ({ onClose }) => {
	useLockBodyScroll();

	return (
		<div className="purchase-art">
			<div className="purchase">
				<div className="text-right close" onClick={onClose}>
					<i className="fa fa-times"></i>
				</div>
				<div className="avail-width">
					<div className="what-to-buy mt-4 mt-md-5">
						<div className="artPic">
							<img className="frame" src="/images/dashboard/gallery/frame.png" alt="Frame" />
							<img className="art-in-frame" src="/images/dashboard/gallery/01.png" alt="Art" />
						</div>
						<div className="art-details">
							<h1 className="text-orange font-weight-bold">Pleasure Paint</h1>
							<p className="font-weight-bold">Picasso Kenyon</p>
							<div className="d-flex">
								<p className="text-success">Pay $30</p>&nbsp;
								<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M2.1665 5.41663C2.1665 3.6217 3.62158 2.16663 5.4165 2.16663H20.5832C22.3781 2.16663 23.8332 3.6217 23.8332 5.41663V20.5833C23.8332 22.3782 22.3781 23.8333 20.5832 23.8333H5.4165C3.62158 23.8333 2.1665 22.3782 2.1665 20.5833V5.41663Z"
										fill="#14AF49"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M18.3237 8.98401C18.7468 9.40708 18.7468 10.093 18.3237 10.5161L11.5994 17.5577C11.1763 17.9808 10.4904 17.9808 10.0673 17.5577L6.8173 14.3077C6.39423 13.8847 6.39423 13.1987 6.8173 12.7757C7.24037 12.3526 7.9263 12.3526 8.34937 12.7757L10.8333 15.2596L16.7917 8.98401C17.2147 8.56094 17.9007 8.56094 18.3237 8.98401Z"
										fill="white"
									/>
								</svg>
							</div>
						</div>
					</div>
					<div className="card-details py-5">
						<form action="">
							<div className="border p-4 card-number">
								<p>CARD NUMBER</p>
								<input type="number" max="16" min="16" placeholder="0000 0000 0000 0000" required />
							</div>
							<div className="border p-4">
								<p>CARD EXPIRY</p>
								<input type="number" max="6" min="6" placeholder="MM/YYYY" required />
							</div>
							<div className="border p-4">
								<p>CV</p>
								<input type="number" max="3" min="3" placeholder="000" required />
							</div>
							<button className="btn bg-green text-light rounded py-4" type="submit">
								Complete Payment
							</button>
						</form>
					</div>
					<p className="text-muted text-center footer">
						<svg width="22" height="33" viewBox="0 0 22 33" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect y="12.3752" width="22" height="20.1667" rx="5" fill="#6C6B6B" />
							<path
								d="M20.2632 11.4585C21.2224 11.4585 22.014 10.6761 21.8632 9.72877C21.5007 7.45225 20.4288 5.33099 18.7782 3.68032C16.7153 1.61742 13.9174 0.458496 11 0.458496C8.08262 0.458496 5.28473 1.61742 3.22183 3.68032C1.57116 5.33099 0.499278 7.45225 0.136802 9.72877C-0.01403 10.6761 0.77761 11.4585 1.73684 11.4585C2.69607 11.4585 3.45376 10.6708 3.67319 9.73696C3.99098 8.38462 4.67985 7.13483 5.67809 6.13659C7.08955 4.72513 9.0039 3.93218 11 3.93218C12.9961 3.93218 14.9105 4.72513 16.3219 6.13659C17.3202 7.13483 18.009 8.38462 18.3268 9.73697C18.5462 10.6708 19.3039 11.4585 20.2632 11.4585Z"
								fill="#6C6B6B"
							/>
						</svg>
						Secured by <span className="font-weight-bold">paystack</span>
					</p>
				</div>
			</div>
		</div>
	);
};

function useLockBodyScroll() {
	useLayoutEffect(() => {
		// Get original body overflow
		const originalStyle = window.getComputedStyle(document.body).overflow;
		// Move to the top of the page
		window.scrollTo({top: 0, behavious: "smooth"});
		// Prevent scrolling on mount
		document.body.style.overflow = "hidden";
		// Re-enable scrolling when component unmounts
		return () => (document.body.style.overflow = originalStyle);
	}, []); // Empty array ensures effect is only run on mount and unmount
}

export default PurchaseArt;
