import React from 'react'
import { Link } from 'react-router-dom'

import UserIcon from '../../assets/images/user.png'
import EllipseIcon from '../../assets/images/Ellipse 26.png'
import PaintPaletteIcon from '../../assets/images/paint-palette 1.png'
import MonaLisa from '../../assets/images/mona-lisa-by-leonardo-da-vinci 1.png'
import Painting from '../../assets/images/RTX6W7OQ-e1560441912537 1.png'
import CommentIcon from '../../assets/images/comment.svg'



const mainCard =({onCommentClick, onHeartClick, commentCount, heart, heartCount, share  }) => {
    return (
        <>
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
                            <span onClick={onCommentClick}>
                                <img className="home__main__card2__lower__group1__icon1" src={CommentIcon} alt="CommentIcon" />   
                            </span>      
                        </Link>
                        <span>{ commentCount }</span>
                    </div>
                    <div className="home__main__card2__lower__group2">
                        <Link>
                            <span onClick={onHeartClick}>
                                <img className="home__main__card2__lower__group1__icon1" src={heart} alt="HeartIcon" />
                            </span>    
                        </Link>
                        <span>{ heartCount }</span>
                    </div>
                    <div className="home__main__card2__lower__group3__container ml-auto">
                        <Link>
                            <img className="home__main__card2__lower__group3__icon1 pb-3 pr-2" src={share} alt="ShareIcon" />
                        </Link>
                        <p className="home__main__card2__lower__group3__text">Share</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default mainCard
