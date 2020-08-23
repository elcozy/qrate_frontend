import React from "react";
import "./artgallery.css";
import "./ArtGalleryDetails.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { gallery_images, art_gallery_images } from "../Cart/data";

export default class ArtGalleryDetails extends React.Component {
  render() {
    return (
      <div className="main  mt-5 pt-4 mt-lg-5 pt-lg-5 container-fluid mb-5 pb-5 mb-lg-3 pb-lg-0 w-auto art-gallery-details">
        <h5>Nike Art Gallery</h5>
        <div className="header mb-4">
          <img alt=""></img>
        </div>
        <div className="location mb-4">
          No. 2 Oba Yekini Elegushi Rd, Lekki Phase I, Lekki, Lagos
        </div>
        <div className="gallery-description">
          <h5>
            Nike Art Gallery is an art gallery in Lagos owned by Nike
            Davies-Okundaye. The gallery is arguably the largest of its kind in
            West Africa. Housed in a five-storey tall building, it boasts a
            collection of about 8,000 diverse artworks from various Nigerian
            artists.
          </h5>
        </div>
        <div className="upcoming-exhibition">
          <h4>Upcoming Exhibitions</h4>
          <div className="exhibition d-flex flex-row flex-wrap  justify-content-center justify-content-md-start pr-3 py-4 py-md-0 px-3 pl-md-0">
            <div className="img">
              <img alt="" src={`/assets/img/cart/cart_image.png`} />
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
        <div className="featured-collections mt-5">
          <h4>Featured Collections</h4>
          {/* <div className=" f-collections d-flex flex-wrap flex-row"> */}
          <Splide
            options={{
              rewind: true,
              type: "loop",
              width: 800,
              gap: "1rem",
              autoWidth: true,
              autoplay: true,
            }}
          >
            <SplideSlide>
              <div className="featured-collection w-auto bg-white d-flex flex-row justify-content-end pr-4 mb-4">
                <img alt="" src={`/assets/img/cart/cart_image.png`} />
                <div className="exhibition-details ml-3 mt-4">
                  <h4 className="collection-name">Sculpture of Two</h4>
                  <p className="collection-author">by artistgod</p>
                  <h5 className="collection-price">150</h5>
                  <a href="#">
                    <button>Purchase</button>
                  </a>
                </div>
              </div>
            </SplideSlide>

            <SplideSlide>
              <div className="featured-collection w-auto bg-white d-flex flex-row justify-content-end pr-4 mb-4">
                <img alt="" src={`/assets/img/cart/cart_image.png`} />
                <div className="exhibition-details ml-3 mt-4">
                  <h4 className="collection-name">Sculpture of Two</h4>
                  <p className="collection-author">by artistgod</p>
                  <h5 className="collection-price">150</h5>
                  <a href="#">
                    <button>Purchase</button>
                  </a>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="featured-collection w-auto bg-white d-flex flex-row justify-content-end pr-4 mb-4">
                <img alt="" src={`/assets/img/cart/cart_image.png`} />
                <div className="exhibition-details ml-3 mt-4">
                  <h4 className="collection-name">Sculpture of Two</h4>
                  <p className="collection-author">by artistgod</p>
                  <h5 className="collection-price">150</h5>
                  <a href="#">
                    <button>Purchase</button>
                  </a>
                </div>
              </div>
            </SplideSlide>
          </Splide>
          {/* </div> */}
        </div>
        <div className="featured-artists mt-5">
          <h4>Upcoming Exhibitions</h4>
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
              {art_gallery_images.map((item, i) => (
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
