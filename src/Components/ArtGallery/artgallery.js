import React, { Component } from "react";
import "./artgallery.css";
// import { PageItem, Pagination } from "react-bootstrap";

// IMPORTING REACT ROUTER DOM

// export default class gallery extends Component {
//   render() {
//     return (
//       <div className="main">
//         <h1>Gallery Page</h1>
//         <Pagination>
//           <Pagination.Prev />
//           <Pagination.Item>{1}</Pagination.Item>
//           <Pagination.Item active>{2}</Pagination.Item>
//           <Pagination.Item>{3}</Pagination.Item>
//           <Pagination.Next />
//         </Pagination>
//       </div>
//     );
//   }
// }

const propTypes = {
  //   items: React.PropTypes.array.isRequired,
  //   onChangePage: React.PropTypes.func.isRequired,
  //   initialPage: React.PropTypes.number,
};

const defaultProps = {
  initialPage: 1,
};

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pager: {} };
  }

  componentWillMount() {
    // set page if items array isn't empty
    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.initialPage);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // reset page if items array has changed
    if (this.props.items !== prevProps.items) {
      this.setPage(this.props.initialPage);
    }
  }

  setPage(page) {
    var items = this.props.items;
    var pager = this.state.pager;

    if (page < 1 || page > pager.totalPages) {
      return;
    }

    // get new pager object for specified page
    pager = this.getPager(items.length, page);

    // get new page of items from items array
    var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    // update state
    this.setState({ pager: pager });

    // call change page function in parent component
    this.props.onChangePage(pageOfItems);
  }

  getPager(totalItems, currentPage, pageSize) {
    // default to first page
    currentPage = currentPage || 1;

    // default page size is 16
    pageSize = pageSize || 16;

    // calculate total pages
    var totalPages = Math.ceil(totalItems / pageSize);

    var startPage, endPage;
    if (totalPages <= 16) {
      // less than 16 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 16 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 16;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // calculate start and end item indexes
    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    var pages = [...Array(endPage + 1 - startPage).keys()].map(
      (i) => startPage + i
    );

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  }

  render() {
    var pager = this.state.pager;

    if (!pager.pages || pager.pages.length <= 1) {
      // don't display pager if there is only 1 page
      return null;
    }

    return (
      <ul className="pagination justify-content-center">
        <li
          className={
            pager.currentPage === 1 ? "page-item disabled" : "page-item"
          }
        >
          <a
            className="page-link"
            onClick={() => this.setPage(pager.currentPage - 1)}
          >
            &laquo;
          </a>
        </li>
        {pager.pages.map((page, index) => (
          <li
            key={index}
            className={
              pager.currentPage === page ? "page-item active" : "page-item"
            }
          >
            <a className="page-link" onClick={() => this.setPage(page)}>
              {page}
            </a>
          </li>
        ))}
        <li
          className={
            pager.currentPage === pager.totalPages
              ? "page-item disabled"
              : "page-item"
          }
        >
          <a
            className="page-link"
            onClick={() => this.setPage(pager.currentPage + 1)}
          >
            &raquo;
          </a>
        </li>
      </ul>
    );
  }
}

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
    const gallery_images = [
      "gallery (1).svg",
      "gallery (2).svg",
      "gallery (3).svg",
      "gallery (4).svg",
      "gallery (5).svg",
      "gallery (6).svg",
      "gallery (7).svg",
      "gallery (8).svg",
      "gallery (9).svg",
      "gallery (10).svg",
      "gallery (11).svg",
      "gallery (12).svg",
      "gallery (13).svg",
      "gallery (14).svg",
      "gallery (15).svg",
      "gallery (16).svg",
    ];
    const g_images = [...Array(16).keys()].map((i) => ({
      id: i + 1,
      image: `/assets/img/artgallery/gallery (${i + 1}).svg`,
      name: "Nike Art Gallery",
      location: "Lekki, Lagos",
    }));

    const images = Array.from({ length: 3 }).fill(g_images).flat();
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
      <div className="main artgallery">
        <div className="r">
          <div className="text-center">
            <h5 className="text-center">Art Galleries</h5>
            <div className="pag-images d-flex flex-wrap justify-content-center">
              {this.state.pageOfItems.map((item) => (
                <div key={item.id} className="position-relative images-g">
                  <img src={`${item.image}`} />
                  <div className="position-absolute overlay-gallery">
                    <div className="gal-cont">
                      <div className="gallery-name mb-4">{item.name}</div>
                      <div className="gallery-location">{item.location}</div>
                    </div>
                  </div>
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
