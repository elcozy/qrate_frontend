import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const ArtGalleryCollection = ({ pageOfItems }) => {
  return (
    <div className="pag-images d-flex flex-wrap justify-content-center mb-4">
      {pageOfItems.map((item) => (
        <div
          key={item.id}
          className="position-relative images-g"
          style={{
            height: 254,
            width: 252,
          }}
        >
          <Link to={`/gallery/${item.id}`}>
            {<img src={`${item.image}`} alt="" /> || <Skeleton height={254} />}

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

export default withRouter(ArtGalleryCollection);
