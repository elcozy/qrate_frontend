import React from 'react';

import './ArtistMain.style.scss';

const ArtistMain = ({match}) => {
    const { params: { artistId } } = match;
    console.log(artistId);
    return (
       
        <div className='main content'>
            <strong>User ID: </strong>
            {artistId}
        </div>
        
    );
}

export default ArtistMain;