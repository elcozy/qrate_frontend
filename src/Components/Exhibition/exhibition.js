import React, { Component } from "react";
// IMPORTING REACT ROUTER DOM
import './exhibit.css'

export default class exhibition extends Component{
    render(){
        return(
            <div className="main content">
                <div className="exhibition-image container bg-info mt-5">
                    <div className="filter"></div>
                    <div className="exhibition-text">
                        <h5>Art De Supreme 2020</h5>
                    </div>
                </div>
            </div>
        )
    }
}