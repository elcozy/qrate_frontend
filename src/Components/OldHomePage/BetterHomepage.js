import React, { Component } from "react";
import "./Homepage.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import PropTypes from "prop-types";

// import { FullPage, Slide } from "react-full-page";
const categories_data = [
  { name: "Animation", icon: "A" },
  { name: "Drawing", icon: "D" },
  { name: "Photography", icon: "P" },
  { name: "Painting", icon: "P" },
  { name: "Painting", icon: "P" },
  { name: "Apparel", icon: "A" },
];
function WhatWeDo() {
  return (
    <div>
      <div className="what-we-do container">
        <span className="head">What We Do</span>
        <span className="describe">
          Qrate an app that connects visual artists (drawings, paintings,
          digital artists, calligraphy artists, photographers, etc) to
          buyers/clients who can purchase their work or commission them to do
          new work.
        </span>
        <div className="cards-descriptions">
          <div className="col-12 col-md-6 col-lg">
            <div className="card-description">
              <div className="card-img">
                <img src="/assets/img/homepage/connect-artists.svg" alt="" />
              </div>
              <span className="headin">Connect With Artists</span>
              <span className="describe">
                brings digital artist drawings and paintings together to share
                their work and passion and earn.
              </span>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg">
            <div className="card-description">
              <div className="card-img">
                <img src="/assets/img/homepage/buy-artwork.svg" alt="" />
              </div>
              <span className="headin">Buy and Sell Artwork</span>
              <span className="describe">
                brings digital artist drawings and paintings together to share
                their work and passion and earn.
              </span>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg">
            <div className="card-description">
              <div className="card-img">
                <img src="/assets/img/homepage/opportunity.svg" alt="" />
              </div>
              <span className="headin">Connect to Opportunities</span>
              <span className="describe">
                brings digital artist drawings and paintings together to share
                their work and passion and earn.
              </span>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg">
            <div className="card-description">
              <div className="card-img">
                <img src="/assets/img/homepage/delivery.svg" alt="" />
              </div>
              <span className="headin">Package Delivery</span>
              <span className="describe">
                brings digital artist drawings and paintings together to share
                their work and passion and earn.
              </span>
            </div>
          </div>
        </div>
        <a href="/signup">
          <div className="button-starts">
            <button>Get Started</button>
          </div>
        </a>
      </div>
    </div>
  );
}
function FeaturedArtWorks() {
  return (
    <div>
      <div className="featured-art-works container-fluid">
        <span className="head">Featured Art Works</span>

        <div className="sliders">
          <Splide
            options={{
              rewind: true,
              // width: 800,
              gap: "1rem",
              autoWidth: true,
              autoplay: true,
              interval: 5000,
              breakpoints: {
                1000: {
                  autoWidth: true,
                  perPage: 1,
                },
              },
            }}
          >
            <SpliderContent />
            <SpliderContent />
          </Splide>
        </div>

        <div className="d-flex flex-row bottom-nav">
          <a class="nav-links " href="#">
            Drawings
          </a>
          <a class="nav-links" href="#">
            Paintings
          </a>
          <a class="nav-links" href="#">
            Photography
          </a>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
function SpliderContent({}) {
  return (
    <>
      <SplideSlide>
        <div className="slider-item">
          <div className="image">
            <img
              src="/assets/img/homepage/slider-image.svg"
              class="d-block w-100"
              alt="..."
            />
            <span className="overlay">
              <a href="#">View More</a>
            </span>
          </div>
          <a href="#">
            <div className="slider-item-link">
              <span>Sculpture painting.</span>

              <i className="fas fa-chevron-right arrow-settings"></i>
            </div>
          </a>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="slider-item">
          <div className="image">
            <img
              src="/assets/img/homepage/slider-image2.svg"
              class="d-block w-100"
              alt="..."
            />
            <span className="overlay">
              <a href="#">View More</a>
            </span>
          </div>
          <a href="#">
            <div className="slider-item-link">
              <span>Sculpture painting.</span>

              <i className="fas fa-chevron-right arrow-settings"></i>
            </div>
          </a>
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className="slider-item">
          <div className="image">
            <img
              src="/assets/img/homepage/slider-image3.svg"
              class="d-block w-100"
              alt="..."
            />
            <span className="overlay">
              <a href="#">View More</a>
            </span>
          </div>
          <a href="#">
            <div className="slider-item-link">
              <span>Sculpture painting.</span>

              <i className="fas fa-chevron-right arrow-settings"></i>
            </div>
          </a>
        </div>
      </SplideSlide>
    </>
  );
}

function AllCategories() {
  return (
    <div>
      <div className="all-categories container">
        <h1 className="head">All Categories</h1>
        <div className="cards">
          {categories_data.map((item) => (
            <div className="categories-card" key={item.id}>
              <div className="categories-card-top">
                <button className="star">
                  <i class="far fa-star"></i>
                </button>
                <span className="image-name">{item.icon}</span>
                <span className="name">{item.name}</span>
              </div>
              <span className="buttons">
                <a href="#">
                  <button className="add">
                    <i class="fas fa-plus"></i> Add to Gallery
                  </button>
                </a>
                <a href="#">
                  <button className="view">View</button>
                </a>
              </span>
            </div>
          ))}
        </div>
        <div className="view-more">
          <a href="#">View More</a>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
}

const LikeCard = () => (
  <div className="card-like">
    <i class="fas fa-shopping-cart"></i>
    <i class="far fa-heart"></i>
    <i class="fas fa-retweet"></i>
  </div>
);

function ShopAllCategories() {
  return (
    <div>
      <div className="shop-all-categories container">
        <h1 className="head">Shop From All Categories</h1>
        <div className="cards">
          <div className="all-cate">
            <div className="single one">
              <img src="/images/homepage/01.png" alt="..." />
              <LikeCard />
              {/* <img src="/assets/img/homepage/pic-nav.svg" alt="..." /> */}
            </div>
            {/* <div className="double two"> */}
            <div className="double two2 oner">
              <img src="/images/homepage/01.png" alt="..." />
              <LikeCard />
              <img src="/assets/img/homepage/pic-nav.svg" alt="..." />
            </div>
            <div className="double two2 twor">
              <img src="/images/homepage/01.png" alt="..." />
              <LikeCard />
              {/* <img src="/assets/img/homepage/pic-nav.svg" alt="..." /> */}
            </div>
            {/* </div> */}
            <div className="single three">
              <img src="/images/homepage/01.png" alt="..." />
              <LikeCard />
            </div>
            <div className="double four oner">
              <img src="/images/homepage/01.png" alt="..." />
              <LikeCard />
              {/* <img src="/assets/img/homepage/pic-nav.svg" alt="..." /> */}
            </div>
            <div className="double four twor">
              <img src="/images/homepage/01.png" alt="..." />
              <LikeCard />
              {/* <img src="/assets/img/homepage/pic-nav.svg" alt="..." /> */}
            </div>
            <div className="single five">
              {/* <img src="/images/homepage/01.png" alt="..." /> */}
              <LikeCard />
            </div>
            <div className="double six oner">
              <img src="/images/homepage/01.png" alt="..." />
              <LikeCard />
              {/* <img src="/assets/img/homepage/pic-nav.svg" alt="..." /> */}
            </div>
            <div className="double six twor">
              <img src="/images/homepage/01.png" alt="..." />
              <LikeCard />
              {/* <img src="/assets/img/homepage/pic-nav.svg" alt="..." /> */}
            </div>
          </div>
        </div>
        <div className="view-more">
          <a href="#">View More</a>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
}
const HowItWorks = () => (
  <div class="how-it-works container">
    <span className="head">How it works.</span>{" "}
    <div className="cards">
      <div className=" col-12 col-md">
        <span className="card">
          <span className="num">01</span>
          <span className="header">Create An Account</span>
          <span className="description">
            You can’t wait to sign up. You’ll be so amazed! First, Create an
            account on Qrate.
          </span>
        </span>
      </div>
      <div className=" col-12 col-md">
        <span className="card">
          <span className="num">01</span>
          <span className="header">Select From Categories</span>
          <span className="description">
            You’ll find many categories of Art. Select the art categories you’ll
            love to appear in your feed.
          </span>
        </span>
      </div>
      <div className=" col-12 col-md">
        <span className="card">
          <span className="num">01</span>
          <span className="header">Explore, Buy or Sell Art</span>
          <span className="description">
            You’ll find many categories of Art. Select the art categories you’ll
            love to appear in your feed.
          </span>
        </span>
      </div>
    </div>
  </div>
);
const ExperiencedReviews = () => (
  <div className="experienced-reviews container">
    <span className="head">Experienced Reviews</span>
    <div className="cards">
      <div className="card col-12 col-md-4">
        <div className="left-side col-2 col-md-3">
          <span className="num">01</span>
          <span className="image w-100 h-25">
            <img
              src="/images/homepage/01.png"
              className="d-block w-100"
              alt="..."
            />
          </span>
        </div>
        <div className="right-side col">
          <span className="description">
            I love art!, I admire art! I do art! . I must say, this platform has
            helped me a lot in my career. Finding a way and means to connect to
            the world and sell my work was an issue for me before Qrate Came
            into the picture.
          </span>
          <span className="by">Nelson Mandela</span>
        </div>
      </div>

      <div className="card col-12 col-md-4">
        <div className="left-side col-2 col-md-3">
          <span className="num">01</span>
          <span className="image w-100 h-25">
            <img
              src="/images/homepage/01.png"
              className="d-block w-100"
              alt="..."
            />
          </span>
        </div>
        <div className="right-side col">
          <span className="description">
            I love art!, I admire art! I do art! . I must say, this platform has
            helped me a lot in my career. Finding a way and means to connect to
            the world and sell my work was an issue for me before Qrate Came
            into the picture.
          </span>
          <span className="by">Nelson Mandela</span>
        </div>
      </div>

      <div className="card col-12 col-md-4">
        <div className="left-side col-2 col-md-3">
          <span className="num">01</span>
          <span className="image w-100 h-25">
            <img
              src="/images/homepage/01.png"
              className="d-block w-100"
              alt="..."
            />
          </span>
        </div>
        <div className="right-side col">
          <span className="description">
            I love art!, I admire art! I do art! . I must say, this platform has
            helped me a lot in my career. Finding a way and means to connect to
            the world and sell my work was an issue for me before Qrate Came
            into the picture.
          </span>
          <span className="by">Nelson Mandela</span>
        </div>
      </div>
    </div>
  </div>
);

const TopArtistSplide = () => (
  <SplideSlide>
    <div className="card">
      <div className="image">
        <img src="/images/homepage/01.png" alt="..." />
      </div>
      <div className="details">
        <div className="name">
          <span className="name">Adelanke Adelanke</span>
          <span className="title">Calligrapher</span>
        </div>
        <div className="status">
          <span className="title">Status: </span>
          <span className="result">Available</span>
        </div>
      </div>
      <a href="#" className="button">
        <button className="btn">Visit Adelanke</button>
      </a>
    </div>
  </SplideSlide>
);

const MeetOutTopArtist = () => (
  <div className="meet-top-artists container-fluid">
    <span className="head">Meet Our Top Artists</span>
    <Splide
      options={{
        rewind: true,
        // width: 800,
        gap: "1rem",
        autoWidth: true,
        autoplay: true,
        interval: 5000,
        breakpoints: {
          1000: {
            autoWidth: true,
            perPage: 1,
          },
        },
      }}
    >
      <TopArtistSplide />
      <TopArtistSplide />
      <TopArtistSplide />
      <TopArtistSplide />
    </Splide>
  </div>
);
function OurRecords() {
  return (
    <div>
      <div className="our-records container">
        <div className="cards">
          <div className="record-card col-12 col-md-6 col-lg-3">
            <span className="number">500</span>
            <span className="text">Delivered ORders</span>
            <a href="#" className="button">
              <button className="btn">Start Shopping</button>
            </a>
          </div>
          <div className="record-card col-12 col-md-6 col-lg-3">
            <span className="number">1300</span>
            <span className="text">Clients</span>
            <a href="#" className="button">
              <button className="btn">See Clients</button>
            </a>
          </div>
          <div className="record-card col-12 col-md-6 col-lg-3">
            <span className="number">2000</span>
            <span className="text">ARTISTS</span>
            <a href="#" className="button">
              <button className="btn">See Artists</button>
            </a>
          </div>
          <div className="record-card col-12 col-md-6 col-lg-3">
            <span className="number">0</span>
            <span className="text">Pending orders</span>
            <a href="#" className="button">
              <button className="btn">Make Order</button>
            </a>
          </div>
        </div>
        <div className="view-more">
          <a href="#">View More</a>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
}
function Subscribe() {
  return (
    <div>
      <div className="subscribe">
        <div className="container">
          <span className="">
            Get Updated Immediately On Latest Artworks In Your List of Chosen
            Art Category
          </span>
          <span className="">
            Be the first to learn about new latest artworks in your all chosen
            art category.
          </span>
          <form className="form-inline">
            <div class="form-group mb-2">
              <label for="inputEmail" class="sr-only">
                email
              </label>
              <input
                type="email"
                class="form-control"
                id="inputEmail"
                placeholder="Enter your email address"
              />
            </div>
            <button type="submit" class="btn mb-2">
              SUBSCRIBE
            </button>
          </form>
          <div className="">still working on this page</div>
        </div>
      </div>
    </div>
  );
}

class CustomControls extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    getCurrentSlideIndex: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired,
    scrollToSlide: PropTypes.func.isRequired,
    slidesCount: PropTypes.number.isRequired,
    style: PropTypes.object,
  };

  static defaultProps = {
    className: "full-page-controls",
    style: {
      left: "2%",
      position: "fixed",
    },
  };

  renderSlidesNumbers(currentSlideIndex) {
    const { slidesCount, scrollToSlide } = this.props;
    const slidesNumbers = [];
    for (let i = 0; i < slidesCount; i++) {
      const buttonProps = {
        disabled: currentSlideIndex === i,
        key: i,
        onClick: () => scrollToSlide(i),
      };
      slidesNumbers.push(
        <button type="button" {...buttonProps}>
          {i + 1}
        </button>
      );
    }
    return slidesNumbers;
  }

  render() {
    const { getCurrentSlideIndex, slidesCount, style, className } = this.props;
    const currentSlideIndex = getCurrentSlideIndex();

    return (
      <div className={className} style={style}>
        {this.renderSlidesNumbers(currentSlideIndex)}
      </div>
    );
  }
}

const HeroSection = () => (
  <div
    class="carousel slide carousel-fade"
    id="carouselFade"
    data-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        {/* <img
             src="/images/homepage/01.png"
             class="d-block w-100"
             alt="..."
           /> */}
      </div>
      <div class="carousel-item">
        {/* <img
             src="/images/homepage/05.png"
             class="d-block w-100"
             alt="..."
           /> */}
      </div>
      <div class="carousel-item">
        {/* <img
             src="/images/homepage/04.png"
             class="d-block w-100"
             alt="..."
           /> */}
      </div>
      <div className="homepage-carousel-text">
        <span className="discover-the-beauty">
          Discover The Beauty Of <span className="colored">Art</span> And{" "}
          <span className="colored">Creativity.</span>
        </span>

        <span className="qrate-connects">
          Qrate connects Africa’s best visual artists and creatives.
        </span>
        <form>
          <div class="form-group dropdown-select mb-0">
            <select class="form-control" id="artist-client">
              <option value="" defaultValue disabled hidden>
                Category
              </option>
              <option>Artist</option>
              <option>Client</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            EXPLORE
          </button>
        </form>
        <span className=""></span>
        <span className=""></span>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselFade"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselFade"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
);

export default class Signin extends Component {
  render() {
    return (
      <div className="new-homepage">
        {/* <FullPage controls={CustomControls}> */}
        {/* <Slide> */}
        <HeroSection />
        {/* </Slide> */}
        {/* <Slide> */}
        <WhatWeDo />
        {/* </Slide> */}
        {/* <Slide> */}
        <FeaturedArtWorks />
        {/* </Slide> */}
        {/* <Slide> */}
        <AllCategories />
        {/* </Slide> */}
        {/* <Slide> */}
        <ShopAllCategories />
        {/* </Slide> */}
        <HowItWorks />
        {/* <Slide> */}
        <ExperiencedReviews />
        <MeetOutTopArtist />
        <OurRecords />
        {/* </Slide> */}
        {/* <Slide> */}
        <Subscribe />
        {/* </Slide> */}
        {/* </FullPage> */}
      </div>
    );
  }
}
