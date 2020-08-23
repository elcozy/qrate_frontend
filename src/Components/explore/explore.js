import React, { Component } from "react";
// IMPORTING REACT ROUTER DOM
import './explore.css'

export default class explore extends  Component{

    render(){
        return(
            <div  className="main content">
                <nav className="nav nav-pills explore-nav">
                    <a className="explore-nav-link" href="#">Recommended For You</a>
                    <a className="explore-nav-link" href="#">Trending</a>
                    <a className="explore-nav-link" href="#">Oil Painting</a>
                    <a className="explore-nav-link" href="#">Digital Art</a>
                    <a className="explore-nav-link" href="#">Acrylic Painting</a>
                    <a className="explore-nav-link" href="#">Ceramics</a>
                    <a className="explore-nav-link" href="#">Pastel Art</a>
                </nav>
           <div className="explore-row container-lg mt-3 bg-info">
               <div className="explore-images-body">
                   <div className="explore-content">
                       <img src="images/img-one.png" alt="" className="explore-img"></img>
                   </div>
                   <div className="explore-content">
                       <img src="images/img-two.png" alt="" className="explore-img" ></img>
                   </div>
                   <div className="explore-content">
                       <img src="images/img-three.png" alt=""  className="explore-img"></img>
                   </div>
               </div>
               <div className="explore-images-body">
                   <div className="explore-content">
                       <img src="images/img-four.png" alt=""  className="explore-img"></img>
                   </div>
                   <div className="explore-content">
                       <img src="images/img-five.png" alt="" className="explore-img"></img>
                   </div>
                   <div className="explore-content">
                       <img src="images/img-six.png" alt=""  className="explore-img"></img>
                   </div>
               </div>
               
               <div className="explore-images-body">
               <div className="explore-content">
                       <img src="images/img-seven.png" alt=""  className="explore-img"></img>
                   </div>
                   <div className="explore-content">
                       <img src="images/img-eight.png" alt=""  className="explore-img"></img>
                   </div>
             
                   
               </div>
           </div>
            </div>
        )
    }
}