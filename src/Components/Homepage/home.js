import React from 'react'
import { Link } from 'react-router-dom'

import UserIcon from '../../assets/images/user.png'
import FaceIcon from '../../assets/images/Vector (1).png'
import CalendarIcon from '../../assets/images/Vector (2).png'
import CardIcon from '../../assets/images/Vector.png'
import EllipseIcon from '../../assets/images/Ellipse 26.png'
import PaintPaletteIcon from '../../assets/images/paint-palette 1.png'
import ElFriento from '../../assets/images/Rectangle 194.svg'
import MonaLisa from '../../assets/images/mona-lisa-by-leonardo-da-vinci 1.png'
import Painting from '../../assets/images/RTX6W7OQ-e1560441912537 1.png'
import CommentIcon from '../../assets/images/comment.svg'
import HeartIcon from '../../assets/images/heart.svg'
import faHeart from '../../assets/images/fa-heart.png'
import ShareIcon from '../../assets/images/share.svg'

import './home.css'


class home extends React.Component{

    state = {
        heart: HeartIcon,
        heartCount: 108,
        comment: CommentIcon,
        commentCount: 2,
        share: ShareIcon
    }

    onCommentClick = ()=>{
        this.setState({ commentCount: this.state.commentCount + 1 })
    }

    onHeartClick = ()=>{
        if (this.state.heart === HeartIcon){
            this.setState({ heart: faHeart, heartCount: this.state.heartCount + 1 })
        } else if(this.state.heart === faHeart){
            this.setState({ heart: HeartIcon, heartCount: this.state.heartCount - 1 })
        }
        
    }

    render(){
        return(
            <>
                <div className="main content">
                    <div className="home__container">
                        <div className="home__main">
                            
                            {/* Section One */}
                            <section className="home__main__card1">
                                <div className="home__main__card2__img-section">
                                    <Link to="#!">
                                        <img  className="home__main__card2__img" src={UserIcon} alt="UserIcon" />
                                    </Link>  
                                </div>
                                <div>
                                    <textarea className="home__main__card1__text-area"  name="" rows="4" cols="50">
                                        Any art buzz you want to share, feranmiolowo?
                                    </textarea>
                                    <div className="home__main__card1__lower">
                                        <div className="home__main__card1__lower__img-container">
                                            <Link to="#!">
                                                <img  className="home__main__card1__lower__img" src={CardIcon} alt="CardIcon" />
                                            </Link>
                                            <Link to="#!">
                                                <img  className="home__main__card1__lower__img" src={FaceIcon} alt="FaceIcon" />
                                            </Link>
                                            <Link to="#!">
                                                <img  className="home__main__card1__lower__img" src={CalendarIcon} alt="CalendarIcon" />
                                            </Link>        
                                            
                                        </div>
                                        <Link to="#!">
                                            <button className="btn home__main__card1__btn">POST</button>
                                        </Link>
                                    </div>
                                </div>
                            </section>
                            
                            {/* Section  Two*/}
                            <section className="home__main__card2">
                                <Link to="#!">
                                    <img  className="home__main__card2__img" src={UserIcon} alt="UserIcon" />
                                </Link>
                                <div className="home__main__card2__content">
                                    <div className="home__main__card2__upper">
                                        <p className="home__main__card2__text">artistgod</p>
                                        <img  className="home__main__card2__icon" src={EllipseIcon} alt="EllipseIcon" />
                                        <div className="home__main__card2__icon-container">
                                            <img className="home__main__card2__icon" src={PaintPaletteIcon} alt="PaintPaletteIcon" />
                                            <p className="home__main__card2__icon__text" >Artiste</p>
                                        </div>
                                    </div> 
                                    <h6 className="home__main__card2__header">Mona Lisa</h6>
                                    <p className="home__main__card2__body">
                                    Da Vinci’s masterpiece is probably the most recognized artwork in the world today, and the most visited. Also known as La Giaconda, the painting is believed to illustrate the wife of wealthy Florentine merchant Francesco di Bartolomeo del Giocondo.
                                    </p>
                                    <div className="home__main__card2__body-image__container">
                                        <img className="home__main__card2__body-image1" src={MonaLisa} alt="body" />
                                        <img className="home__main__card2__body-image2" src={Painting} alt="body" />
                                    </div>
                                    <div className="home__main__card2__lower">
                                        <div className="home__main__card2__lower__group1">
                                            <Link to="#!">
                                                <span onClick={this.onCommentClick}>
                                                    <img className="home__main__card2__lower__group1__icon1" src={CommentIcon} alt="CommentIcon" />   
                                                </span>      
                                            </Link>
                                            <span>{ this.state.commentCount }</span>
                                        </div>
                                        <div className="home__main__card2__lower__group2">
                                            <Link>
                                                <span onClick={this.onHeartClick}>
                                                    <img className="home__main__card2__lower__group1__icon1" src={this.state.heart} alt="HeartIcon" />
                                                </span>    
                                            </Link>
                                            <span>{ this.state.heartCount }</span>
                                        </div>
                                        <div className="home__main__card2__lower__group3__container ml-auto">
                                            <Link>
                                                <img className="home__main__card2__lower__group3__icon1 pb-3 pr-2" src={this.state.share} alt="ShareIcon" />
                                            </Link>
                                            <p className="home__main__card2__lower__group3__text">Share</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section Three */}
                            <section className="home__main__card3">
                                <Link to="#!">
                                        <img  className="home__main__card2__img" src={UserIcon} alt="UserIcon" />
                                </Link>
                                <div className="home__main__card2__content">
                                    <div className="home__main__card2__upper">
                                        <p className="home__main__card2__text">artistgod</p>
                                        <img  className="home__main__card2__icon" src={EllipseIcon} alt="EllipseIcon" />
                                        <div className="home__main__card2__icon-container">
                                            <img className="home__main__card2__icon" src={PaintPaletteIcon} alt="PaintPaletteIcon" />
                                            <p className="home__main__card2__icon__text" >Artiste</p>
                                        </div>
                                    </div> 
                                    <h6 className="home__main__card2__header">Mona Lisa</h6>
                                    <p className="home__main__card2__body">
                                    Da Vinci’s masterpiece is probably the most recognized artwork in the world today, and the most visited. Also known as La Giaconda, the painting is believed to illustrate the wife of wealthy Florentine merchant Francesco di Bartolomeo del Giocondo.
                                    </p>
                                    <div className="home__main__card2__body-image__container">
                                        <img className="home__main__card2__body-image1" src={MonaLisa} alt="body" />
                                        <img className="home__main__card2__body-image2" src={Painting} alt="body" />
                                    </div>
                                    <div className="home__main__card2__lower">
                                        <div className="home__main__card2__lower__group1">
                                            <Link to="#!">
                                                <span onClick={this.onCommentClick}>
                                                    <img className="home__main__card2__lower__group1__icon1" src={CommentIcon} alt="CommentIcon" />   
                                                </span>      
                                            </Link>
                                            <span>{ this.state.commentCount }</span>
                                        </div>
                                        <div className="home__main__card2__lower__group2">
                                            <Link>
                                                <span onClick={this.onHeartClick}>
                                                    <img className="home__main__card2__lower__group1__icon1" src={this.state.heart} alt="HeartIcon" />
                                                </span>    
                                            </Link>
                                            <span>{ this.state.heartCount }</span>
                                        </div>
                                        <div className="home__main__card2__lower__group3__container ml-auto">
                                            <Link>
                                                <img className="home__main__card2__lower__group3__icon1 pb-3 pr-2" src={this.state.share} alt="ShareIcon" />
                                            </Link>
                                            <p className="home__main__card2__lower__group3__text">Share</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section Four */}
                            <section className="home__main__card4">
                                <Link to="#!">
                                        <img  className="home__main__card2__img" src={UserIcon} alt="UserIcon" />
                                </Link>
                                <div className="home__main__card2__content mb-5">
                                    <div className="home__main__card2__upper">
                                        <p className="home__main__card2__text">artistgod</p>
                                        <img  className="home__main__card2__icon" src={EllipseIcon} alt="EllipseIcon" />
                                        <div className="home__main__card2__icon-container">
                                            <img className="home__main__card2__icon" src={PaintPaletteIcon} alt="PaintPaletteIcon" />
                                            <p className="home__main__card2__icon__text" >Artiste</p>
                                        </div>
                                    </div> 
                                    <h6 className="home__main__card2__header">Mona Lisa</h6>
                                    <p className="home__main__card2__body">
                                    Da Vinci’s masterpiece is probably the most recognized artwork in the world today, and the most visited. Also known as La Giaconda, the painting is believed to illustrate the wife of wealthy Florentine merchant Francesco di Bartolomeo del Giocondo.
                                    </p>
                                    <div className="home__main__card2__body-image__container">
                                        <img className="home__main__card2__body-image1" src={MonaLisa} alt="body" />
                                        <img className="home__main__card2__body-image2" src={Painting} alt="body" />
                                    </div>
                                    <div className="home__main__card2__lower">
                                        <div className="home__main__card2__lower__group1">
                                            <Link to="#!">
                                                <span onClick={this.onCommentClick}>
                                                    <img className="home__main__card2__lower__group1__icon1" src={CommentIcon} alt="CommentIcon" />   
                                                </span>      
                                            </Link>
                                            <span>{ this.state.commentCount }</span>
                                        </div>
                                        <div className="home__main__card2__lower__group2">
                                            <Link>
                                                <span onClick={this.onHeartClick}>
                                                    <img className="home__main__card2__lower__group1__icon1" src={this.state.heart} alt="HeartIcon" />
                                                </span>    
                                            </Link>
                                            <span>{ this.state.heartCount }</span>
                                        </div>
                                        <div className="home__main__card2__lower__group3__container ml-auto">
                                            <Link>
                                                <img className="home__main__card2__lower__group3__icon1 pb-3 pr-2" src={this.state.share} alt="ShareIcon" />
                                            </Link>
                                            <p className="home__main__card2__lower__group3__text">Share</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="home__side">
                            <div class="home__side__search">
                                <span class="fa fa-search"></span>
                                <input className="form-control home__side__search-input" placeholder="Search Artist, Gallery or Artwork" />
                            </div>

                            <div className="home__side__card-container">
                                <h1 className="home__side__title">Top Picks for You</h1>

                                {/* Section One */}
                                <section className="home__side__card__container">
                                    <div className="card home__side__card__content">
                                        <img src={ElFriento} className="card-img-top" alt="ElFriento" />
                                        <div className="home__side__card__content__body">
                                            <h5 className="home__side__card__content__title">El Friento</h5>
                                            <p className="home__side__card__content__text">by artistgod</p>
                                            <span className="home__side__card__content__like">13,000 likes</span>
                                            <Link to="#!">
                                                <button className="btn home__side__card__content__button">Purchase</button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card home__side__card__content">
                                        <img src={ElFriento} className="card-img-top" alt="ElFriento" />
                                        <div className="home__side__card__content__body">
                                            <h5 className="home__side__card__content__title">El Friento</h5>
                                            <p className="home__side__card__content__text">by artistgod</p>
                                            <span className="home__side__card__content__like">13,000 likes</span>
                                            <Link to="#!">
                                                <button className="btn home__side__card__content__button">Purchase</button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card home__side__card__content">
                                        <img src={ElFriento} className="card-img-top" alt="ElFriento" />
                                        <div className="home__side__card__content__body">
                                            <h5 className="home__side__card__content__title">El Friento</h5>
                                            <p className="home__side__card__content__text">by artistgod</p>
                                            <span className="home__side__card__content__like">13,000 likes</span>
                                            <Link to="#!">
                                                <button className="btn home__side__card__content__button">Purchase</button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card home__side__card__content">
                                        <img src={ElFriento} className="card-img-top" alt="ElFriento" />
                                        <div className="home__side__card__content__body">
                                            <h5 className="home__side__card__content__title">El Friento</h5>
                                            <p className="home__side__card__content__text">by artistgod</p>
                                            <span className="home__side__card__content__like">13,000 likes</span>
                                            <Link to="#!">
                                                <button className="btn home__side__card__content__button">Purchase</button>
                                            </Link>
                                        </div>
                                    </div>
                                </section>

                                {/* Section Two */}
                                <section className="home__side__trending">
                                    <h4 className="home__side__trending__title">Trending</h4>
                                    <div className="home__side__trending__content__container mb-3">
                                        <div>
                                            <h4 className="home__side__trending__title">Nigerian Art Festival 2020</h4>
                                            <span className="home__side__trending__span">25 posts</span>
                                        </div>
                                        <div>
                                            <Link to="#!">
                                                <i className="fa fa-chevron-right home__side__trending__icon"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="home__side__trending__content__container mb-3">
                                        <div>
                                            <h4 className="home__side__trending__title">Nigerian Art Festival 2020</h4>
                                            <span className="home__side__trending__span">25 posts</span>
                                        </div>
                                        <div>
                                            <Link to="#!">
                                                <i className="fa fa-chevron-right home__side__trending__icon"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="home__side__trending__content__container mb-3">
                                        <div>
                                            <h4 className="home__side__trending__title">Nigerian Art Festival 2020</h4>
                                            <span className="home__side__trending__span">25 posts</span>
                                        </div>
                                        <div>
                                            <Link to="#!">
                                                <i className="fa fa-chevron-right home__side__trending__icon"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <a href="#more" className="home__side__trending__btn-more">See more</a>
                                </section>

                                <footer className="home__side__footer">
                                    <ul className="home__side__footer__list-left">
                                        <Link to="#!">
                                            <li className="home__side__footer__list-left__item">&copy;  2020 Qrate</li>
                                        </Link>
                                    </ul>
                                    <ul className="home__side__footer__list-right">
                                        <Link to="#!">
                                            <li className="home__side__footer__list-right_item">Terms</li>
                                        </Link>
                                        <Link to="#!">
                                            <li className="home__side__footer__list-right_item">Privacy</li>
                                        </Link>
                                        <Link to="#!">
                                            <li className="home__side__footer__list-right_item">Info</li>
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