import { PageHeaderText } from "../GeneralComp/Texts/GeneralTexts";
import { ArtGalleryCollection } from "./ArtGalleryCollection";
import React from "react";
import "./artgallery.css";
import { Pagination } from "./ArtGalleryPagination";
import Skeleton from "react-loading-skeleton";
import Input from "../GeneralComp/Input/Input";
import { gallery_images } from "./ArtGalleryData";
import { Dropdown } from "react-bootstrap";
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

    console.log(gallery_images[1]);

    this.state = {
      gallery_images: gallery_images,
      pageOfItems: [],
      input: "",
    };

    // this.onChangePage = this.onChangePage.bind(this);
  }

  handleChange = (e) => {
    e.preventDefault();
    //set input vlaue to search input.
    this.setState({ input: e.target.value });
  };
  onChangePage = (pageOfItems) => {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  };

  render() {
    const { gallery_images, pageOfItems, input } = this.state;
    //filter gallery collection based on input value.
    const filteredGalery = pageOfItems.filter((gallery) => {
      return gallery.name.toLowerCase().includes(input.toLowerCase());
    });
    return (
      <div className="main w-auto mt-5 pt-3 mt-lg-5 pt-lg-5 container-fluid mb-5 pb-5">
        <div className="r">
          <div className="text-center">
            <PageHeaderText text={`Art Galleries`} />
            <div className="gallery-search d-flex flex-row flex-wrap">
              <Input
                className="col-12 col-md-6 col-auto justify-content-center justify-content-md-start d-flex my-3"
                inputName="search"
                placeholder="Search"
                onChange={this.handleChange}
              />
              <Dropdown className="my-auto col text-center text-md-left">
                <Dropdown.Toggle id="dropdown-custom-components">
                  Location
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="1">Lekki, Lagos</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Lekki, Lagos</Dropdown.Item>
                  <Dropdown.Item eventKey="3" active>
                    Lekki, Lagos
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="1">Lekki, Lagos</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <ArtGalleryCollection pageOfItems={filteredGalery} />
          </div>
        </div>
        <Pagination items={gallery_images} onChangePage={this.onChangePage} />
      </div>
    );
  }
}
