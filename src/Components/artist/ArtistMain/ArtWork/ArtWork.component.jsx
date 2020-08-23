import React, {Component} from 'react';

import artistData from '../../artistData';

import Button from '../../Button/Button.component';

import './ArtWork.style.scss';


class ArtWork extends Component {
    constructor() {
        super();

        this.state = {
            artistData: artistData,
        }
    }

    render() {
        return(
            this.state.artistData.map(artist => {
                const {works} = artist;
                return(
                    <div className='artistCollection'>
                       <img className='' src={works.imgUrl} alt=''></img>
                       <div>
                           <Button text='View'/>
                       </div>
                    </div>
                )
            })
        )
    }
};

export default ArtWork;
