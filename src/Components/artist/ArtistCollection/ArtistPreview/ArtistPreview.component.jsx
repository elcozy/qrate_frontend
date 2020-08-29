import React from "react";

import Skeleton from 'react-loading-skeleton';

import { Link } from "react-router-dom";

import { withRouter } from "react-router-dom";


import "./ArtistPreview.style.scss";

const ArtistPreview = ({ artist, match }) => {
    return (
      <div className="artistPreview">
          <Link to={`${match.url}/${artist.id}`}>
            <div className="artistImage">
              {<img src={artist.imgUrl} alt="" /> ||  (<Skeleton height={230} width={230}/>)}
            </div>
            <h4>VIEW</h4>
          </Link>
          <p>{artist.name}</p>
      </div>
    );
};

export default withRouter(ArtistPreview);
