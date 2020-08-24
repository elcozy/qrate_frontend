import React, { Component } from "react";
// IMPORTING REACT ROUTER DOM

export default class artist extends  Component{

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