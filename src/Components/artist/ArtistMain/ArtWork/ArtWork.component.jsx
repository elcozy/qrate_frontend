import React from 'react';

import Button from '../../Button/Button.component';

import './ArtWork.style.scss';


const  ArtWork = ({work}) =>  {
    
    return(
        <div className='artWork'>
            <img className='' src={work.imgUrl} alt=''></img>
            <div className='work-description'>
                <div className='left'>
                    <h4> {work.name} </h4>
                    <div className='work-details'>
                        <p>by {work.artist}</p>
                        <p>{work.type}, {work.size}</p>
                    </div>
                    <h4>$ {work.price}</h4>
                    <Button text='View'/>
                </div>

                <div className='ratings'>
                    <i className="fas fa-star star"></i>
                    <i className="fas fa-star star"></i>
                    <i className="fas fa-star star"></i>
                    <i className="fas fa-star star"></i>
                    <i className="fas fa-star-half star"></i>
                </div>
            </div>
        </div>
    )

};

export default ArtWork;
