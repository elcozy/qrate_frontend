import React from "react";
import { Link } from "react-router-dom";

import { withRouter } from "react-router-dom";

import "./ArtistPreview.style.scss";

const ArtistPreview = ({ artist, match }) => {
  return (
    <div className="artistPreview">
      <Link to={`${match.url}/${artist.id}`}>
        <div className="artistImage">
          <img src={artist.imgUrl} alt="" className="skeleton" />
        </div>
        <h4>VIEW</h4>
      </Link>
      <p>{artist.name}</p>
    </div>
  );
};

export default withRouter(ArtistPreview);
