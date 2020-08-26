import React, { Component } from "react";

// Importing Artists Data
import artistData from "./artistData";

// Importing Artist Collection
import ArtistCollection from "./ArtistCollection/ArtistCollection.component";

// Importing Input
import Input from "./Input/Input.component";

//importing style
import "./artist.css";

// IMPORTING REACT ROUTER DOM

class artist extends Component {
  constructor() {
    super();

    this.state = {
      artistData: artistData,
      input: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    //set input vlaue to search input.
    this.setState({ input: e.target.value });
  };

  render() {
    const { artistData, input } = this.state;

    //filter artist collection based on input value.
    const filteredArtists = artistData.filter((artist) => {
      return artist.name.toLowerCase().includes(input.toLowerCase());
    });

    return (
      <div className="main">
        <div className="artist content">
          <h2>Artists</h2>

          <div className="page-description">
            <Input
              inputName="search"
              placeholder="Search"
              onChange={this.handleChange}
            />
            <p>
              Discover top artists and emerging talents in the industry an view
              their collections.
            </p>
          </div>

          <ArtistCollection artists={filteredArtists} />
        </div>
      </div>
    );
  }
}

export default artist;
