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
           <div className="explore-row container-fluid mt-3">
               <div className="explore-images-body">
                   <div className="explore-content pink">
                       <img src="images/img-one.png" alt="" className="explore-img"></img>
                       <div className="explore-content-body"> 
                           <div className="explore-user-detail">
                               <img src="images/user-img.png"></img><span className="explore-username">realgallery</span> <input className="follow" value="Follow" type="button" ></input>
                           </div>
                           <div className="explore-content-text">
                               <div className="explore-content-text-title">
                               <h5>Nigerian Art Festival 2020</h5>
                               <span className="tag">Exhibition</span>
                               </div>
                               <p>The event took place on the 25th of August, 2020. It was an event filled...</p>
                               <div className="user-reaction row container">
                                   <div><i className="far fa-comment"></i></div>
                                   <div><i className="far fa-heart"></i></div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="explore-content dark-blue">
                       <img src="images/img-four.png" alt="" className="explore-img" ></img>
                       <div className="explore-content-body">
                       <div className="explore-user-detail">
                               <img src="images/user-img.png"></img><span className="explore-username">realgallery</span> <input className="follow" value="Follow" type="button" ></input>
                           </div>
                              <div className="explore-content-text">
                               <div className="user-reaction row container">
                               <div><i class="far fa-comment"></i></div>
                                   <div><i className="far fa-heart"></i></div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="explore-content light-danger">
                       <img src="images/img-seven.png" alt=""  className="explore-img"></img>
                       <div className="explore-content-body">
                       <div className="explore-user-detail">
                               <img src="images/user-img.png"></img><span className="explore-username">realgallery</span> <button className="follow">Follow</button>
                           </div>
                           <div className="explore-content-text">
                               <div className="user-reaction row container">
                               <div><i class="far fa-comment"></i></div>
                                   <div><i className="far fa-heart"></i></div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="explore-images-body">
                   <div className="explore-content green">
                       <img src="images/img-two.png" alt=""  className="explore-img"></img>
                       <div className="explore-content-body">
                       <div className="explore-user-detail">
                               <img src="images/user-img.png"></img><span className="explore-username">realgallery</span> <input className="follow" value="Follow" type="button" ></input>
                           </div>
                           <div className="explore-content-text">
                               <div className="user-reaction row container">
                               <div><i class="far fa-comment"></i></div>
                                   <div><i className="far fa-heart"></i></div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="explore-content blue">
                       <img src="images/img-five.png" alt="" className="explore-img"></img>
                       <div className="explore-content-body">
                       <div className="explore-user-detail">
                               <img src="images/user-img.png"></img><span className="explore-username">realgallery</span> <input className="follow" value="Follow" type="button" ></input>
                           </div>
                           <div className="explore-content-text">
                               <div className="explore-content-text-title">
                               <h5>The Face man</h5>
                               </div>
                               <p>Charcoal</p>
                               <div className="user-reaction row container">
                               <div><i class="far fa-comment"></i></div>
                                   <div><i className="far fa-heart"></i></div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="explore-content orange">
                       <img src="images/img-eight.png" alt=""  className="explore-img"></img>
                       <div className="explore-content-body">
                       <div className="explore-user-detail">
                               <img src="images/user-img.png"></img><span className="explore-username">realgallery</span> <input className="follow" value="Follow" type="button" ></input>
                           </div>
                           <div className="explore-content-text">
                           <div className="explore-content-text-title">
                               <h5>Deception in disguise</h5>
                               <span className="tag">Illustration</span>
                               </div>
                               <p>They say time eventually heals one’s wounds. But does it really? The illustration titled “Deception in ...</p>
                               <div className="user-reaction row container">
                               <div><i class="far fa-comment"></i></div>
                                   <div><i className="far fa-heart"></i></div>
                               </div>
                           </div>
                       </div>
                   </div>
                   
               </div>
               
               <div className="explore-images-body">
               <div className="explore-content black">
                       <img src="images/img-three.png" alt=""  className="explore-img"></img>
                       <div className="explore-content-body">
                       <div className="explore-user-detail">
                               <img src="images/user-img.png"></img><span className="explore-username">realgallery</span> <input className="follow" value="Follow" type="button" ></input>
                           </div>
                           <div className="explore-content-text">
                               <div className="user-reaction row container">
                               <div><i class="far fa-comment"></i></div>
                                   <div><i className="far fa-heart"></i></div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="explore-content dark-orange">
                       <img src="images/img-six.png" alt=""  className="explore-img"></img>
                       <div className="explore-content-body">
                       <div className="explore-user-detail">
                               <img src="images/user-img.png"></img><span className="explore-username">realgallery</span>  <input className="follow" value="Follow" type="button" ></input>
                           </div>
                           <div className="explore-content-text">
                               <div className="user-reaction row container">
                               <div><i class="far fa-comment"></i></div>
                                   <div><i className="far fa-heart"></i></div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="explore-content blue">
                       <img src="images/img-five.png" alt="" className="explore-img"></img>
                       <div className="explore-content-body">
                       <div className="explore-user-detail">
                               <img src="images/user-img.png"></img><span className="explore-username">realgallery</span> <input className="follow" value="Follow" type="button" ></input>
                           </div>
                           <div className="explore-content-text">
                               <div className="explore-content-text-title">
                               <h5>The Face man</h5>
                               </div>
                               <p>Charcoal</p>
                               <div className="user-reaction row container">
                               <div><i class="far fa-comment"></i></div>
                                   <div><i className="far fa-heart"></i></div>
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