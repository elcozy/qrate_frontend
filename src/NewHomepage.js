import Slide2 from "./Components/NewHomepages/Slide2";
import Slide3 from "./Components/NewHomepages/Slide3";
import Slide4 from "./Components/NewHomepages/Slide4";
import Slide5 from "./Components/NewHomepages/Slide5";
import Slide6 from "./Components/NewHomepages/Slide6";
import Slide7 from "./Components/NewHomepages/Slide7";
import Header from "./Components/NewHomepages/Header";

import React, { useState } from "react";
import PropTypes from "prop-types";
import FirstHomepage from "./Components/NewHomepages/FistHome";
// import { Link } from "react-router-dom";
import "./styles.scss";
import { FullPage, Slide } from "react-full-page";

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
    const { getCurrentSlideIndex, style, className } = this.props;
    const currentSlideIndex = getCurrentSlideIndex();

    return (
      <div className={className} style={style}>
        {this.renderSlidesNumbers(currentSlideIndex)}
      </div>
    );
  }
}

const NewHomepage = () => {
  const [showComponent, setWhichComponentToShow] = useState("StartPage");
  return (
    <div className="homepage">
      <FullPage controls={CustomControls}>
        <Header
          showComponent={showComponent}
          onClick={(value) => {
            setWhichComponentToShow(value);
          }}
        />
        <Slide>
          <FirstHomepage
            showComponent={showComponent}
            onClick={(value) => {
              setWhichComponentToShow(value);
            }}
          />
        </Slide>
        <Slide>
          <Slide2 />
        </Slide>
        <Slide>
          <Slide3 />
        </Slide>
        <Slide>
          <Slide4 />
        </Slide>
        <Slide>
          <Slide5 />
        </Slide>
        <Slide>
          <Slide6 />
        </Slide>
        <Slide>
          <Slide7
            onClick={(value) => {
              setWhichComponentToShow(value);
            }}
          />
        </Slide>
      </FullPage>
    </div>
  );
};

export default NewHomepage;
