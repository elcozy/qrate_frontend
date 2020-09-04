import  React, {Component} from "react"    
import "./video.css"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom";



export default class Video extends React.Component{

    constructor() {
        super();
        this.state = {
          show: false,
          pathname: window.location.pathname,
        };
      }
    render(){
        return(

            <div className="Live-video">
              <nav className="video-nav navbar ">
                <div className="nav justify-content-start">
             <div      onClick={() => { this.setState({ show: !this.state.show });}}><i className="fa fa-bars" aria-hidden="true"  ></i></div>
                </div>
                <div className="nav justify-content-end">
                 
                  <a className="nav-link" href="/home/exhibition">
                  <svg  width="42"  height="42"  viewBox="0 0 42 42"  fill="none"  xmlns="http://www.w3.org/2000/svg">
                    <circle   cx="21"     cy="21"  r="21"  fill="#3E3E3E"  className="nav-icon"  />  <mask id="path-2-inside-1" fill="white">  <path d="M21.1334 22.2885L26.9667 30.0667C27.0317 30.1533 27.0713 30.2564 27.081 30.3643C27.0907 30.4722 27.0702 30.5806 27.0218 30.6775C26.9733 30.7744 26.8989 30.8559 26.8067 30.9129C26.7145 30.9698 26.6084 31 26.5 31H14.8334C14.725 31 14.6188 30.9698 14.5267 30.9129C14.4345 30.8559 14.3601 30.7744 14.3116 30.6775C14.2632 30.5806 14.2426 30.4722 14.2524 30.3643C14.2621 30.2564 14.3017 30.1533 14.3667 30.0667L20.2 22.2885C20.2544 22.2161 20.3248 22.1572 20.4058 22.1167C20.4868 22.0763 20.5761 22.0552 20.6667 22.0552C20.7572 22.0552 20.8466 22.0763 20.9276 22.1167C21.0086 22.1572 21.079 22.2161 21.1334 22.2885ZM27.6667 28.6667V26.3333H30V12.3333H11.3334V26.3333H13.6667V28.6667H10.1574C10.0047 28.6664 9.85355 28.6359 9.71266 28.5771C9.57178 28.5182 9.4439 28.4321 9.33637 28.3237C9.22884 28.2153 9.14378 28.0867 9.08606 27.9454C9.02834 27.804 8.9991 27.6527 9.00002 27.5V11.1667C9.00002 10.5227 9.53085 10 10.1574 10H31.176C31.8154 10 32.3334 10.5192 32.3334 11.1667V27.5C32.3334 28.144 31.8025 28.6667 31.176 28.6667H27.6667Z" />   </mask>
                    <path   d="M21.1334 22.2885L22.7334 21.0885L22.7334 21.0885L21.1334 22.2885ZM26.9667 30.0667L25.3667 31.2666L25.3667 31.2667L26.9667 30.0667ZM14.3667 30.0667L15.9667 31.2667L15.9667 31.2666L14.3667 30.0667ZM20.2 22.2885L18.6 21.0885L18.6 21.0885L20.2 22.2885ZM27.6667 28.6667H25.6667V30.6667H27.6667V28.6667ZM27.6667 26.3333V24.3333H25.6667V26.3333H27.6667ZM30 26.3333V28.3333H32V26.3333H30ZM30 12.3333H32V10.3333H30V12.3333ZM11.3334 12.3333V10.3333H9.33335V12.3333H11.3334ZM11.3334 26.3333H9.33335V28.3333H11.3334V26.3333ZM13.6667 26.3333H15.6667V24.3333H13.6667V26.3333ZM13.6667 28.6667V30.6667H15.6667V28.6667H13.6667ZM10.1574 28.6667L10.1534 30.6667H10.1574V28.6667ZM9.00002 27.5L11 27.5121V27.5H9.00002ZM19.5333 23.4885L25.3667 31.2666L28.5667 28.8667L22.7334 21.0885L19.5333 23.4885ZM25.3667 31.2667C25.2088 31.0562 25.1127 30.8059 25.0891 30.5439L29.0729 30.1847C29.0298 29.7068 28.8545 29.2505 28.5667 28.8667L25.3667 31.2667ZM25.0891 30.5439C25.0655 30.2819 25.1153 30.0184 25.2329 29.7831L28.8106 31.572C29.0252 31.1429 29.116 30.6625 29.0729 30.1847L25.0891 30.5439ZM25.2329 29.7831C25.3506 29.5478 25.5314 29.3499 25.7552 29.2116L27.8582 32.6142C28.2663 32.362 28.5961 32.0011 28.8106 31.572L25.2329 29.7831ZM25.7552 29.2116C25.979 29.0733 26.2369 29 26.5 29V33C26.9798 33 27.4501 32.8664 27.8582 32.6142L25.7552 29.2116ZM26.5 29H14.8334V33H26.5V29ZM14.8334 29C15.0964 29 15.3543 29.0733 15.5781 29.2116L13.4752 32.6142C13.8833 32.8664 14.3536 33 14.8334 33V29ZM15.5781 29.2116C15.8019 29.3499 15.9828 29.5478 16.1005 29.7831L12.5228 31.572C12.7373 32.0011 13.0671 32.362 13.4752 32.6142L15.5781 29.2116ZM16.1005 29.7831C16.2181 30.0184 16.2679 30.2819 16.2443 30.5439L12.2605 30.1847C12.2174 30.6625 12.3082 31.1429 12.5228 31.572L16.1005 29.7831ZM16.2443 30.5439C16.2207 30.8059 16.1245 31.0562 15.9667 31.2667L12.7667 28.8667C12.4788 29.2505 12.3035 29.7068 12.2605 30.1847L16.2443 30.5439ZM15.9667 31.2666L21.8001 23.4885L18.6 21.0885L12.7667 28.8667L15.9667 31.2666ZM21.8 23.4885C21.6681 23.6644 21.497 23.8072 21.3002 23.9056L19.5114 20.3279C19.1527 20.5073 18.8406 20.7677 18.6 21.0885L21.8 23.4885ZM21.3002 23.9056C21.1035 24.004 20.8866 24.0552 20.6667 24.0552V20.0552C20.2656 20.0552 19.8701 20.1485 19.5114 20.3279L21.3002 23.9056ZM20.6667 24.0552C20.4468 24.0552 20.2299 24.004 20.0331 23.9056L21.822 20.3279C21.4633 20.1485 21.0677 20.0552 20.6667 20.0552V24.0552ZM20.0331 23.9056C19.8364 23.8072 19.6653 23.6644 19.5334 23.4885L22.7334 21.0885C22.4927 20.7677 22.1807 20.5073 21.822 20.3279L20.0331 23.9056ZM29.6667 28.6667V26.3333H25.6667V28.6667H29.6667ZM27.6667 28.3333H30V24.3333H27.6667V28.3333ZM32 26.3333V12.3333H28V26.3333H32ZM30 10.3333H11.3334V14.3333H30V10.3333ZM9.33335 12.3333V26.3333H13.3334V12.3333H9.33335ZM11.3334 28.3333H13.6667V24.3333H11.3334V28.3333ZM11.6667 26.3333V28.6667H15.6667V26.3333H11.6667ZM13.6667 26.6667H10.1574V30.6667H13.6667V26.6667ZM10.1613 26.6667C10.272 26.6669 10.3815 26.689 10.4836 26.7316L8.94175 30.4225C9.32561 30.5829 9.73736 30.6658 10.1534 30.6667L10.1613 26.6667ZM10.4836 26.7316C10.5857 26.7743 10.6783 26.8366 10.7563 26.9152L7.91649 29.7322C8.20947 30.0276 8.55788 30.2622 8.94175 30.4225L10.4836 26.7316ZM10.7563 26.9152C10.8342 26.9937 10.8958 27.0869 10.9376 27.1893L7.23447 28.7015C7.39174 29.0866 7.62351 29.4369 7.91649 29.7322L10.7563 26.9152ZM10.9376 27.1893C10.9795 27.2918 11.0007 27.4014 11 27.5121L7.00006 27.4879C6.99755 27.9039 7.07721 28.3163 7.23447 28.7015L10.9376 27.1893ZM11 27.5V11.1667H7.00002V27.5H11ZM11 11.1667C11 11.6259 10.6367 12 10.1574 12V8C8.42498 8 7.00002 9.4194 7.00002 11.1667H11ZM10.1574 12H31.176V8H10.1574V12ZM31.176 12C30.699 12 30.3334 11.6119 30.3334 11.1667H34.3334C34.3334 9.42639 32.9317 8 31.176 8V12ZM30.3334 11.1667V27.5H34.3334V11.1667H30.3334ZM30.3334 27.5C30.3334 27.0407 30.6967 26.6667 31.176 26.6667V30.6667C32.9084 30.6667 34.3334 29.2473 34.3334 27.5H30.3334ZM31.176 26.6667H27.6667V30.6667H31.176V26.6667Z"   fill="white"  mask="url(#path-2-inside-1)"  />
                  </svg>
                   <span className="pl-3">Exhibition</span></a>
                   <NavLink
                  activeClassName="active-link"
                  className="nav-item nav-link mobile user position-relative"
                  to="/home/profile"
                >
                  <img src="/images/user.png" alt="" />
                  <span className="user-notification-icon">1</span>
                  <p className="ml-3 cursor-pointer">
                    <svg
                      width="17"
                      height="7"
                      viewBox="0 0 17 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 1L8.49998 6L0.999981 1" stroke="#3E3E3E" />
                    </svg>
                  </p>
                </NavLink>
                </div>
                </nav>  
          
                      {this.state.show ? (
     <div className="video-icon-sidebar" onClick={() => {this.setState({ show: !this.state.show });}}>
         <div className="video-icon-sidebar-properties">
           <div >
           <span className="float-right pr-3 pt-4"  style={{cursor: "pointer"}} onClick={() => {this.setState({ show: !this.state.show });}}><i className="fa fa-times" aria-hidden="true" style={{color: "#c4c4c4"}} style={{fontSize: "20px"}}></i></span>
               <div className="text-center" >
            <a href="/home" className="text-center">
             <img src="/images/qrate logo1-02 2.png" alt="" />
            </a>
          </div>
          </div>
           <NavLink className="navLink mx-auto bg-info" activeClassName="active-link" to="/home" exact >
              <div className=" video-sidebar-item">
                {/* <img src="/images/home.svg" classN ame="sidebar-icon" alt="" /> */}
                <svg   width="28"  height="24"viewBox="0 0 28 24" fill="none"  xmlns="http://www.w3.org/2000/svg" >
                 <path
                   className="nav-icon"
                 d="M14 0.0996094L0 12.6996H4.2V23.8996H11.2V15.4996H16.8V23.8996H23.8V12.6996H28L14 0.0996094Z"
                    fill="#3E3E3E"
                  />
                </svg>

                <span className="video-sidebar-name">Home</span>
              </div>
            </NavLink>
            <NavLink
              className="navLink "
              activeClassName="active-link"
              to="/home/explore"
            >
              <div className="video-sidebar-item">
      
                <svg
                 width="28"
                 height="28"
                  viewBox="0 0 28 28"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                   className="nav-icon"
                    d="M14 0C6.26502 0 0 6.26502 0 14C0 21.728 6.26502 27.9999 14 27.9999C21.7349 27.9999 27.9999 21.728 27.9999 14C28 6.26502 21.735 0 14 0ZM17.066 17.066L5.59997 22.4L10.934 10.934L22.4 5.59997L17.066 17.066Z"
                    fill="#3E3E3E"
                  />
                </svg>

               <span className="video-sidebar-name">Explore</span>
              </div>
            </NavLink>
            <NavLink
             className="navLink"
              activeClassName="active-link"
              to="/home/gallery"
            >
             <div className="video-sidebar-item">
                <svg
                  width="24"
                 height="24"
                 viewBox="0 0 24 24"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    className="nav-icon"
                    width="23.33"
                    height="23.33"
                    fill="#3E3E3E"
                  />
                  <rect
                    x="3.14062"
                    y="3.06055"
                    width="17.0488"
                   height="17.2107"
                    fill="white"
                  />
                </svg>

                <span className="video-sidebar-name">Art Gallery</span>
              </div>
            </NavLink>
            <NavLink
            className="navLink"
             activeClassName="active-link"
              to="/home/artist"
           >
             <div className="video-sidebar-item">
              {/* <img src="/images/paint.svg" className="sidebar-icon" alt="" /> */}
                <svg
                  width="24"
                  height="24"
                 viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="nav-icon"
                    d="M12 0.333984C18.4423 0.333984 23.6666 4.97498 23.6666 10.7045C23.6657 12.4232 22.9825 14.0713 21.767 15.2865C20.5516 16.5017 18.9034 17.1847 17.1846 17.1853H14.891C13.8153 17.1853 12.9461 18.0545 12.9461 19.1302C12.9461 19.6225 13.141 20.0763 13.4385 20.4135C13.75 20.7635 13.9448 21.2173 13.9448 21.7225C13.9448 22.7993 13.05 23.6673 12 23.6673C5.55765 23.6673 0.333313 18.443 0.333313 12.0007C0.333313 5.55832 5.55765 0.333984 12 0.333984ZM6.74998 12.0007C7.21411 12.0007 7.65923 11.8163 7.98742 11.4881C8.31561 11.1599 8.49998 10.7148 8.49998 10.2507C8.49998 9.78652 8.31561 9.3414 7.98742 9.01321C7.65923 8.68503 7.21411 8.50065 6.74998 8.50065C6.28585 8.50065 5.84073 8.68503 5.51254 9.01321C5.18435 9.3414 4.99998 9.78652 4.99998 10.2507C4.99998 10.7148 5.18435 11.1599 5.51254 11.4881C5.84073 11.8163 6.28585 12.0007 6.74998 12.0007ZM17.25 12.0007C17.7141 12.0007 18.1592 11.8163 18.4874 11.4881C18.8156 11.1599 19 10.7148 19 10.2507C19 9.78652 18.8156 9.3414 18.4874 9.01321C18.1592 8.68503 17.7141 8.50065 17.25 8.50065C16.7859 8.50065 16.3407 8.68503 16.0125 9.01321C15.6844 9.3414 15.5 9.78652 15.5 10.2507C15.5 10.7148 15.6844 11.1599 16.0125 11.4881C16.3407 11.8163 16.7859 12.0007 17.25 12.0007ZM12 8.50065C12.4641 8.50065 12.9092 8.31628 13.2374 7.98809C13.5656 7.6599 13.75 7.21478 13.75 6.75065C13.75 6.28652 13.5656 5.8414 13.2374 5.51321C12.9092 5.18503 12.4641 5.00065 12 5.00065C11.5359 5.00065 11.0907 5.18503 10.7625 5.51321C10.4344 5.8414 10.25 6.28652 10.25 6.75065C10.25 7.21478 10.4344 7.6599 10.7625 7.98809C11.0907 8.31628 11.5359 8.50065 12 8.50065Z"
                   fill="#F7931E"
                 />
               </svg>

                <span className="video-sidebar-name">Artists</span>
              </div>
          </NavLink>
           <NavLink
            className="navLink"
              activeClassName="active-link"
              to="/home/supplies"
            >
              <div className="video-sidebar-item justify-content-center justify-content-xl-start">
               <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                fill="none"
                 xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                   className="nav-icon"
                  d="M7.017 16.8333H0.5V14.5H21.5V16.8333H14.983L18.7665 20.6168L17.1168 22.2665L12.1667 17.3163V20.3333H9.83333V17.3163L4.88317 22.2665L3.2335 20.6168L7.017 16.8333ZM2.83333 0.5H19.1667C19.4761 0.5 19.7728 0.622916 19.9916 0.841709C20.2104 1.0605 20.3333 1.35725 20.3333 1.66667V13.3333H1.66667V1.66667C1.66667 1.35725 1.78958 1.0605 2.00838 0.841709C2.22717 0.622916 2.52391 0.5 2.83333 0.5Z"
                    fill="#3E3E3E"
                  />
                </svg>

                <span className="video-sidebar-name">Art Supplies</span>
              </div>
           </NavLink>
           <NavLink to="/home/logout" className="navLink">
             <div className="video-sidebar-item out">
               {" "}
               {/* <img src="/images/logout.svg" className="sidebar-icon" alt="" /> */}
               <svg
                 width="23"
                 height="24"
                  viewBox="0 0 23 24"
                fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                 <path
                  className="nav-icon"
                   opacity="0.6"
                    d="M3.66669 19.0007H6.00002V21.334H20V2.66732H6.00002V5.00065H3.66669V1.50065C3.66669 1.19123 3.7896 0.894486 4.0084 0.675693C4.22719 0.456901 4.52393 0.333984 4.83335 0.333984H21.1667C21.4761 0.333984 21.7729 0.456901 21.9916 0.675693C22.2104 0.894486 22.3334 1.19123 22.3334 1.50065V22.5007C22.3334 22.8101 22.2104 23.1068 21.9916 23.3256C21.7729 23.5444 21.4761 23.6673 21.1667 23.6673H4.83335C4.52393 23.6673 4.22719 23.5444 4.0084 23.3256C3.7896 23.1068 3.66669 22.8101 3.66669 22.5007V19.0007ZM6.00002 10.834H14.1667V13.1673H6.00002V16.6673L0.166687 12.0007L6.00002 7.33398V10.834Z"
                    fill="#3E3E3E"
                  />
                //</svg>
                <span className="video-sidebar-name">Log Out</span>
             </div>
           </NavLink>
           </div>
          </div>
        
        ) : null}
              

               <div className="row-section">
                   <div className="video-section">
                       <div className="container-fluid live-vid">
                          <Link to="/home/exhibition" ><img src="/images/arrow-left.svg" alt=""></img></Link>
                          <div className="main-vid">
                              <img src="/images/video.svg" alt="" className="main-vid-img"></img>
                              <div className="video-player">
                                  <div className="line"></div>
                                  <div className="play-details"  style={{paddingTop: "13px"}}>
                                  <span className="play-btn">
                                      <img src="images/play.svg" alt=""></img>
                                  </span>
                                  <span className="audio-btn" style={{paddingLeft: "14px"}}>
                                      <img src="/images/audio.svg" alt=""></img>
                                  </span>
                                  <span className="time-count text-white pt-2"  style={{paddingLeft: "14px"}}>0:00</span>

                                  <span className="float-right text-white">
                                     <span className="live" style={{paddingRight: "14px"}}> <img src="/images/live.svg" alt=""/>  Live</span> 
                                     <span className="setting" style={{paddingRight: "14px"}}><img src="/images/setting.svg" alt=""></img></span>
                                     <span className="expand" style={{paddingRight: "14px"}}><img src="/images/expand.svg" alt=""></img></span>
                                  </span>
                                  </div>
                              </div>
                          </div>
                        <div className="video-details">
                            <span className="live-vid-title">Art De Supreme 2020</span>
                            <span className="reaction float-right">
                                <span className="thumbs-up"  style={{paddingRight: "14px"}}><img src="/images/thumbs-up.svg" alt=""></img></span>
                                <span className="share"  style={{paddingRight: "14px"}}><img src="/images/share.svg" alt=""></img></span>
                            </span>
                        </div>
                        <div className="attendees" style={{paddingTop: "16px"}}>
                              <span className=""><img src="/images/viewers.svg" alt="" className="pr-1"/> 13,458 viewers </span>
                              <span className="circle"></span>
                              <span className="date">24th Jan 2020</span>
         
        </div>
                       </div>

                   </div>
                   <div className="comment-section">
                       <div className="discussion-forum">
                       <div className="discussion">Discussion Forum</div>
                   </div>
                   </div>
</div> 
            </div>
        )
    }
}