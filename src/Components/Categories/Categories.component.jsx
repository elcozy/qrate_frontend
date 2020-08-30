import React, { Component } from "react";

// Importing Artists Data
import categoryData from "./categoryData";

// Importing Artist Collection
import CategoryCollection from "./CategoryCollection/CategoryCollection.component";

// Importing Input
import Input from "../Shared/Input/Input";

//Importing Link and withRouter
import { Link, withRouter } from "react-router-dom";

//importing style
import "./Categories.style.scss";

// IMPORTING REACT ROUTER DOM

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryData: categoryData,
      input: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    //set input vlaue to search input.
    this.setState({ input: e.target.value });
  };

  render() {
    const { match } = this.props;

    const { categoryData, input } = this.state;

    //filter category name based on input value.
    const filteredCategories = categoryData.filter((category) => {
      return category.name.toLowerCase().includes(input.toLowerCase());
    });

    return (
      <div className="main">
        <div className="categories content">
          <h2 className="page-title">Categories</h2>

          <div className="search-section">
            <Input
              inputName="search"
              placeholder="Search for Category"
              onChange={this.handleChange}
            />
          </div>

          <div className="alphabets">
            <h2>A</h2>

            {filteredCategories
              .filter((category) => category.name[0] === "A")
              .map((category) => (
                <div className="category">
                  <div className="heading">
                    <h4>
                      <i className={`fas fa-circle circle${category.id}`}></i>
                      {category.name}
                    </h4>

                    <Link to={`${match.url}/${category.routeName}`}>
                      <h5 className="see-all">SEE ALL &#65310;</h5>
                    </Link>
                  </div>

                  <CategoryCollection category={category} key={category.id} />
                </div>
              ))}
          </div>

          <div className="alphabets">
            <h2>C</h2>

            {filteredCategories
              .filter((category) => category.name[0] === "C")
              .map((category) => (
                <div className="category">
                  <div className="heading">
                    <h4>
                      <i className={`fas fa-circle circle${category.id}`}></i>
                      {category.name}
                    </h4>

                    <Link to={`${match.url}/${category.routeName}`}>
                      <h5 className="see-all">SEE ALL &#65310;</h5>
                    </Link>
                  </div>

                  <CategoryCollection category={category} key={category.id} />
                </div>
              ))}
          </div>

          <div className="alphabets">
            <h2>O</h2>
            {filteredCategories
              .filter((category) => category.name[0] === "O")
              .map((category) => (
                <div className="category">
                  <div className="heading">
                    <h4>
                      <i className={`fas fa-circle circle${category.id}`}></i>
                      {category.name}
                    </h4>

                    <Link to={`${match.url}/${category.routeName}`}>
                      <h5 className="see-all">SEE ALL &#65310;</h5>
                    </Link>
                  </div>

                  <CategoryCollection category={category} key={category.id} />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Categories);
