import { FeaturedGalleryCollection } from "./FeaturedGalleryCollection";
import React from "react";
import "./artgallery.css";
import "./ArtGalleryDetails.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import {
  PageHeaderText,
  ArtGalleryHeaders,
} from "../GeneralComp/Texts/GeneralTexts";
import { gallery_images } from "./ArtGalleryData";
import "video-react/dist/video-react.css"; // import css
import { Player } from "video-react";
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
    // const gallery_images = gallery_images;
    console.log(selectedArtGallery.featuredCollections);
    return (
      <div className="main  mt-5 pt-4 mt-lg-5 pt-lg-5 container-fluid mb-5 pb-5 mb-lg-3 pb-lg-0 w-auto art-gallery-details">
        <PageHeaderText text={selectedArtGallery.name} />
        <div className="header mb-4">
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
        <div className="upcoming-exhibition">
          <ArtGalleryHeaders text="Upcoming Exhibitions" />
          <div className="exhibition d-flex flex-row flex-wrap  justify-content-center justify-content-md-start pr-3 py-4 py-md-0 px-3 pl-md-0">
            <div className="img">
              {/* <img alt="" src={`/assets/img/artgallery/galleryVideo.svg`} /> */}

              <Player
                playsInline
                poster="/assets/img/artgallery/galleryVideo.svg"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              />
            </div>
            <div className="exhibition-details col-12 col-md my-auto">
              <h4 className="exhibition-name">La Creme de Font 2020</h4>
              <p className="exhibition-date">24th Dec, 2020 4:00pm GMT</p>
              <h5 className="exhibition-detail">
                The 2020 edition of the La Creme de Font will take on the 24th
                Dec 2020. It is going feature state of the art exhibitions from
                artists all over the world.
              </h5>
            </div>
            <a href="#" className="my-auto col-12 col-md-2 text-center">
              <button>Register</button>
            </a>
          </div>
        </div>
        <FeaturedGalleryCollection
          featuredCollection={selectedArtGallery.featuredCollections}
        />
        <div className="featured-artists mt-5">
          <ArtGalleryHeaders text="Upcoming Exhibitions" />
          <div className="f-artists d-flex flex-row flex-wrap">
            <div className="featured-artist text-center ">
              <div className="artist-details">
                <img alt="" src={`/assets/img/cart/cart_image.png`} />
                <p className="artist-author">artistgod</p>
                <a href="#">
                  <button>View Artworks</button>
                </a>
              </div>
            </div>
            <div className="featured-artist text-center ">
              <div className="artist-details">
                <img alt="" src={`/assets/img/cart/cart_image.png`} />
                <p className="artist-author">artistgod</p>
                <a href="#">
                  <button>View Artworks</button>
                </a>
              </div>
            </div>
            <div className="featured-artist text-center ">
              <div className="artist-details">
                <img alt="" src={`/assets/img/cart/cart_image.png`} />
                <p className="artist-author">artistgod</p>
                <a href="#">
                  <button>View Artworks</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="see-photos">
          <ArtGalleryHeaders text="See Photos" />

          <h5>See Photos</h5>
          <div>
            <Splide
              options={{
                rewind: true,
                type: "loop",
                width: 800,
                // gap: "1rem",
                autoWidth: true,
                autoplay: true,
              }}
            >
              {gallery_images[1].photos.map((item, i) => (
                <SplideSlide key={i}>
                  <img alt="" src={item.image} />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    );
  }
}
