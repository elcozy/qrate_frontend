import React, { Component } from "react";
// IMPORTING REACT ROUTER DOM
import './explore.css'
import like from './like.svg'
import isLiked from './isLiked.svg'
import data from './explore.json'

export default class explore extends  Component{
 
 
    constructor(props) {    
        super(props)
        this.state = {
           Like: like,
          likeCount: 0,
          id: 1,
        }
        this.handleClick = this.handleClick.bind(this)
      }
      handleClick() {
        if (this.state.Like === like){
            this.setState({ Like: isLiked, likeCount: this.state.likeCount + 1 })
        } else if(this.state.Like === isLiked){
            this.setState({ Like: like, likeCount: this.state.likeCount - 1 })
        }
      }

      id = () =>{
          this.setState( this.state.i + 1 )
      }


   

    render(){
        const detail = this.state
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
               {data.map((detail) => (
                   <div className="explore-content" className={detail.class}>
                      
                         <div>
                              <img src={detail.imgSrc} alt="" className="explore-img"></img> 
                              <div className="explore-content-body"> 
                           <div className="explore-user-detail">
                               <img src="images/user-img.png"></img><span className="explore-username">realgallery</span> <input className="follow" value="Follow" type="button" ></input>
                           </div>
                           <div className="explore-content-text">
                               <div className="explore-content-text-title">
                               <h5>{detail.title}</h5>
                               <span className="tag">{detail.tag}</span>
                               </div>
                               <p>{detail.text}</p>
                               <div className="user-reaction row container">
                                   <div  ><i  className="far fa-comment"></i></div>
                                   <div onClick={this.handleClick} key={this.props.children}><img src={this.state.Like} alt=""></img> {this.state.likeCount}</div>
                               </div>
                           </div>
                       </div>
                        </div>
                       
                   </div>
                   ) )}
                   </div>
  
               <div className="explore-images-body">
               {data.map((detail) => (
                   <div className="explore-content" className={detail.class}>
                      
                         <div>
                              <img src={detail.imgSrc} alt="" className="explore-img"></img> 
                              <div className="explore-content-body"> 
                           <div className="explore-user-detail">
                               <img src="images/user-img.png"></img><span className="explore-username">realgallery</span> <input className="follow" value="Follow" type="button" ></input>
                           </div>
                           <div className="explore-content-text">
                               <div className="explore-content-text-title">
                               <h5>{detail.title}</h5>
                               <span className="tag">{detail.tag}</span>
                               </div>
                               <p>{detail.text}</p>
                               <div className="user-reaction row container">
                                   <div  ><i  className="far fa-comment"></i></div>
                                   <div onClick={this.handleClick} key={this.props.children}><img src={this.state.Like} alt=""></img> {this.state.likeCount}</div>
                               </div>
                           </div>
                       </div>
                        </div>
                       
                   </div>
                   ) )}
                   
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
                               <div><i className="far fa-comment"></i></div>
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
                               <div><i className="far fa-comment"></i></div>
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
                               <div><i className="far fa-comment"></i></div>
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