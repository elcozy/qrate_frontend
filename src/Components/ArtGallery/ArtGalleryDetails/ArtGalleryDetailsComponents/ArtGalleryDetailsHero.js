import React from "react";
export function ArtGalleryDetailsHero({ selectedArtGallery }) {
  return (
    <>
      <div
        className="header mb-4"
        style={{
          // backgroundImage: `url('/assets/img/artgallery/gallery(1).svg')`,
          backgroundImage: `url('${selectedArtGallery.image}')`,
        }}
      >
        <img alt=""></img>
      </div>
      <div className="location mb-4">
        <i className="fas fa-map-marker-alt pr-2"></i>
        {selectedArtGallery.fullAddress}
      </div>
      <div className="gallery-description mb-5">
        <h5>
          {selectedArtGallery.name} is an art gallery in Lagos owned by Nike
          Davies-Okundaye. The gallery is arguably the largest of its kind in
          West Africa. Housed in a five-storey tall building, it boasts a
          collection of about 8,000 diverse artworks from various Nigerian
          artists.
        </h5>
      </div>
    </>
  );
}
