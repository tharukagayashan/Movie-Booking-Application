import React from "react";
import "../css/header.css";
function Header() {

    return (
        <div className="header" style={{marginBottom:"100px"}}>
        
        {/*---- Include the above in your HEAD tag --------*/}
        
        {/* Navigation */}
        <div className="fixed-top">
          <header className="topbar">
            <div className="container">
              <div className="row">
                {/* social icon*/}
                <div className="col-sm-12">
                  <ul className="social-network">
                    <li><a className="waves-effect waves-dark" href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a className="waves-effect waves-dark" href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a className="waves-effect waves-dark" href="#"><i className="fa fa-linkedin" /></a></li>
                    <li><a className="waves-effect waves-dark" href="#"><i className="fa fa-pinterest" /></a></li>
                    <li><a className="waves-effect waves-dark" href="#"><i className="fa fa-google-plus" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
          <nav className="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
            <div className="container">
              <a className="navbar-brand" rel="nofollow" target="_blank" href="#" style={{textTransform: 'uppercase'}}>SL Movie Zone</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active" style={{marginLeft:"600px"}}>
                    <a className="nav-link" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/bookings">Bookings</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/cart">Cart</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
}
export default Header; 