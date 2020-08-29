import React from "react";

import Skeleton from 'react-loading-skeleton';

import { Link } from "react-router-dom";

import { withRouter } from "react-router-dom";


import "./CategoryPreview.style.scss";

const CategoryPreview = ({ work }) => {
    return (
      <div className="categoryPreview">
          <Link to={`/artist/${work.artistId}/${work.routeName}`}>
            <div className="categoryImage">
              {<img src={work.imgUrl} alt="" /> ||  (<Skeleton height={230} width={230}/>)}
              <h4>VIEW</h4>
            </div>
          </Link>
          <h5>{work.name}</h5>
          <p>{work.artist}</p>
      </div>
    );
};

export default withRouter(CategoryPreview);
