import { ArtGalleryDetailsHero } from "./ArtGalleryDetailsComponents/ArtGalleryDetailsHero";
import { FeaturedGalleryCollection } from "./ArtGalleryDetailsComponents/FeaturedGalleryCollection";
import React from "react";

import { PageHeaderText } from "../../Shared/Texts/GeneralTexts";
import { gallery_images } from "../ArtGalleryData";
import "video-react/dist/video-react.css"; // import css
import { FeaturedArtistsCards } from "./ArtGalleryDetailsComponents/FeaturedArtistsCards";
import { SeeGalleryPhotos } from "./ArtGalleryDetailsComponents/SeeGalleryPhotos";
import { UpcomingExhibition } from "./ArtGalleryDetailsComponents/UpcomingExhibition";
import ".././artgallery.css";
import "./ArtGalleryDetails.scss";
import MainWrapper from "../../Shared/MainWrapper";

import { Link } from "react-router-dom";
export default class ArtGalleryDetails extends React.Component {
  constructor(props) {
    super(props);
    const {
      //Get the gallery id from the url path
      params: { artgalleryid },
    } = this.props.match;

    //Get the artist object that corresponds to the id
    const artgallery = gallery_images.filter(
      (artgallery) => artgallery.id === Number(artgalleryid)
    );
    this.state = {
      artgallery: artgallery,
    };
  }
  render() {
    //Destructuring artist off the state
    const { artgallery } = this.state;

    //Destructuring the object off the artist array.
    const [selectedArtGallery] = artgallery;
    console.log(selectedArtGallery.featuredCollections);
    return (
      <MainWrapper className="art-gallery-details container-fluid">
        <div className="d-flex flex-row mb-2">
          <Link
            to="/home/gallery"
            className="d-flex align-items-center pr-3 text-dark"
            style={{
              textDecoration: "none",
            }}
          >
            <i className="fas fa-arrow-left arrow-left"></i>
          </Link>
          <PageHeaderText text={selectedArtGallery.name} />
        </div>

        <ArtGalleryDetailsHero selectedArtGallery={selectedArtGallery} />
        <UpcomingExhibition
          upcomingExhibition={selectedArtGallery.upcomingExhibitions}
        />
        <FeaturedGalleryCollection
          featuredCollection={selectedArtGallery.featuredCollections}
        />
        <FeaturedArtistsCards
          featuredArtists={selectedArtGallery.featuredArtists}
        />
        <SeeGalleryPhotos galleryPhotos={selectedArtGallery.photos} />
      </MainWrapper>
    );
  }
}
