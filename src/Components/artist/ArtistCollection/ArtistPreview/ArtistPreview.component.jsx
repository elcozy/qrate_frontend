import React from 'react';

import {BrowserRouter as Router, Link, Route } from "react-router-dom";

import { withRouter } from 'react-router-dom';

import ArtistMain from '../../ArtistMain/ArtistMain.component';

import './ArtistPreview.style.scss';


const ArtistPreview = ({artist, match}) => {
    return(
        <div className='artistPreview'>
        <Router>
            <Link to={`${match.url}/${artist.id}`}>
                <div className='artistImage'>
                    <img  src={artist.imgUrl} alt=''/>
                </div>
                <h4>VIEW</h4>
            </Link>
            <p>{artist.name}</p>
        <Route path={`${match.path}/:artistId`} component={ArtistMain}/>
        </Router>
        </div>
    )
};

export default withRouter(ArtistPreview);

