import React from "react";
import Skeleton from "react-loading-skeleton";

export class ArtGalleryCollection extends React.Component {
  render() {
    return (
      <div className="pag-images d-flex flex-wrap justify-content-center mb-4">
        {this.props.pageOfItems.map((item) => (
          <div
            key={item.id}
            className="position-relative images-g"
            style={{
              height: 254,
              width: 252,
            }}
          >
            <a href={`/gallery/${item.id}`}>
              {<img src={`${item.image}`} alt="" /> || (
                <Skeleton height={254} />
              )}

              <div className="position-absolute overlay-gallery">
                <div className="gal-cont">
                  <div className="gallery-name mb-4">{item.name}</div>
                  <div className="gallery-location">{item.location}</div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    );
  }
}
