import React from 'react'
import { Link } from 'react-router-dom'

import ElFriento from '../../assets/images/Rectangle 194.svg'

const sidebarCard = ()=> {
    return (
        <>
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
        </>
    )
}

export default sidebarCard
