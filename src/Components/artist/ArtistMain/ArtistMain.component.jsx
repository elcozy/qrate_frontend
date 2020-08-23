import React from 'react';

import './ArtistMain.style.scss';

const ArtistMain = ({match}) => {
    const { params: { artistId } } = match;
    console.log(artistId);
    return (
        <>
            <p>
                <strong>User ID: </strong>
                {artistId}
            </p>
        </>
    );
}

export default ArtistMain;