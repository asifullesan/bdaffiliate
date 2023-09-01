import logo from "../assets/img/logo/white-logo.png";
import shape1 from "../assets/img/shape/05.png";
import shape2 from "../assets/img/shape/03.png";
import shape3 from "../assets/img/shape/02.png";
import shape4 from "../assets/img/shape/01.png";
import about2 from "../assets/img/about/about-2.png";
import img1 from "../assets/img/about/05.jpg";
import img2 from "../assets/img/about/05.jpg";
import img3 from "../assets/img/about/05.jpg";
import img4 from "../assets/img/about/05.jpg";
import img5 from "../assets/img/about/05.jpg";
import img6 from "../assets/img/about/05.jpg";
import icon1 from "../assets/img/icon/01.png";
import icon2 from "../assets/img/icon/02.png";
import icon3 from "../assets/img/icon/03.png";
import icon4 from "../assets/img/icon/04.png";
import icon5 from "../assets/img/icon/05.png";
import icon6 from "../assets/img/icon/06.png";
import blog1 from "../assets/img/blog/blog-1.jpg";
import blog2 from "../assets/img/blog/blog-4.jpg";
import blog3 from "../assets/img/blog/blog-5.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../features/blogs/blogSlice";
import { useEffect } from "react";
import HomeBlog from "../components/HomeBlog";
import moment from "moment";

const Home = () => {
  const blogState = useSelector((state) => state?.blog?.blogs);
  const navigate = useNavigate();
 


  const dispatch = useDispatch();
  let location = useLocation();

  useEffect(() => {
    getBlogs();
  }, []);
  const getBlogs = () => {
    dispatch(getAllBlogs());
  };




  return (
    <>
      <header className="header-transparent">
        <div className="header-area header-5">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 d-flex align-items-center">
                <div className="logo">
                  <Link to="/">
                    <h2 className="logo-t mob-n">BDaffiliate-IT</h2>
                  </Link>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9">
                <div className="header-top-right d-none d-lg-block">
                  <div className="header-top-cta-text f-left">
                    <div className="header-top-icon">
                      <i className="far fa-map-marker-alt"></i>
                    </div>
                    <div className="header-top-text">
                      <p>151/1, Mujgunni R/A</p>
                      <span>Khulna </span>
                    </div>
                  </div>
                  <div className="header-top-cta-text f-left">
                    <div className="header-top-icon">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="header-top-text">
                      <p>We Are Available</p>
                      <span>01911-788323</span>
                    </div>
                  </div>
                  <div className="header-top-cta-text f-left d-flex">
                    <div className="header-top-icon">
                      <i className="far fa-clock"></i>
                    </div>
                    <div className="header-top-text">
                      <p>Sunday - Monday</p>
                      <span>10:00 am - 06:00 pm</span>
                    </div>
                   
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile-menu"></div>
              </div>
            </div>
          </div>
        </div>

        <div id="sticky-header" className="main-menu-area menu-5">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-9">
                <div className="main-menu">
                  <nav id="mobile-menu" className="d-flex justify-content-between">
                    <ul>
                      <li className="active">
                        <Link to="/">home</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="service">Services</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/pricing" className="nav-link bold">
                          Pricing
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/courses" className="nav-link bold">
                          Courses
                        </Link>
                      </li>
                      <li>
                        <Link to="blog">blog</Link>
                      </li>
                      <li>
                        <Link to="contact-us">contact</Link>
                      </li>
                    </ul>
                    
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                <div className="header-right f-right ">
                  
                  <div className="header-3-icon f-right">
                
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
          </div>
        </div>

        <nav className="navbar navbar-expand-lg mob-menu">
          <div className="container">
            <Link to="/" className="navbar-brand" href="#">
              <h3 className="logo-t">BDaffiliate-IT</h3>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0   hlu-bg">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link active bold"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link bold" href="#">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="service" className="nav-link bold" href="#">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="pricing" className="nav-link bold" href="#">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="courses" className="nav-link bold" href="#">
                    Courses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="blog" className="nav-link bold">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="contact-us" className="nav-link bold" href="#">
                    contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="single-slider slider-3-height d-flex align-items-center bgggg">
        <div className="container">
          <div className="row ">
            <div className="col-xl-10">
              <div className="slider-content slider-text mt-35">
                <span data-animation="fadeInLeft" data-delay=".3s">
                  Preparing For Your
                </span>
                <h1 data-animation="fadeInLeft" data-delay=".5s">
                  Success IT Solutions
                </h1>
                <p data-animation="fadeInLeft" data-delay=".7s">
                  We have 10 years of experience in IT business. Professional it
                  solutions for your business must explain to you how all this
                  mistaken idea of denouncing pleasure and praising pain
                </p>
                <div
                  className="slider-button"
                  data-animation="fadeInUp"
                  data-delay=".9s"
                >
                  <Link to="/login" className="btn" href="#">
                    <span class="btn-text">
                      Join with us <i class="far fa-long-arrow-right"></i>
                    </span>{" "}
                  </Link>
                  <Link to="/about" className="slider-btn">
                    learn more <i class="far fa-long-arrow-right"></i>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="features-area">
        <div className="container">
          <div className="features-bg theme-bg pt-65 pb-35">
            <div className="row no-gutters">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="features-wrapper pt-10 pb-10 text-center mb-30">
                  <div className="features-icon">
                    <i className="fal fa-laptop-code"></i>
                  </div>
                  <div className="features-text">
                    <h3>IT Consultancy</h3>
                    <p>
                      It is a long established fact that reader will be
                      distracted the readable content page when looking
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="features-wrapper pt-10 pb-10 text-center mb-30">
                  <div className="features-icon">
                    <i className="fal fa-server"></i>
                  </div>
                  <div className="features-text">
                    <h3>Server Security</h3>
                    <p>
                      It is a long established fact that reader will be
                      distracted the readable content page when looking
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="features-wrapper pt-10 pb-10 text-center mb-30">
                  <div className="features-icon">
                    <i className="fal fa-database"></i>
                  </div>
                  <div className="features-text">
                    <h3>UX/UI Strategy</h3>
                    <p>
                      It is a long established fact that reader will be
                      distracted the readable content page when looking
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-area pt-130 pb-100 pos-rel">
        <div className="shape d-none d-xl-block">
          <div className="shape-item ab-01 bounce-animate">
            <img src={shape1} alt="" />
          </div>
          <div className="shape-item ab-02 bounce-animate">
            <img src={shape2} alt="" />
          </div>
          <div className="shape-item ab-03 bounce-animate">
            <img src={shape3} alt="" />
          </div>
          <div className="shape-item ab-04 bounce-animate">
            <img src={shape4} alt="" />
          </div>
          <div className="shape-item ab-05 rotateme">
            <img src="assets/img/shape/04.png" alt="" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5 mb-30">
              <div className="about-2-img">
                <img src={about2} alt="" />
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 mb-30">
              <div className="about-1-wrapper about-2-wrapper">
                <div className="about-text">
                  <span>about us</span>
                  <h1>
                    More than 10+ years <br /> we provide{" "}
                    <span>IT solutions </span>
                  </h1>
                  <p>
                    We have a unique combination of talents motivated by
                    ambitious goals and a can-do attitude. Our drive to develop
                    excellent products is built on teamwork, passion, and giving
                    team members full control over their work to succeed on
                    their own. We want to create an environment where ideas can
                    flourish.
                  </p>
                </div>
                <div className="about-button">
                  <Link to="/about" className="btn" href="#">
                    <span className="btn-text">
                      Learn More <i className="far fa-long-arrow-right"></i>
                    </span>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fact-are-area pt-130 pb-100 ser-bg">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5 mb-30">
              <div className="fact-text">
                <span>do you have any project ?</span>
                <h1>
                  Let’s Talk About <br /> IT Solutions
                </h1>
                <Link to="/login" href="#">
                  join with us <i class="far fa-long-arrow-right"></i>{" "}
                </Link>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="row justify-content-between">
                <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
                  <div className="progress-wrapper">
                    <div
                      className="circular-progress"
                      data-percent="85"
                      data-scale-color="#fff"
                    >
                      <span>
                        <i className="fal fa-heart"></i>
                      </span>
                      <canvas height="110" width="110"></canvas>
                    </div>
                    <div className="progress-content">
                      <h1>85%</h1>
                      <span>Happy Clients</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
                  <div className="progress-wrapper">
                    <div
                      className="circular-progress"
                      data-percent="95"
                      data-scale-color="#fff"
                    >
                      <span>
                        <i className="fal fa-box-check"></i>
                      </span>
                      <canvas height="110" width="110"></canvas>
                    </div>
                    <div className="progress-content">
                      <h1>95%</h1>
                      <span>Project Complate</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
                  <div className="progress-wrapper">
                    <div
                      className="circular-progress"
                      data-percent="90"
                      data-scale-color="#fff"
                    >
                      <span>
                        <i className="fal fa-chart-bar"></i>
                      </span>
                      <canvas height="110" width="110"></canvas>
                    </div>
                    <div className="progress-content">
                      <h1>90%</h1>
                      <span>Market Research</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area pt-120 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
              <div className="section-title text-center ml-50 mr-50 mb-80">
                <span className="border-left-1"></span>
                <span>our services</span>
                <span className="border-right-1"></span>
                <h1>We provide exclusive services for your busainess</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 mb-75">
              <div className="services-2-wrapper">
                <div className="services-img">
                  <img src={icon1} alt="" />
                </div>
                <div className="services-text">
                  <h3>Web Development</h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking{" "}
                  </p>
                  <a href="#">
                    {" "}
                    <span className="services-button">
                      read more <i className="far fa-long-arrow-right"></i>
                    </span>{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-75">
              <div className="services-2-wrapper">
                <div className="services-img">
                  <img src={icon2} alt="" />
                </div>
                <div className="services-text">
                  <h3>Database Analysis</h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking{" "}
                  </p>
                  <a href="#">
                    {" "}
                    <span className="services-button">
                      read more <i className="far fa-long-arrow-right"></i>
                    </span>{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-75">
              <div className="services-2-wrapper">
                <div className="services-img">
                  <img src={icon3} alt="" />
                </div>
                <div className="services-text">
                  <h3>Server Security</h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking{" "}
                  </p>
                  <a href="#">
                    {" "}
                    <span className="services-button">
                      read more <i className="far fa-long-arrow-right"></i>
                    </span>{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-75">
              <div className="services-2-wrapper">
                <div className="services-img">
                  <img src={icon4} alt="" />
                </div>
                <div className="services-text">
                  <h3>UX/UI Strategy</h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking{" "}
                  </p>
                  <a href="#">
                    {" "}
                    <span className="services-button">
                      read more <i className="far fa-long-arrow-right"></i>
                    </span>{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-75">
              <div className="services-2-wrapper">
                <div className="services-img">
                  <img src={icon5} alt="" />
                </div>
                <div className="services-text">
                  <h3>Analysis For Tools</h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking{" "}
                  </p>
                  <a href="#">
                    {" "}
                    <span className="services-button">
                      read more <i className="far fa-long-arrow-right"></i>
                    </span>{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-75">
              <div className="services-2-wrapper">
                <div className="services-img">
                  <img src={icon6} alt="" />
                </div>
                <div className="services-text">
                  <h3>Marketing Strategy</h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking{" "}
                  </p>
                  <a href="#">
                    {" "}
                    <span className="services-button">
                      read more <i className="far fa-long-arrow-right"></i>
                    </span>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="services-button text-center mt-30">
                <Link to="/service" className="btn" href="#">
                  <span className="btn-text">
                    view All Services{" "}
                    <i className="far fa-long-arrow-right"></i>
                  </span>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-area pt-180 pb-160 learn-bg mt-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="cta-content mb-30">
                <h1>Learn Any Information For IT Solutions</h1>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque ipsa{" "}
                </p>
                <div className="cta-2-button">
                  <Link to="/contact-us" className="btn">
                    <span className="btn-text">
                      contact us <i className="far fa-long-arrow-right"></i>
                    </span>{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="ctas-info mb-30">
                <h3>01711-396109</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-area pt-120 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
              <div className="section-title text-center ml-50 mr-50 mb-75">
                <span className="border-left-1"></span>
                <span>our blog</span>
                <span className="border-right-1"></span>
                <h1>Reads Our Latest News & Blog</h1>
              </div>
            </div>
          </div>
          <div className="row">
            {blogState.map((item, index) => {
              if (index < 3) {
                return (
                  <div key={index} className="col-xl-4 col-lg-4 col-md-6 mb-30">
                    <HomeBlog
                      id={item?._id}
                      title={item?.title}
                      description={item?.description}
                      images={item?.images[0]?.url}
                      author={item?.author}
                      date={moment(item?.createdAt).format("MMMM Do YYYY")}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
