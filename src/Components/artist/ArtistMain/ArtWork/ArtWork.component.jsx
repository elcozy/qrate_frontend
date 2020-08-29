import React from 'react';

import Button from '../../Button/Button.component';

import Ratings from '../../Ratings/Ratings.component';

import { Link, withRouter } from 'react-router-dom';

import './ArtWork.style.scss';


const  ArtWork = ({work, match}) =>  {
    
    return(
        <div className='artWork'>
            <img className='' src={work.imgUrl} alt='' />
            <div className='work-description'>
                <div className='left'>
                    <h4> {work.name} </h4>
                    <div className='work-details'>
                        <p>by {work.artist}</p>
                        <p>{work.type}, {work.size}</p>
                    </div>
                    <h4>$ {work.price}</h4>
                    <Link to={`${match.url}/${work.routeName}`}>
                        <Button text='View'/>
                    </Link>
                </div>

                <Ratings />
            </div>
        </div>
    )

};

export default withRouter(ArtWork);
