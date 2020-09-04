import React, { Component } from "react";
// IMPORTING REACT ROUTER DOM
import './exhibit.css'

import { Link } from "react-router-dom"


export default class exhibition extends Component{
    render(){
        return(
            <div className="main content">
                <div>
                 <div className="ex-bg pl-0 pr-0" style={{backgroundImage: "url(/images/banner.png)"}}>
        <div className="filter"></div>
        <div className="filter-text  container-md">
        <h4 className="text-white">Art De Supreme 2020</h4>
        <div className="attend">
          <span className="viewers"><img src="/images/contact.svg" alt=" "/> 13,458 viewers </span>
          <span className="location"><img src="/images/location.svg"alt="" /> Nike Art Gallery, Lekki, Lagos </span>
        </div>
        <div className="live">
          <img src="/images/live.svg" alt=""/>  Live
        </div>
        <div className=" button">
          <div className=""><Link to="/livevideo" className="btn watch">Watch Live Video</Link></div>
          <div className=""><button className="btn watch-later">Watch In 3D</button></div>
        </div>
        </div>
        </div>
        </div>
        <section className="upcoming-vids">
          <div className="seeAll">
            <span className="">Upcoming</span>
            <span className="float-right"><a href="">See all <i className="fa fa-arrow-right" aria-hidden="true"></i></a></span>
          </div>

          <div className="row container-fluid  mx-auto upcoming-exhibitions pl-0 pr-0">
            <div className="col-md-5 pl-0 pr-0 upcoming">
              <img src="/images/placeholder.png" alt="" className="upcoming-img" style={{width: "100%", height: "100%"}}/>
              <div className="filter-img"></div>     
            </div>
            <div className="col-md-5 upcoming-exhibition-details ">
              <h2 className="exhibition-title">La Creme De Font 2020</h2>
              <small className="exhibition-time">24th December 2020</small>
              <p className="exhibition-caption">
              The 2020 edition of the La Creme de Font will take on the 24th Dec 2020. It is going feature state of the art exhibitions from artists all over the world.
              </p>
              <button className="register-exhibition btn">REGISTER</button>
            </div>
          </div>

          <div className="row container-fluid  mx-auto upcoming-exhibitions pl-0 pr-0">
            <div className="col-md-5 pl-0 pr-0 upcoming">
              <img src="/images/placeholder.png" alt="" className="upcoming-img" style={{width: "100%", height: "100%"}}/>
              <div className="filter-img"></div>     
            </div>
            <div className="col-md-5 upcoming-exhibition-details ">
              <h2 className="exhibition-title">La Creme De Font 2020</h2>
              <small className="exhibition-time">24th December 2020</small>
              <p className="exhibition-caption">
              The 2020 edition of the La Creme de Font will take on the 24th Dec 2020. It is going feature state of the art exhibitions from artists all over the world.
              </p>
              <button className="register-exhibition btn">REGISTER</button>
            </div>
          </div>

         <div className="row container-fluid mx-auto recent-exhibitions pl-0 pr-0">
           <div className="col-md-6 pl-0 pr-0 recent">
             <img src="/images/placeholder-two.png" alt="" className="recent-img " style={{width: "100%" , height: "auto"}}></img>
           </div>
           <div className="col-md-5 recent-exhibition-text" style={{backgroundImage: "url(images/recent-bg.svg)", backgroundPosition: "top left"}}>
           <div className="">
             <small className="exhibition-tag">Recent</small>
             <h3 className="exhibition-name">The Nigerian Art Festival 2020</h3>
             <small className="exhibition-time text-white">25th Feb. - 28th Mar. 2020</small>
             <p className="recent-exhibition-caption">
             The 2020 edition of the Nigerian Art Festival took place on the 25th February - 28th March 2020. It featured state of the art exhibitions from artists all over the world. This retrospective took us from Krasner’s earliest,
              highly accomplished student works to the very end, in an elegantly designed exhibition that was filled with surprises and troubles...
             </p>
             <Link to="#!" className="doc">Read the full documentation</Link>
           </div>
         </div>
         </div>

         <div className="row container-fluid mx-auto recent-exhibitions pl-0 pr-0">
           <div className="col-md-6 pl-0 pr-0 recent">
             <img src="/images/placeholder-two.png" alt="" className="recent-img " style={{width: "100%", height: "auto"}}></img>
           </div>
           <div className="col-md-5 recent-exhibition-text" style={{backgroundImage: "url(images/recent-bg.svg)", backgroundPosition: "top left"}}>
           <div className="">
             <small className="exhibition-tag">Recent</small>
             <h3 className="exhibition-name">The Nigerian Art Festival 2020</h3>
             <small className="exhibition-time text-white">25th Feb. - 28th Mar. 2020</small>
             <p className="recent-exhibition-caption">
             The 2020 edition of the Nigerian Art Festival took place on the 25th February - 28th March 2020. It featured state of the art exhibitions from artists all over the world. This retrospective took us from Krasner’s earliest,
              highly accomplished student works to the very end, in an elegantly designed exhibition that was filled with surprises and troubles...
             </p>
             <Link to="#" className="doc">Read the full documentation</Link>
           </div>
         </div>
         </div>
        </section>
      
   
            </div>
        )
    }
}