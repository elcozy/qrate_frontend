import React from "react";

export class Pagination extends React.Component {
  state = {
    totalItems: [],
    currentPage: 0,
    totalPages: 0,
  };

  componentDidMount() {
    // console.log(this.state);
    this.setupPagination();
    // this.onPageChange(currentPage);
  }

  componentDidUpdate(prevProps) {
    // reset page if items array has changed
    if (this.props.totalItems !== prevProps.totalItems) {
      this.setupPagination();
    }
  }

  setupPagination = () => {
    // console.log(">>>>", this.props);
    const { initialPage = 1, totalItems = 0, perPage = 10 } = this.props;
    const totalPages = Math.ceil(totalItems / perPage);
    const settings = {
      currentPage: initialPage > totalPages ? totalPages : initialPage,
      totalPages,
      totalItems,
      perPage,
    };
    this.setState(settings);
    this.onPageChange(settings.currentPage);
  };

  onPageChange(page) {
    const { perPage } = this.state;
    this.setState({ currentPage: page });
    this.props.onChangePage(page, perPage);
  }

  render() {
    const { totalItems, currentPage, totalPages } = this.state;

    if (!totalItems) {
      // don't display totalPages if there is zero
      return null;
    }

    return (
      <ul className="pagination justify-content-center">
        <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
          <button
            className="page-link"
            onClick={() => this.onPageChange(currentPage - 1)}
          >
            &laquo;
          </button>
        </li>
        {new Array(totalPages).fill().map((_, i) => {
          const page = i + 1;
          return (
            <li
              key={i}
              className={
                currentPage === page ? "page-item active" : "page-item"
              }
            >
              <button
                className="page-link"
                onClick={() => this.onPageChange(page)}
              >
                {page}
              </button>
            </li>
          );
        })}
        <li
          className={
            currentPage === totalPages ? "page-item disabled" : "page-item"
          }
        >
          <button
            className="page-link"
            onClick={() => this.onPageChange(currentPage + 1)}
          >
            &raquo;
          </button>
        </li>
      </ul>
    );
  }
}
