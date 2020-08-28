import React from "react";

import ArtistPreview from "./ArtistPreview/ArtistPreview.component";

import "./ArtistCollection.style.scss";

const ArtistCollection = ({ artists }) => {
  return (
    <div className="artistCollection">
      {artists.map((artist) => (
        <ArtistPreview artist={artist} key={artist.id} />
      ))}
    </div>
  );
};

export default ArtistCollection;
