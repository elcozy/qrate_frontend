import React from 'react';

import ArtistPreview from './ArtistPreview/ArtistPreview.component';

import Skeleton from 'react-loading-skeleton';

import './ArtistCollection.style.scss';


const ArtistCollection = ({artists}) => {
    
    return(
        <div className='artistCollection'>
        { artists.map(artist => (
            <ArtistPreview artist={artist} key={artist.id}/> || <Skeleton duration={5}/>
        ))
        }
        </div>
    )
};

export default ArtistCollection;
