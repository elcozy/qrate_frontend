import React, {Component} from "react";

import Skeleton from 'react-loading-skeleton';

import { Link } from "react-router-dom";

import { withRouter } from "react-router-dom";


import "./ArtistPreview.style.scss";

class ArtistPreview extends Component {
  render() {
    const { artist, match } = this.props;
    return (
      <div className="artistPreview">
          <Link to={`${match.url}/${artist.id}`}>
            <div className="artistImage">
              {<img src={artist.imgUrl} alt="" /> || <Skeleton  count={1} duration={5}/>}
            </div>
            <h4>VIEW</h4>
          </Link>
          <p>{artist.name || <Skeleton count={1} duration={5}/> }</p>
      </div>
    );
  }
};

export default withRouter(ArtistPreview);
