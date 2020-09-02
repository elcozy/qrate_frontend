import React from "react";

import Skeleton from 'react-loading-skeleton';

import { Link } from "react-router-dom";

import { withRouter } from "react-router-dom";


import "./CataloguePreview.style.scss";

const CataloguePreview = ({ work }) => {
    return (
      <div className="cataloguePreview">
          <Link to={`/home/artist/${work.artistId}/${work.routeName}`}>
            <div className="catalogueImage">
              {<img src={work.imgUrl} alt="" /> ||  (<Skeleton height={230} width={230}/>)}
              <h4>VIEW</h4>
            </div>
          </Link>
          <h5>{work.name}</h5>
          <p>{work.artist}</p>
      </div>
    );
};

export default withRouter(CataloguePreview);
