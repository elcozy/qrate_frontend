import React from 'react'
import { Link } from 'react-router-dom'

const sidebarTrending = ()=> {
    return (
        <>
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
        </>
    )
}

export default sidebarTrending

