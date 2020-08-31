import React from "react";
import { ArtGalleryHeaders } from "../../../Shared/Texts/GeneralTexts";
export function FeaturedArtistsCards({ featuredArtists }) {
  return (
    <div className="featured-artists mt-5">
      <ArtGalleryHeaders text="Featured Artists" />

      <div className="f-artists d-flex flex-row flex-wrap justify-content-center justify-content-md-start">
        {featuredArtists.map((collection, i) => {
          return (
            <div
              key={i}
              className="featured-artist text-center "
              style={{
                backgroundImage: `url(${collection.image})`,
              }}
            >
              <div className="artist-details">
                <img alt="" src={`${collection.profileImg}`} />
                <p className="artist-author">{collection.artist}</p>
                <a href="/artist">
                  <button>View Artworks</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
