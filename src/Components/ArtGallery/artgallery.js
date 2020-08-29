import { PageHeaderText } from "../GeneralComp/Texts/GeneralTexts";
import ArtGalleryCollection from "./ArtGalleryCollection";
import React from "react";
import "./artgallery.css";
import { Pagination } from "./ArtGalleryPagination";
import Input from "../GeneralComp/Input/Input";
import { gallery_images } from "./ArtGalleryData";
import { Content } from "../GeneralComp/Content";
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

export default class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      pageOfItems: [],
      totalItems: 0,
      input: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.input !== this.state.input) {
      this.onChangePage();
    }
  }

  getCurrentItem = (page = 1, perPage = 10) => {
    const { input } = this.state;
    const validItems = gallery_images.filter((gallery) => {
      return gallery.name.toLowerCase().includes(input.toLowerCase());
    });
    this.setState({ totalItems: validItems.length });
    return validItems.slice((page - 1) * perPage, page * perPage);
  };

  onChangePage = (page, perPage) => {
    this.setState({ pageOfItems: this.getCurrentItem(page, perPage) });
  };

  onSearch = (e) => {
    e.preventDefault();
    //set input vlaue to search input.
    this.setState({ input: e.target.value });
  };

  render() {
    const { pageOfItems, totalItems } = this.state;
    return (
      <Content className="container-fluid ">
        <div className="r">
          <div className="text-center">
            <PageHeaderText text={`Art Galleries`} />
            <div className="gallery-search d-flex flex-row flex-wrap">
              <Input
                className="col-12 col-md-6 col-auto justify-content-center justify-content-md-start d-flex my-3"
                inputName="search"
                placeholder="Search"
                onChange={this.onSearch}
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
            <ArtGalleryCollection pageOfItems={pageOfItems} />
          </div>
        </div>
        <Pagination
          totalItems={totalItems}
          initialPage={1}
          perPage={12}
          onChangePage={this.onChangePage}
        />
      </Content>
    );
  }
}
