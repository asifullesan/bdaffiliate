import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compare from "../images/compare.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import menu from "../images/menu.svg";
const Header = () => {
  return (
    <>
       <header>
        <div className="header-top-area grey-bg d-none d-md-block">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 col-md-6 d-flex align-items-center">
                <div className="header-info">
                  <span>
                    <i className="far fa-map-marker-alt"> 151/1, Mujgunni R/A</i> 
                  </span>
                  <span className="header-ph">
                    <i className="far fa-phone"> 01911-788323</i> 
                  </span>
                  <span className="header-en">
                    <i className="far fa-envelope-open">  bdaffiliateikhulnazone@gmail.com</i> 
                  </span>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="header-right f-right ">
                  <div className="header-icon f-right pb-3">
                    <a href="https://www.facebook.com/bdaffiliateit?mibextid=LQQJ4d">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fitbdaffiliate%3Figshid%3DNTc4MTIwNjQ2YQ%253D%253D%26fbclid%3DIwAR1eIqdBGu5ctCvu3RuGWYOn8rCSlAupUkFDRZc8j_4Eo-pjQlVF5HM0nvA&h=AT3D316ryRbJoCRmcc1P_ZPE5TMOCu5GwARe6lFO3HWnX7WHnrgM8ThMt3kcznKUk4r7wiz-im_f56cuNq-GT8G2c_8tIsNe0dllPnkKJtWcHFS8heSaiAJHP5Xh6EFcqyh4kg">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.youtube.com/@bdaffiliateit2472">
                      <i class="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="sticky-header" className="main-menu-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 d-flex align-items-center">
                <div className="logo all-res-logo">
                  <Link to="/" href="index.html">
                    <h2>BDaffiliate-IT</h2>
                  </Link>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9">
                <div className="header-button f-right d-none d-lg-block">
                  <Link to="/login" className="btn" href="#">
                    <span className="btn-text">
                      Join With Us <i className="far fa-long-arrow-right"></i>
                    </span>{" "}
                  </Link>
                </div>
                <div className="main-menu text-right">
                  <nav id="mobile-menu">
                  <ul>
                      <li>
                        <Link to="/" >home</Link>
                      </li>
                      <li  >
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/service">Services</Link>
                        
                      </li>
                      <li>
                        <Link to="/pricing">Pricing</Link>
                        
                      </li>
                      <li>
                        <Link to="/courses">Courses</Link>
                        
                      </li>
                      <li>
                        <Link to="/blog">blog</Link>
                       
                      </li>
                      <li>
                        <Link to="/contact-us">contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile-menu"></div>
              </div>
            </div>
          </div>
        </div>



        <nav className="navbar navbar-expand-lg mob-menu">
          <div className="container">
            <Link to="/" className="navbar-brand" href="#">
              <h3  className="logo-t2">BDaffiliate-IT</h3>
            </Link>
            <button
              className="navbar-toggler navbar-toggler2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon navbar-toggler-icon2"></span>
              <span className="navbar-toggler-icon navbar-toggler-icon2"></span>
              <span className="navbar-toggler-icon navbar-toggler-icon2"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0   hlu-bg">
                <li className="nav-item">
                  <Link to="/" className="nav-link active bold" aria-current="page" href="#">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link bold" href="#">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/service" className="nav-link bold" href="#">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/pricing" className="nav-link bold" href="#">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/courses" className="nav-link bold" href="#">
                    Courses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/blog" className="nav-link bold" href="#">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact-us" className="nav-link bold" href="#">
                    Contact
                  </Link>
                </li>
              
             </ul>
             
            </div>
          </div>
        </nav>





      </header>
    </>
  );
};

export default Header;
