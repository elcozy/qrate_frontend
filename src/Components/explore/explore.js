import React, { Component } from "react";
// IMPORTING REACT ROUTER DOM
import './explore.css'

export default class explore extends  Component{

    render(){
        return(
            <div  className="main content explore">
                <nav className="nav nav-pills explore-nav">
                    <a className="explore-nav-link" href="#">Recommended For You</a>
                    <a className="explore-nav-link" href="#">Trending</a>
                    <a className="explore-nav-link" href="#">Oil Painting</a>
                    <a className="explore-nav-link" href="#">Digital Art</a>
                    <a className="explore-nav-link" href="#">Acrylic Painting</a>
                    <a className="explore-nav-link" href="#">Ceramics</a>
                    <a className="explore-nav-link" href="#">Pastel Art</a>
                </nav>
             <section className="explore-images ">
                 <div className="explore-images-card">
                     <img className="" src="images/img-one.png" alt="" />
                     <div className="">
                         <h4 className="card-title">Title</h4>
                         <p className="card-text">Text</p>
                     </div>
                 </div>
                 <div className="explore-images-card">
                     <img className="" src="images/img-two.png" alt="" />
                     <div className="">
                         <h4 className="card-title">Title</h4>
                         <p className="card-text">Text</p>
                     </div>
                 </div>
                 <div className="explore-images-card">
                     <img className="" src="images/img-three.png" alt="" />
                     <div className="card-body">
                         <h4 className="card-title">Title</h4>
                         <p className="card-text">Text</p>
                     </div>
                 </div>
                 <div className="explore-images-card">
                     <img className="" src="images/img-four.png" alt="" />
                     <div className="card-body">
                         <h4 className="card-title">Title</h4>
                         <p className="card-text">Text</p>
                     </div>
                 </div>
                 <div className="explore-images-card">
                     <img className="" src="images/img-five.png" alt="" />
                     <div className="card-body">
                         <h4 className="card-title">Title</h4>
                         <p className="card-text">Text</p>
                     </div>
                 </div>
                 <div className="explore-images-card">
                     <img className="" src="images/img-six.png" alt="" />
                     <div className="card-body">
                         <h4 className="card-title">Title</h4>
                         <p className="card-text">Text</p>
                     </div>
                 </div>
                 <div className="explore-images-card">
                     <img className="" src="images/img-seven.png" alt="" />
                     <div className="card-body">
                         <h4 className="card-title">Title</h4>
                         <p className="card-text">Text</p>
                     </div>
                 </div>
                 <div className="explore-images-card">
                     <img className="" src="images/img-eight.png" alt="" />
                     <div className="card-body">
                         <h4 className="card-title">Title</h4>
                         <p className="card-text">Text</p>
                     </div>
                 </div>

             </section>
            </div>
        )
    }
}