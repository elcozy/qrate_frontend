import React from 'react'
// import './nav.css';

// IMPORTING REACT ROUTER DOM
import { Link } from 'react-router-dom'

class Navbar extends React.Component {

  constructor(){
    super();
    this.state={
        show:false
    }
}
render(){
    return(
        <div>

        <div className="sidebar">
          <div className="sidebar-logo">
            <a  href="#" className="logo-icon"><img src="images/qrate logo1-02 2.png" alt="" /></a>
            </div>
            <div className="sidebar-properties">
            <Link to='./'>
                    <div  className="sidebar-item">
                    <img src="images/home.svg"  className="sidebar-icon" alt="" /><span  className="sidebar-name">Home</span>
                    </div>
                    </Link>
                    <Link to ="./explore">
                    <div   className="sidebar-item">
                      <img src="images/safari 1.svg"  className="sidebar-icon"alt=""  /><span className="sidebar-name">Explore</span>
                    </div>
                    </Link>
                    <Link to="./gallery">
                    <div  className="sidebar-item">
                      <img src="images/artgallery.svg"  className="sidebar-icon" alt="" /><span  className="sidebar-name">Art Gallery</span>
                    </div>
                    </Link>
                    <Link to="./artist">
                    <div   className="sidebar-item">
                      <img src="images/paint.svg"  className="sidebar-icon" alt=""  /><span  className="sidebar-name">Artists</span>
                    </div>
                    </Link>
                    <Link to="./supplies">
                    <div  className="sidebar-item">
                    <img src="images/artsupplies.svg" className="sidebar-icon" alt="" /><span  className="sidebar-name">Art Supplies</span>
                    </div>
                    </Link>
                    <div   className="sidebar-item out">
                      <a href="#"> <img src="images/logout.svg"  className="sidebar-icon" alt=""  /><span  className="sidebar-name">Log Out</span></a>
                    </div>
            </div>
        </div>
        {
                  this.state.show?
        <div className="icon-sidebar"  onClick={()=>{this.setState({show:!this.state.show})}}>
          <div className="icon-sidebar-properties">
          <div className="icon-user-part user-stuff">
          <div className="user"><img src="images/user.png"alt=""  /></div>
           <h6 className=" username mt-2">artistGod</h6>
           <span>  <img src="images/artist-icon.svg" alt="" /> &nbsp;Artist</span>
            </div>
            <div className="main-properties">
            <div className="icon-sidebar-item">
            <img src="images/profile.svg" alt=""  /><span className="icon-sidebar-name" >Profile</span>
            </div>
            <div className="icon-sidebar-item">
            <img src="images/mobile-exhibition.svg" alt="" /><span className="icon-sidebar-name">Exhibition</span>
            </div>
            <div className="icon-sidebar-item">
            <img src="images/catalogue.svg" alt=""  /><span  className="icon-sidebar-name">My Catalogue</span>
            </div>
            <div className="icon-sidebar-item">
            <img src="images/categories.svg" alt="" /><span  className="icon-sidebar-name">Categories</span>
            </div>
            <Link to="/cart">
            <div className="icon-sidebar-item">
           <img src="images/cart.svg"alt=""  /><span  className="icon-sidebar-name">Cart</span>
            </div>
            </Link>
            <div className="icon-sidebar-item">
            <img src="images/settings.svg" alt=""  /> <span className="icon-sidebar-name"> Settings</span>
            </div>
          </div>
          <div className="icon-sidebar-item logout">
            <img src="images/logout-icon.svg" alt="" /><span  className="icon-sidebar-name">Log out</span>
            </div>
        </div>
        </div>
        :null
}
    
        <div  className="main" >
          <div>
        <nav  className="navbar icon-nav navbar-expand">
            <div  className="nav navbar-nav icon-navbar">
                <a  className="nav-item nav-link" href="./exhibition"><img src="images/exhibition.svg" alt="" /><span className="icon-nav-name">Exhibition</span></a>
                <a  className="nav-item nav-link " href="#"><img src="images/catalogue.svg" alt=""  /><span  className="icon-nav-name">My Catalogue</span></a>
                <a  className="nav-item nav-link" href="#"><img src="images/categories.svg" alt="" /><span  className="icon-nav-name">Categories</span></a>
                <a className="nav-item nav-link" href="./cart"><img src="images/cart.svg" alt="" /><span  className="icon-nav-name">Cart</span></a>
                <a  className="nav-item nav-link mobile user" href="#"><img src="images/user.png" alt="" /></a>
				</div>
				<div  className="row container-fluid two"   >
				<a  className="nav-item nav-link mobile user" onClick={()=>{this.setState({show:!this.state.show})}}><img src="images/user.png"alt=""  /></a>
				 <a  className="nav-item nav-link mobile" href="#"><img src="images/qrate-logo.svg" alt="" /></a>
				  <a  className="nav-item nav-link mobile" href="#"><img src="images/bell.svg" alt=""  /></a>
				  </div>
                
        </nav>
        </div>
        <div className="line"></div>
      </div>
       
      </div>
    )
}
}

export default Navbar