import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import artistData from '../../../artistData';

import Ratings from '../../../Ratings/Ratings.component';

import Button from '../../../Button/Button.component';

import Comment from '../../../Comment/Comment.component';

import './ArtWorkMain.style.scss';
// import Input from '../../../Input/Input.component';

class ArtWorkMain extends Component {
    constructor(props) {
        super(props);

        //Get the artists id and work routename from the url path
        const { params: { artistId, workId } } = this.props.match;

        //Get the artist object that corresponds to the id
        const [artist] = artistData.filter(artist => artist.id === Number(artistId));

        //Get the particular work object relating to the artist
        const [work] = artist.works.filter(work => work.routeName === workId);


        this.state = {
            work: work,
        }
    }
    

    render () {
        //Destructuring work off the state
        const {work} = this.state;

        const { params: { artistId} } = this.props.match;
       
        return(
            <div className='main content'>
                <div className='artwork-main'>
                    <div className='banner'>
                        <Link to={`/artist/${artistId}`}>
                            <i className="fas fa-arrow-left arrow-left"></i>
                        </Link>

                        <div className='content'>
                            <div className='left'>
                                <h4>{work.name}</h4>
                                <p>by {work.artist}</p>
                                <Ratings />
                                <Button inverted  text='ADD TO CART'/>

                                <div className='options'>
                                    <i class="far fa-comment"></i>
                                    <i class="fas fa-share-alt"></i>
                                    <i class="far fa-heart"></i>
                                </div>
                            </div>

                            <div className='right'>
                                <img src={work.imgUrl} alt='' />

                                <Button text='Save to Catalogue'/>
                            </div>
                        </div>
                    
                    </div>

                    <div className='artwork-body'>
                        <div className='description'>
                            <h5>DESCRIPTION</h5>
                            <p>
                                Glossed art print is a very high quality embodiment. Created by {work.artist} as 
                                a way of portraying the importance of the reaction on the eyes. The eyes as a 
                                tool is powerful and describes emotions at different times.
                            </p>
                        </div>

                        <div className='frame'>
                            <h5>FRAME</h5>
                            <p>
                                {work.size}, {work.type}
                            </p>
                        </div>

                        <div className='price'>
                            <h5>PRICE</h5>
                            <p>
                                $ {work.price}
                            </p>
                        </div>

                        <Button text='Save to Catalogue'/>

                        <div className='comments-area'>
                            <div className='write-comment'>
                                <img className='artist-profile'  src='/images/user-img.png' alt='' />
                                <div>
                                    <textarea type='text' placeholder='Write a comment'/>
                                    <Button inverted>
                                        <i class="fas fa-paper-plane"></i>
                                    </Button>
                                </div>
                            </div>
                            <div className='comments'>
                                <Comment />
                                <Comment />
                                <Comment />
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        );
    }
}

export default ArtWorkMain;