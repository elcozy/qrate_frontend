import { ArtGalleryDetailsHero } from "./ArtGalleryDetailsComponents/ArtGalleryDetailsHero";
import { FeaturedGalleryCollection } from "./ArtGalleryDetailsComponents/FeaturedGalleryCollection";
import React from "react";
import ".././artgallery.css";
import "./ArtGalleryDetails.scss";
import { PageHeaderText } from "../../GeneralComp/Texts/GeneralTexts";
import { gallery_images } from "../ArtGalleryData";
import "video-react/dist/video-react.css"; // import css
import { FeaturedArtistsCards } from "./ArtGalleryDetailsComponents/FeaturedArtistsCards";
import { SeeGalleryPhotos } from "./ArtGalleryDetailsComponents/SeeGalleryPhotos";
import { UpcomingExhibition } from "./ArtGalleryDetailsComponents/UpcomingExhibition";

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
      <div className="main  mt-5 pt-4 mt-lg-5 pt-lg-5 container-fluid mb-5 pb-5 mb-lg-3 pb-lg-0 w-auto art-gallery-details">
        <PageHeaderText text={selectedArtGallery.name} />
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
      </div>
    );
  }
}
