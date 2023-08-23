import { Link } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import pricing1 from "../assets/img/icon/p-1.png";
import pricing2 from "../assets/img/icon/p-2.png";
import pricing3 from "../assets/img/icon/p-3.png";

const Pricing = () => {
  return (
    <>
      <Header />

      <main>
        <div className="breadcrumb-area pt-230 pb-235 pri-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb-text text-center">
                  <h1>pricing</h1>
                  <ul className="breadcrumb-menu">
                    <li>
                      <a href="index.html">home</a>
                    </li>
                    <li>
                      <span>pricing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="pricing-area pt-120 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                            <div className="section-title text-center ml-50 mr-50 mb-80">
                                <span className="border-left-1"></span>
                                <span>our pricing</span>
                                <span className="border-right-1"></span>
                                <h1>Exclusive Pricing Planning</h1>
                            </div>
                        </div>
                    </div> 
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="pricing-wrapper  single-pricing text-center mb-30">
                                <div className="pricing-icon">
                                    <img src={pricing1} alt=""/>
                                </div>
                                <div className="pricing-top-text">
                                    <h3>basic plan</h3>
                                </div>
                                <div className="pricing-menu">
                                    <ul>
                                        <li>IT Solutions</li>
                                        <li>Software Development</li>
                                        <li>UX/UI Strategy</li>
                                        <li>IT Consulting</li>
                                        <li>Product Design</li>
                                    </ul>
                                </div>
                                <div className="price-count">
                                    <h1><span claclassNamess="usd">$</span>15.99</h1>
                                </div>
                                <div className="pricing-button">
                                    <Link to="/cart" href="#"> <span className="pricings-button">select plan <i className="far fa-long-arrow-right"></i></span> </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="pricing-wrapper single-pricing active text-center mb-30">
                                <div className="pricing-tag">
                                    <span>popular plan</span>
                                </div>
                                <div className="pricing-icon">
                                    <img src={pricing2} alt=""/>
                                </div>
                                <div className="pricing-top-text">
                                    <h3>standard plan</h3>
                                </div>
                                <div className="pricing-menu">
                                    <ul>
                                        <li>IT Solutions</li>
                                        <li>Software Development</li>
                                        <li>UX/UI Strategy</li>
                                        <li>IT Consulting</li>
                                        <li>Product Design</li>
                                    </ul>
                                </div>
                                <div className="price-count">
                                    <h1><span className="usd">$</span>49.99</h1>
                                </div>
                                <div className="pricing-button active">
                                    <Link to="/cart" href="#"> <span className="pricings-button">select plan <i className="far fa-long-arrow-right"></i></span> </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="pricing-wrapper single-pricing text-center mb-30">
                                <div className="pricing-icon">
                                    <img src={pricing3} alt=""/>
                                </div>
                                <div className="pricing-top-text">
                                    <h3>premium plan</h3>
                                </div>
                                <div className="pricing-menu">
                                    <ul>
                                        <li>IT Solutions</li>
                                        <li>Software Development</li>
                                        <li>UX/UI Strategy</li>
                                        <li>IT Consulting</li>
                                        <li>Product Design</li>
                                    </ul>
                                </div>
                                <div className="price-count">
                                    <h1><span className="usd">$</span>89.99</h1>
                                </div>
                                <div className="pricing-button">
                                    <Link to="/cart"> <span className="pricings-button">select plan <i className="far fa-long-arrow-right"></i></span> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






      </main>

      <Footer />
    </>
  );
};

export default Pricing;
