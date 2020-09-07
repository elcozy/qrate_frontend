import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { ArtGalleryHeaders } from "../../../Shared/Texts/GeneralTexts";

export function FeaturedGalleryCollectionCards({ collection }) {
  return (
    <div className="featured-collection w-auto bg-white d-flex flex-row justify-content-start pr-4 mb-0">
      <img alt="" src={collection.image} />
      <div className="exhibition-details ml-3 mt-4">
        <h4 className="collection-name">{collection.name}</h4>
        <p className="collection-author">by {collection.artist}</p>
        <h5 className="collection-price">{collection.price}</h5>
        <a href="#">
          <button>Purchase</button>
        </a>
      </div>
    </div>
  );
}

export function FeaturedGalleryCollection({ featuredCollection }) {
  return (
    <div className="featured-collections mt-5">
      <ArtGalleryHeaders text="Featured Collections" />
      <Splide
        options={{
          rewind: true,
          // width: 800,
          gap: "1rem",
          perPage: 3,
          autoWidth: false,
          autoplay: true,
          interval: 5000,
          breakpoints: {
            1300: {
              autoWidth: false,
              perPage: 2,
            },
            780: {
              autoWidth: false,
              perPage: 1,
            },
          },
        }}
      >
        {featuredCollection.map((collection, i) => {
          return (
            <SplideSlide key={i}>
              <FeaturedGalleryCollectionCards
                key={collection.id}
                collection={collection}
              />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}
