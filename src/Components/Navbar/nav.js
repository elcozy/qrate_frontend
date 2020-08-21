import React from 'react'
import './nav.css';

// IMPORTING REACT ROUTER DOM
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <body>

        <nav className="sidebar">
          <div className="sidebar-logo">
            <a  href="#" className="logo-icon"><img src="images/qrate logo1-02 2.png" /></a>
            </div>
            <div>
                
                    <div  className="sidebar-item">
                      <Link to='./'><img src="images/home.svg"  className="sidebar-icon" /><span  className="sidebar-name">Home</span></Link>
                    </div>
                    
                    <div   className="sidebar-item">
                      <Link to ="./explore"><img src="images/safari 1.svg"  className="sidebar-icon" /><span className="sidebar-name">Explore</span></Link>
                    </div>
                    <div  className="sidebar-item">
                      <Link to="./gallery"><img src="images/artgallery.svg"  className="sidebar-icon" /><span  className="sidebar-name">Art Gallery</span></Link>
                    </div>
                    <div   className="sidebar-item">
                      <Link to="./artist"><img src="images/paint.svg"  className="sidebar-icon" /><span  className="sidebar-name">Artists</span></Link>
                    </div>
                    <div  className="sidebar-item">
                      <Link to="./supplies"><img src="images/artsupplies.svg" className="sidebar-icon" /><span  className="sidebar-name">Art Supplies</span></Link>
                    </div>
                    <div   className="sidebar-item">
                      <a href="#"> <img src="images/logout.svg"  className="sidebar-icon" /><span  className="sidebar-name">Log Out</span></a>
                    </div>
            </div>
        </nav>
    
    
        <div  className="main">
        <nav  className="navbar icon-nav navbar-expand">
            <div  className="nav navbar-nav ml-auto">
                <a  className="nav-item nav-link active" href="#"><img src="images/exhibition.svg" /><span className="icon-nav-name">Exhibition</span></a>
                <a  className="nav-item nav-link active" href="#"><img src="images/catalogue.svg" /><span  className="icon-nav-name">My Catalogue</span></a>
                <a  className="nav-item nav-link active" href="#"><img src="images/categories.svg" /><span  className="icon-nav-name">Categories</span></a>
                <a className="nav-item nav-link active" href="#"><img src="images/cart.svg" /><span  className="icon-nav-name">Cart</span></a>
                <a  className="nav-item nav-link active user" href="#"><img src="images/user.png" /></a>
            </div>
        </nav>
        <div class="line"></div>
      </div>
       
      </body>
    )
}

export default Navbar