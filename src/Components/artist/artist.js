import React, { Component } from "react";

// Importing Artists Data
import artistData from "./artistData";

// Importing Artist Collection
import ArtistCollection from "./ArtistCollection/ArtistCollection.component";

// Importing Input
import Input from "./Input/Input.component";

import './artist.css';

// IMPORTING REACT ROUTER DOM

class artist extends  Component{
    constructor() {
        super();

        this.state = {
            artistData: artistData,
        }
    }

    render(){
        return(
            <div className="main">
                <div className='artist content'>
                    <h2>Artists</h2>
                    <div className='page-description'>
                        <Input inputName='search' placeholder='Search'/>
                        <p>Discover top artists and emerging talents in the industry an view their collections.</p>
                    </div>
                    <ArtistCollection artists={this.state.artistData}/>
                </div>
            </div>
        )
    }
}

export default artist;