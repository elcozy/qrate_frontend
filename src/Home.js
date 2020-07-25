import React from 'react';
import { Link } from 'react-router-dom';

// import 

const randomBg = () => {
  var randomNo = Math.floor(Math.random() * 3);
  var bg = ["/images/01.png", "/images/02.jpg", "/images/03.jpg"];
  console.log(bg[randomNo]);
  return bg[randomNo];
}

var bg = randomBg();

const App = () => {
  return (
    <div className="Home" style={{backgroundImage: `linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)), url(${bg})`}}>
      <header className="mw">
        <nav className="navbar navbar-expand-md navbar-light bg-transparent align-content-center">
          <Link className="navbar-brand" to="/">
              <img className="logo" src={'/images/logo.png'} alt="Qrate Logo"/>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navLinks" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navLinks">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item"><Link className="nav-link text-dark px-lg-5" to="/">About us</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark px-lg-5" to="/">Use cases</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark px-lg-5" to="/">Forum</Link></li>
              <li className="nav-item"><Link className="nav-link text-dark px-lg-5" to="/"><button className="btn bg-orange text-light">Download <i className="fa fa-download" aria-hidden="true"></i></button></Link></li>
            </ul>
          </div>
        </nav>
      </header>

      <section className="container illustrationSection mw py-5 py-md-space px-4 px-smd-auto">
        <div className="row no-gutters">
          <div className="col-md-6">
            <h1 className="font-weight-bold">Share and Experience the beauty of <span className="text-indigo">Art</span><span className="text-orange">.</span></h1>
            <p>An app that connects Africa's best visual artists.</p>
            <button className="btn btn-lg bg-orange text-light mb-5">Get started</button>
          </div>
          <div className="col-md-6 illustration d-flex flex-column justify-content-center align-items-center align-items-md-end">
            <img className="img-fluid ml-md-auto" src={'images/starry-night.jpg'} alt="Art"/>
            <div className="d-flex justify-content-center justify-content-md-end align-items-center store my-5">
              <img className="my-2" src={'images/google-play.png'} alt=""/>
              <img className="my-2" src={'images/app-store.png'} alt=""/>
            </div>
          </div>
        </div>
      </section>

      <hr className="hr mw" />

      <div className="bg-white">
        <section className="container who-we-are mw py-5 py-md-space px-4 px-md-auto">
          <h3 className="font-weight-bold title">Who We Are<span className="text-orange">.</span></h3>
          <div className="row">
            <div className="col-md-6">
              <p className=""><span className="abtQrate font-weight-bold">Qrate</span> brings digital artist drawings and paintings together to share their work and passion and make a living while at it.</p>
              <div className="border-line my-3"><span className="bg-orange d-inline-block w-50 h-100"></span><span className="bg-indigo d-inline-block w-50 h-100"></span></div>
              <Link className="text-orange my-4 d-block" to="/">Learn more <i className="fa fa-chevron-right"></i></Link>
            </div>
            <div className="col-md-6 position-relative">
              <img className="img-fluid rect-img p-3" src={'images/who-we-are.png'} alt="Who we are"/>
              <div className="p-3 round-img">
                <div className="round bg-indigo rounded-circle"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
        

      <hr className="hr mw" />

    <div className="bg-white">
      <section className="container how-it-works mw pt-5 pt-md-space px-4 px-md-auto">
        <h3 className="font-weight-bold my-5 title">How it works<span className="text-orange">.</span></h3>
        <div>
          <div className="works-div d-flex align-content-start">
            <div className="round-circle mr-3 mr-md-5">
              <span className="position-absolute z-2 text-orange bg-light rounded-circle d-inline-block shadow">1</span>
              <img className="line" src={'images/line-blue.png'} alt=""/>
            </div>
            <div className="ml-5">
              <h3 className="font-weight-bold text-orange">Get Started on Qrate</h3>
              <p>You can't wait to sign up. You'll be amazed!</p>
            </div>
          </div>
          <div className="works-div d-flex align-content-start">
            <div className="round-circle mr-3 mr-md-5">
              <span className="position-absolute z-2 text-indigo bg-light rounded-circle d-inline-block shadow">2</span>
              <img className="line" src={'images/line-black.png'} alt=""/>
            </div>
            <div className="ml-5">
              <h3 className="font-weight-bold text-indigo">Get Engaged, Explore</h3>
              <p>You'll find many categories of Art that tickles you with great features</p>
            </div>
          </div>
          <div className="works-div worksDiv d-flex align-content-start">
            <div className="round-circle mr-3 mr-md-5">
              <span className="position-absolute z-2 text-dark bg-light rounded-circle d-inline-block shadow">3</span>
            </div>
            <div className="ml-5">
              <h3 className="font-weight-bold">Share and Experience Arts</h3>
            </div>
          </div>
        </div> 
      </section>
    </div>
      
      <section className="art-categories bg-black py-5 py-md-space px-4 px-md-auto">
        <div className="mw">
          <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-start align-items-center">
            <h3 className="text-light mr-3 title">Art Categories</h3>
            <select className="custom-select d-inline-block">
              <option className="" value="Photography" defaultValue>Photography</option>
              <option className="" value="Art">Art</option>
            </select>
          </div> 
          <div className="row my-4 no-gutters">
            <div className="col-sm-6 col-md-4 my-3 p-1 d-flex justify-content-center">
              <div className="card">
                <img className="card-img" src={'images/starry-night.jpg'} alt="Starry night"/>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <i className="fa fa-heart text-danger"></i>
                    <i className="fa fa-ellipsis-v text-dark"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 my-3 p-1 d-flex justify-content-center">
              <div className="card">
                <img className="card-img" src={'images/starry-night.jpg'} alt="Starry night"/>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <i className="fa fa-heart text-danger"></i>
                    <i className="fa fa-ellipsis-v text-dark"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 my-3 p-1 d-flex justify-content-center">
              <div className="card">
                <img className="card-img" src={'images/starry-night.jpg'} alt="Starry night"/>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <i className="fa fa-heart text-danger"></i>
                    <i className="fa fa-ellipsis-v text-dark"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 my-3 p-1 d-flex justify-content-center">
              <div className="card">
                <img className="card-img" src={'images/starry-night.jpg'} alt="Starry night"/>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <i className="fa fa-heart text-danger"></i>
                    <i className="fa fa-ellipsis-v text-dark"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 my-3 p-1 d-flex justify-content-center">
              <div className="card">
                <img className="card-img" src={'images/starry-night.jpg'} alt="Starry night"/>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <i className="fa fa-heart text-danger"></i>
                    <i className="fa fa-ellipsis-v text-dark"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 my-3 p-1 d-flex justify-content-center">
              <div className="card">
                <img className="card-img" src={'images/starry-night.jpg'} alt="Starry night"/>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <i className="fa fa-heart text-danger"></i>
                    <i className="fa fa-ellipsis-v text-dark"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-line mx-auto"><span className="bg-orange d-inline-block w-50 h-100"></span><span className="bg-indigo d-inline-block w-50 h-100"></span></div>
        </div>
      </section>

      <section className="container mw testimonial py-5 px-4 px-md-auto">
        <h3 className="font-weight-bold title text-center text-sm-left">The experience<span className="text-orange">.</span></h3>
        <div className="row my-5 testimonial-wrapper">
          <div className="col-md-6">
            <i className="fa fa-user-circle text-indigo text-center w-100"></i>
          </div>
          <div className="col-md-6">
            <img className="ml-0" src={'images/left-quote.png'} alt=""/>
            <p className="font-weight-bold">I have had to search no more for my favorite art works.</p>
            <div className="d-flex justify-content-end">
              <img className="ml-aut" src={'images/right-quote.png'} alt=""/>
            </div>
            <p className="font-italic">- Chris Samuel</p>
          </div>
        </div>
      </section>

      <section className="get-notified bg-black py-5 px-4">
        <div className="container mw my-2">
          <h3 className="text-light">Get notified of your favourite Arts work updates</h3>
          <p className="text-muted">Enter your Email Address to receive our latest interviews, Arts Updates and Hot Art Exhibition News</p>
          <input className="form-control my-3" placeholder="Enter Your Email Address" type="text"/>
          <input className="form-control my-3" placeholder="What categories are you interested in?" type="text"/>
          <button className="btn bg-orange text-light">Subscribe</button>
        </div>
      </section>

      <footer className="py-5 py-md-space container mw">
        <img className="img-fluid" src={'images/logo.png'} alt=""/>
        <div className="jumbotron bg-transparent d-flex flex-column flex-sm-row justify-content-center justify-content-sm-around align-content-sm-center">
          <div className="d-flex flex-column justify-content-center align-items-start my-3">
            <h4 className="text-orange">Products</h4>
            <Link to="/">Arts App</Link>
            <Link to="/">Google Photos</Link>
            <Link to="/">Umber Photos</Link>
            <Link to="/">Miscellaneous</Link>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-start my-3">
            <h4 className="text-orange">Community</h4>
            <Link to="/">Forum</Link>
            <Link to="/">Google Photos</Link>
            <Link to="/">Umber Photos</Link>
            <Link to="/">Miscellaneous</Link>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-start my-3">
            <h4 className="text-orange">Products</h4>
            <Link to="/">Arts App</Link>
            <Link to="/">Google Photos</Link>
            <Link to="/">Umber Photos</Link>
            <Link to="/">Miscellaneous</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;


// import React from 'react';
// import {Link} from 'react-router-dom';

// const randomBg = () => {
//     var randomNo = Math.floor(Math.random() * 6);
//     var bg = ["/images/homepage/01.png", "/images/homepage/02.jpg", "/images/homepage/03.jpg", "/images/homepage/04.png", "/images/homepage/05.png", "/images/homepage/06.png"];
//     return bg[randomNo];
// }
  
// var bg = randomBg();

// const Homepage = () => {
//     return (
//         <div className="homepage">
//             <div className="wrapper" style={{backgroundImage: `url(${bg})`}}>
//                 <div className="mw py-5 px-3 px-sm-5">
//                     <header className="d-flex justify-content-start align-items-center">
//                         <Link to="/"><img src="/images/homepage/qrate-light-logo.png" alt="Logo"/></Link>
//                         <div className="input-group ml-5 search">
//                             <input type="text" className="form-control light-bg p-3" placeholder="Search Qrate" aria-label="Search" />
//                             <div className="input-group-append p-2 border border-left-0 light-bg">
//                                 <i className="fa fa-search text-light"></i>
//                             </div>
//                         </div>
//                     </header>
//                     <div className="w-100 banner d-flex justify-content-center">
//                         <div className="discover px-5 px-md-auto d-flex flex-column justify-content-center align-items-center">
//                             <div className="text-center text-light mb-5 mb-md-6">
//                                 <h2 className="font-weight-bold mb-4">Discover The Beauty of <span className="text-orange">Art</span></h2>
//                                 <p className="lead px-3">Qrate connects Africa's best visual artists and creatives.</p>
//                             </div>
//                             <div className="px-2 px-md-auto w-100">
//                                 <Link to="/get-started"><button className="btn bg-orange w-100 text-light my-2 btn-lg">Get Started</button></Link>
//                                 <Link to="/enter-email"><button className="btn bg-white w-100 text-orange my-2 btn-lg">Sign in</button></Link>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="navigator">
//                         <div className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
//                             <Link to="/"><span className="my-2 rounded-circle active"></span></Link>
//                             <Link to="/"><span className="my-2 rounded-circle"></span></Link>
//                             <Link to="/"><span className="my-2 rounded-circle"></span></Link>
//                             <Link to="/"><span className="my-2 rounded-circle"></span></Link>
//                             <Link to="/"><span className="my-2 rounded-circle"></span></Link>
//                             <Link to="/"><span className="my-2 rounded-circle"></span></Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Homepage;