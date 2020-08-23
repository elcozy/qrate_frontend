import React from "react";
import "./artgallery.css";
import { Pagination } from "./ArtGalleryPagination";

const propTypes = {
  //   items: React.PropTypes.array.isRequired,
  //   onChangePage: React.PropTypes.func.isRequired,
  //   initialPage: React.PropTypes.number,
};

const defaultProps = {
  initialPage: 1,
};

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

/* App Component 
  -------------------------------------------------*/

export default class gallery extends React.Component {
  constructor() {
    super();
    // an example array of items to be paged
    var exampleItems = [...Array(50).keys()].map((i) => ({
      id: i + 1,
      name: "Item " + (i + 1),
    }));
    const images = [...Array(50).keys()].map((i) => ({
      id: i + 1,
      image: `/assets/img/artgallery/gallery (${(i % 16) + 1}).svg`,
      name: "Nike Art Gallery",
      location: "Lekki, Lagos",
    }));

    // const images = Array.from({ length: 3 }).fill(g_images).flat();
    function shuffle(images) {
      return images.sort(() => Math.random() - 0.5);
    }
    // shuffling the array
    const s_images = shuffle(images);
    console.log(s_images);

    this.state = {
      s_images: s_images,
      exampleItems: exampleItems,
      pageOfItems: [],
    };

    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    return (
      <div className="main my-5 pb-5">
        <div className="r">
          <div className="text-center">
            <h5 className="text-center">Art Galleries</h5>
            <div className="pag-images d-flex flex-wrap justify-content-center mb-4">
              {this.state.pageOfItems.map((item) => (
                <div key={item.id} className="position-relative images-g">
                  <a href={`/gallery/${item.id}`}>
                    <img src={`${item.image}`} alt="" />
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
          </div>
        </div>
        <Pagination
          items={this.state.s_images}
          onChangePage={this.onChangePage}
        />
      </div>
    );
  }
}
