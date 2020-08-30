import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./artgallery.css";

const ArtGalleryCollection = ({ pageOfItems }) => {
  return (
    <div className="page-images d-flex flex-wrap justify-content-center mb-4">
      {pageOfItems.map((item) => (
        <div
          key={item.id}
          className="image-g-wrapper position-relative col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 py-3"
        >
          <Link
            className="images-g position-relative"
            to={`/gallery/${item.id}`}
          >
            {<img className="h-100" src={`${item.image}`} alt="" /> || (
              <Skeleton height={254} />
            )}

            <div className="position-absolute overlay-gallery">
              <div className="gal-cont">
                <div className="gallery-name mb-4">{item.name}</div>
                <div className="gallery-location">{item.location}</div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
// const ArtGalleryCollection = ({ pageOfItems }) => {
//   return (
//     <div className="pag-images d-flex flex-wrap justify-content-center mb-4">
//       {pageOfItems.map((item) => (
//         <div
//           key={item.id}
//           className="position-relative"
//           style={{
//             height: 254,
//             width: 252,
//           }}
//         >
//           <Link className="images-g" to={`/gallery/${item.id}`}>
//             {<img className="h-100" src={`${item.image}`} alt="" /> || (
//               <Skeleton height={254} />
//             )}

//             <div className="position-absolute overlay-gallery">
//               <div className="gal-cont">
//                 <div className="gallery-name mb-4">{item.name}</div>
//                 <div className="gallery-location">{item.location}</div>
//               </div>
//             </div>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

export default withRouter(ArtGalleryCollection);
