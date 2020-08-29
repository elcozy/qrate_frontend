import React from "react";
import { Link } from "react-router-dom";

import UserIcon from "../../assets/images/user.png";
import FaceIcon from "../../assets/images/Vector (1).png";
import CalendarIcon from "../../assets/images/Vector (2).png";
import CardIcon from "../../assets/images/Vector.png";
import CommentIcon from "../../assets/images/comment.svg";
import HeartIcon from "../../assets/images/heart.svg";
import faHeart from "../../assets/images/fa-heart.png";
import ShareIcon from "../../assets/images/share.svg";

import "./home.css";

import MainCard from "./mainCard";
import SidebarCard from "./sidebarCard";
import SidebarTrending from "./sidebarTrending";

class home extends React.Component {
  state = {
    heart: HeartIcon,
    heartCount: 108,
    comment: CommentIcon,
    commentCount: 2,
    share: ShareIcon,
  };

  onCommentClick = () => {
    this.setState({ commentCount: this.state.commentCount + 1 });
  };

  onHeartClick = () => {
    if (this.state.heart === HeartIcon) {
      this.setState({ heart: faHeart, heartCount: this.state.heartCount + 1 });
    } else if (this.state.heart === faHeart) {
      this.setState({
        heart: HeartIcon,
        heartCount: this.state.heartCount - 1,
      });
    }
  };

  render() {
    return (
      <>
        <div className="main content">
          <div className="home__container">
            <div className="home__main">
              {/* Section One */}
              <section className="home__main__card1">
                <div className="home__main__card2__img-section">
                  <Link to="#!">
                    <img
                      className="home__main__card2__img"
                      src={UserIcon}
                      alt="UserIcon"
                    />
                  </Link>
                </div>
                <div>
                  <textarea
                    className="home__main__card1__text-area"
                    name=""
                    rows="4"
                    cols="50"
                    placeholder="Any art buzz you want to share, feranmiolowo?"
                  ></textarea>
                  <div className="home__main__card1__lower">
                    <div className="home__main__card1__lower__img-container">
                      <Link to="#!">
                        <img
                          className="home__main__card1__lower__img"
                          src={CardIcon}
                          alt="CardIcon"
                        />
                      </Link>
                      <Link to="#!">
                        <img
                          className="home__main__card1__lower__img"
                          src={FaceIcon}
                          alt="FaceIcon"
                        />
                      </Link>
                      <Link to="#!">
                        <img
                          className="home__main__card1__lower__img"
                          src={CalendarIcon}
                          alt="CalendarIcon"
                        />
                      </Link>
                    </div>
                    <Link to="#!">
                      <button className="btn home__main__card1__btn">
                        POST
                      </button>
                    </Link>
                  </div>
                </div>
              </section>

              {/* Section  Two*/}
              <section className="home__main__card2">
                <MainCard
                  onHeartClick={this.onHeartClick}
                  onCommentClick={this.onCommentClick}
                  heart={this.state.heart}
                  heartCount={this.state.heartCount}
                  commentCount={this.state.commentCount}
                  share={this.state.share}
                />
              </section>

              {/* Section Three */}
              <section className="home__main__card3">
                <MainCard
                  onHeartClick={this.onHeartClick}
                  onCommentClick={this.onCommentClick}
                  heart={this.state.heart}
                  heartCount={this.state.heartCount}
                  commentCount={this.state.commentCount}
                  share={this.state.share}
                />
              </section>

              {/* Section Four */}
              <section className="home__main__card4">
                <MainCard
                  onHeartClick={this.onHeartClick}
                  onCommentClick={this.onCommentClick}
                  heart={this.state.heart}
                  heartCount={this.state.heartCount}
                  commentCount={this.state.commentCount}
                  share={this.state.share}
                />
              </section>
            </div>
            <div className="home__side">
              <div className="home__side__search">
                <span className="fa fa-search"></span>
                <input
                  className="form-control home__side__search-input"
                  placeholder="Search Artist, Gallery or Artwork"
                />
              </div>

              <div className="home__side__card-container">
                <h1 className="home__side__title">Top Picks for You</h1>

                {/* Section One */}
                <section className="home__side__card__container">
                  <SidebarCard />
                  <SidebarCard />
                  <SidebarCard />
                  <SidebarCard />
                </section>

                {/* Section Two */}
                <section className="home__side__trending">
                  <h4 className="home__side__trending__title">Trending</h4>
                  <SidebarTrending />
                  <SidebarTrending />
                  <SidebarTrending />
                  <a href="#more" className="home__side__trending__btn-more">
                    See more
                  </a>
                </section>

                <footer className="home__side__footer">
                  <ul className="home__side__footer__list-left">
                    <Link to="#!">
                      <li className="home__side__footer__list-left__item">
                        &copy; 2020 Qrate
                      </li>
                    </Link>
                  </ul>
                  <ul className="home__side__footer__list-right">
                    <Link to="#!">
                      <li className="home__side__footer__list-right_item">
                        Terms
                      </li>
                    </Link>
                    <Link to="#!">
                      <li className="home__side__footer__list-right_item">
                        Privacy
                      </li>
                    </Link>
                    <Link to="#!">
                      <li className="home__side__footer__list-right_item">
                        Info
                      </li>
                    </Link>
                  </ul>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default home;
