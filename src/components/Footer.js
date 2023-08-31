import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../images/newsletter.png";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-area pt-80 footer-bg">
          <div className="container">
            <div className="newsletter-bg pb-50 mb-80">
              <div className="row">
                <div className="col-xl-6 col-lg-7 mb-30">
                  <div className="single-newsletter ">
                    {/* <div className="newsletter-form">
                      <form action="#">
                        <input placeholder="Enter Your Email :" type="email" />
                        <button className="btn" type="submit">
                          <span className="btn-text">
                            subscribe <i class="far fa-long-arrow-right"></i>
                          </span>{" "}
                          <span class="btn-border"></span>
                        </button>
                      </form>
                    </div> */}
                  </div>
                </div>
                <div className="col-xl-6 col-lg-5 mb-30">
                  <div className="footer-2-icon text-lg-right">
                    <a href="https://www.facebook.com/bdaffiliateit?mibextid=LQQJ4d">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fitbdaffiliate%3Figshid%3DNTc4MTIwNjQ2YQ%253D%253D%26fbclid%3DIwAR1eIqdBGu5ctCvu3RuGWYOn8rCSlAupUkFDRZc8j_4Eo-pjQlVF5HM0nvA&h=AT3D316ryRbJoCRmcc1P_ZPE5TMOCu5GwARe6lFO3HWnX7WHnrgM8ThMt3kcznKUk4r7wiz-im_f56cuNq-GT8G2c_8tIsNe0dllPnkKJtWcHFS8heSaiAJHP5Xh6EFcqyh4kg">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="/">
                      <i className="fab fa-google"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-6">
                <div className="footer-wrapper footer-2-wrapper mb-30">
                  <div className="footer-logo">
                    <a href="index.html">
                      <h2 className="logo-t">BDaffiliate-IT</h2>
                    </a>
                  </div>
                  <div className="footer-text">
                    <p>
                      It’s time to have the most incredible software experience
                      where our problem will meet its solution in the most
                      transparent way. So, what are you waiting for?
                    </p>
                    <Link to="/about" className="btn" tabindex="0">
                      <span className="btn-text">
                        learn more <i class="far fa-long-arrow-right"></i>
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6">
                <div className="footer-wrapper footer-2-wrapper mb-30">
                  <h4 className="footer-title">Our Services</h4>
                  <ul className="fotter-menu">
                    <li>
                      <a href="#">User Strategy </a>
                    </li>
                    <li>
                      <a href="#">Product Designing </a>
                    </li>
                    <li>
                      <a href="#">Marketing Strategy</a>
                    </li>
                    <li>
                      <a href="#">IT Consultancy</a>
                    </li>
                    <li>
                      <a href="#">Server Security</a>
                    </li>
                    <li>
                      <a href="#">Product Marketing</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="footer-wrapper footer-2-wrapper mb-30 pl-50">
                  <h4 className="footer-title">Quick Links</h4>
                  <ul className="fotter-menu">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Need a Consultant?</a>
                    </li>
                    <li>
                      <a href="#">Our Services</a>
                    </li>
                    <li>
                      <a href="#">Have Any Questions?</a>
                    </li>
                    <li>
                      <a href="#">Meet Our Team</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6">
                <div className="footer-wrapper footer-2-wrapper mb-30">
                  <h4 className="footer-title">Contact Us</h4>
                  <div className="footer-info">
                    <p>But I must explain to you how all this mistaken</p>
                  </div>
                  <ul className="contact-link">
                    <li>
                      <div className="contact-address-icon">
                        <i className="far fa-phone"></i>
                      </div>
                      <div className="contact-address-text">
                        <h4>01911-788323</h4>
                      </div>
                    </li>
                    <li>
                      <div className="contact-address-icon">
                        <i className="far fa-envelope-open"></i>
                      </div>
                      <div className="contact-address-text">
                        <h4>
                        bdaffiliateit<br/>helpzone@gmail.com
                        </h4>
                      </div>
                    </li>
                    <li>
                      <div className="contact-address-icon">
                        <i className="far fa-map-marker-alt"></i>
                      </div>
                      <div className="contact-address-text">
                        <h4>151/1, Mujgunni R/A, Khulna</h4>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom-area footer-2-bottom mt-50 pb-25 pt-25">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-8 col-md-8">
                  <div className="copyright">
                    <p>
                      <i className="far fa-copyright"></i> Copyright 2023{" "}
                      <a href="#"></a>. All rights reserved.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  {/* <div className="footer-bottem-text text-md-right">
                                    <p>Design By <a href="#">BDevs</a></p>
                                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
