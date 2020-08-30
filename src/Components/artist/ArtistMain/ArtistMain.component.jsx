import React, {Component} from 'react';

import artistData from '../artistData';

import {Link} from 'react-router-dom';

import Drop from '../Dropdown/Dropdown.component';

import ArtWork from './ArtWork/ArtWork.component';

import '../../Navbar/nav.css'

import './ArtistMain.style.scss';



class ArtistMain extends Component {
    constructor(props){
        super(props);

        //Get the artists id from the url path
        const { params: { artistId } } = this.props.match;

        //Get the artist object that corresponds to the id
        const artist = artistData.filter(artist => artist.id === Number(artistId));

        this.state = {
            artist: artist
        }
    }

   
    render() {
        //Destructuring artist off the state
        const {artist} = this.state;

        //Destructuring the object off the artist array.
        const [selectedArtist] = artist;
        
        return (
       
            <div className='main content blo'>
                <div className='artistMain container-fluid'>
                    <Link to='/artist'>
                        <i className="fas fa-arrow-left arrow-left"></i>
                    </Link>
                    <h2 className='name'>{selectedArtist.name}</h2>

                    <p className='artist-description'>
                        {selectedArtist.name} is implicity synonymous with modern art, and it dosen't hurt that he fits the
                        generaly held image of the fugitive genius whose goals are balanced by a taste for living big. He turned
                        the field of art history with radical innovations that include college and Cubism, which destroyed the 
                        stranglehold of representational material matter on art, and set the rate for other 20th-century artists.
                    </p>

                    <div className='categories'>
                        <p>Category of works:</p>
                        <p>
                            <i className="fas fa-circle circle1"></i>
                            Acrylic Painting
                        </p>
                        <p>
                            <i className="fas fa-circle circle2"></i>
                            Oil Painting
                        </p>
                        <p>
                            <i className="fas fa-circle circle3"></i>
                            Sculpture Painting
                        </p>
                    </div>

                    <div className='dropdown-container'>
                        <Drop placeholder='Sort By'/>
                    </div>

                    <div className='artistWorks'>
                        {
                            selectedArtist.works.map(work => {
                                return (
                                    <ArtWork key={work.id}  work={work}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            
        );
    }
}

export default ArtistMain;