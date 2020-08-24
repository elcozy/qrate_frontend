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
           <div className="explore-row container-lg mt-3">
               <div className="explore-images-body">
                   <div className="explore-content">
                       <img src="images/img-one.png" alt="" className="explore-img"></img>
                       <div className="explore-content-body"> 
                           <div className="explore-user-detail">
                               <img src="images/user-img.png"></img><span className="explore-username">realgallery</span> <button className="follow">Follow</button>
                           </div>
                           <div className="explore-content-text">
                               <div className="explore-content-text-title">
                               <h5>Nigerian Art Festival 2020</h5>
                               <span className="tag">Exhibition</span>
                               </div>
                               <p>The event took place on the 25th of August, 2020. It was an event filled...</p>
                               <div className="user-reaction row container">
                                   <div><img src="images/comment.svg"></img></div>
                                   <div><img src="images/like.svg"></img></div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="explore-content">
                       <img src="images/img-four.png" alt="" className="explore-img" ></img>
                       <div className="explore-content-body">
                       <div className="explore-user-detail">
                               <img src="images/user-img.png"></img><span className="explore-username">realgallery</span> <button className="follow">Follow</button>
                           </div>
                              <div className="explore-content-text">
                               <div className="user-reaction row container">
                                   <div><img src="images/comment.svg"></img></div>
                                   <div><img src="images/like.svg"></img></div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="explore-content">
                       <img src="images/img-seven.png" alt=""  className="explore-img"></img>
                       <div className="explore-content-body">
                       <div className="explore-user-detail">
                               <img src="images/user-img.png"></img><span className="explore-username">realgallery</span> <button className="follow">Follow</button>
                           </div>
                           <div className="explore-content-text">
                               <div className="user-reaction row container">
                                   <div><img src="images/comment.svg"></img></div>
                                   <div><img src="images/like.svg"></img></div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="explore-images-body">
                   <div className="explore-content">
                       <img src="images/img-two.png" alt=""  className="explore-img"></img>
                       <div className="explore-content-body">
                       <div className="explore-user-detail">
                               <img src="images/user-img.png"></img><span className="explore-username">realgallery</span> <button className="follow">Follow</button>
                           </div>
                           <div className="explore-content-text">
                               <div className="user-reaction row container">
                                   <div><img src="images/comment.svg"></img></div>
                                   <div><img src="images/like.svg"></img></div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="explore-content">
                       <img src="images/img-five.png" alt="" className="explore-img"></img>
                       <div className="explore-content-body">
                       <div className="explore-user-detail">
                               <img src="images/user-img.png"></img><span className="explore-username">realgallery</span> <button className="follow">Follow</button>
                           </div>
                           <div className="explore-content-text">
                               <div className="explore-content-text-title">
                               <h5>The Face man</h5>
                               </div>
                               <p>Charcoal</p>
                               <div className="user-reaction row container">
                                   <div><img src="images/comment.svg"></img></div>
                                   <div><img src="images/like.svg"></img></div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="explore-content">
                       <img src="images/img-eight.png" alt=""  className="explore-img" height="200px"></img>
                       <div className="explore-content-body">
                       <div className="explore-user-detail">
                               <img src="images/user-img.png"></img><span className="explore-username">realgallery</span> <button className="follow">Follow</button>
                           </div>
                           <div className="explore-content-text">
                               <div className="user-reaction row container">
                                   <div><img src="images/comment.svg"></img></div>
                                   <div><img src="images/like.svg"></img></div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
               
               <div className="explore-images-body">
               <div className="explore-content">
                       <img src="images/img-three.png" alt=""  className="explore-img"></img>
                       <div className="explore-content-body">
                       <div className="explore-user-detail">
                               <img src="images/user-img.png"></img><span className="explore-username">realgallery</span> <button className="follow">Follow</button>
                           </div>
                           <div className="explore-content-text">
                               <div className="user-reaction row container">
                                   <div><img src="images/comment.svg"></img></div>
                                   <div><img src="images/like.svg"></img></div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="explore-content">
                       <img src="images/img-six.png" alt=""  className="explore-img"></img>
                       <div className="explore-content-body">
                       <div className="explore-user-detail">
                               <img src="images/user-img.png"></img><span className="explore-username">realgallery</span> <button className="follow">Follow</button>
                           </div>
                           <div className="explore-content-text">
                               <div className="user-reaction row container">
                                   <div><img src="images/comment.svg"></img></div>
                                   <div><img src="images/like.svg"></img></div>
                               </div>
                           </div>
                       </div>
                   </div>
             
                   
               </div>
           </div>
            </div>
        )
    }
}