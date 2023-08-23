import { Link } from "react-router-dom";
import ab from "../assets/img/about/02.png";
import ass from "../assets/img/bg/c.jpg";
import sp1 from "../assets/img/shape/shape-1.png";
import team1 from "../assets/img/team/team-01.jpg";
import team2 from "../assets/img/team/team-01.jpg";
import team3 from "../assets/img/team/team-01.jpg";
import team4 from "../assets/img/team/team-01.jpg";
import test1 from "../assets/img/testimonial/01.png";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header />
      <main className="">
        <div className="breadcrumb-area pt-230 pb-235 about-bread-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb-text text-center">
                  <h1>About Us</h1>
                  <ul className="breadcrumb-menu">
                    <li>
                      <a href="index.html">home</a>
                    </li>
                    <li>
                      <span>About Us</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-area pt-130 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 mb-30">
                <div className="about-2-img">
                  <img src={ab} alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 mb-30">
                <div className="about-1-wrapper">
                  <div className="about-text">
                    <span>who we are</span>
                    <h1>
                      More than 10+ years we provide <span>IT solutions </span>
                    </h1>
                    <p>
                      We have a unique combination of talents motivated by
                      ambitious goals and a can-do attitude. Our drive to
                      develop excellent products is built on teamwork, passion,
                      and giving team members full control over their work to
                      succeed on their own. We want to create an environment
                      where ideas can flourish.
                    </p>
                    <p className="mt-20">
                      We dream, design, develop, and dare to challenge the
                      status quo and make a difference. We strive to develop a
                      rich culture by expanding our horizons and bringing you
                      ideas outside of the box.
                    </p>
                  </div>
                  <div className="about-button">
                    <a className="btn" href="#">
                      <span className="btn-text">
                        learn more <i className="far fa-long-arrow-right"></i>
                      </span>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 
        <div className="services-area  pb-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="single-services text-center">
                  <div className="services-icon">
                    <i className="fal fa-laptop-code"></i>
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
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="single-services active text-center">
                  <div className="services-icon">
                    <i className="fal fa-database"></i>
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
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="single-services text-center">
                  <div className="services-icon">
                    <i className="fal fa-server"></i>
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
            </div>
          </div>
        </div> */}

        <div className="choose-area pt-130 pb-130 assect-bg">
          <div className="choose-bg">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 mb-30">
                  <div className="faq-wrapper">
                    <div className="section-title mb-45">
                      <span className="b-sm-left-1"></span>
                      <span className="b-sm-left-2"></span>
                      <span className="sub-t-left">why choose us</span>
                      <h1>We Are Expert In IT Solutions Services</h1>
                    </div>
                    <div className="faq-box faq-2-box">
                      <div id="accordion">
                        <div className="card">
                          <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                              <a
                                href="#"
                                className="btn-link"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                aria-expanded="false"
                                aria-controls="collapseOne"
                              >
                                Best It Solutions Provider Agency
                              </a>
                            </h5>
                          </div>
                          <div
                            className="collapse show"
                            id="collapseOne"
                            aria-labelledby="headingOne"
                            data-parent="#accordion"
                          >
                            <div className="card-body">
                              <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium mque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo
                                inventore veritatis et quasi artecto beatae
                                dicta sunt explicabo. Nemo enim ipsam voluptatem
                                quia voluptas aspernatur aut odit aut fugit
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                              <a
                                href="#"
                                className="btn-link collapsed"
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                {" "}
                                Professional & Experienced Team Member{" "}
                              </a>
                            </h5>
                          </div>
                          <div
                            id="collapseTwo"
                            className="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordion"
                          >
                            <div className="card-body">
                              <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium mque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo
                                inventore veritatis et quasi artecto beatae
                                dicta sunt explicabo. Nemo enim ipsam voluptatem
                                quia voluptas aspernatur aut odit aut fugit
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" id="headingThree">
                            <h5 className="mb-0">
                              <a
                                href="#"
                                className="btn-link collapsed"
                                data-toggle="collapse"
                                data-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                Our Main Goal How To Success In IT Business
                              </a>
                            </h5>
                          </div>
                          <div
                            id="collapseThree"
                            className="collapse"
                            aria-labelledby="headingThree"
                            data-parent="#accordion"
                          >
                            <div className="card-body">
                              <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium mque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo
                                inventore veritatis et quasi artecto beatae
                                dicta sunt explicabo. Nemo enim ipsam voluptatem
                                quia voluptas aspernatur aut odit aut fugit
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" id="headingFour">
                            <h5 className="mb-0">
                              <a
                                href="#"
                                className="btn-link collapsed"
                                data-toggle="collapse"
                                data-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                              >
                                We Start Our Journey Since 1990
                              </a>
                            </h5>
                          </div>
                          <div
                            id="collapseFour"
                            className="collapse"
                            aria-labelledby="headingFour"
                            data-parent="#accordion"
                          >
                            <div className="card-body">
                              <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium mque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo
                                inventore veritatis et quasi artecto beatae
                                dicta sunt explicabo. Nemo enim ipsam voluptatem
                                quia voluptas aspernatur aut odit aut fugit
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 mb-30">
                  <div className="choose-wrapper">
                    <div className="choose-text">
                      <p>
                        On the other hand we denounce with righteous indignation
                        and dislike men who are so beguiled and demoralized by
                        the charms of pleasure of the moment so blinded by
                        desire that they cannot foresee the pain and trouble
                        that are bound to ensue and equal blame belongs to those
                        who fail in their duty through weakness of will which is
                        the same as saying through shrinking from toil and pain
                        cases are perfectly
                      </p>
                    </div>
                    <div className="choose-img">
                      <img src={ass} alt="" />
                      <div className="choose-video">
                        <a
                          className="popup-video"
                          href="https://www.youtube.com/watch?v=LTXD6XZXc3U"
                          tabindex="0"
                        >
                          <i class="fas fa-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="team-area pt-120 pb-100 pos-rel">
          <div className="shape d-none d-xl-block">
            <div className="shape-item team-01 bounce-animate">
              <img src={sp1} alt="" />
            </div>
          </div>
          <div className="container">
            <div className="row mb-50">
              <div className="col-xl-4 col-lg-6">
                <div className="section-title  mb-30">
                  <span className="b-sm-left-1"></span>
                  <span className="b-sm-left-2"></span>
                  <span className="sub-t-left">our Team</span>
                  <h1>Meet Experience Team Member</h1>
                </div>
              </div>
              <div className="col-xl-5 offset-xl-3 col-lg-6">
                <div className="team-section mb-30">
                  <p>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give.
                  </p>
                  <a className="btn" href="#">
                    <span className="btn-text">
                      join with us <i className="far fa-long-arrow-right"></i>
                    </span>{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                <div className="team-wrapper">
                  <div className="team-img">
                    <img src={team1} alt="" />
                  </div>
                  <div className="team-text">
                    <h4>Solvina D Naliz</h4>
                    <span>Web developer</span>
                    <div className="team-icon">
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                <div className="team-wrapper">
                  <div className="team-img">
                    <img src={team2} alt="" />
                  </div>
                  <div className="team-text">
                    <h4>Jerry D.Silva</h4>
                    <span>UI Designer</span>
                    <div className="team-icon">
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                <div className="team-wrapper">
                  <div className="team-img">
                    <img src={team3} alt="" />
                  </div>
                  <div className="team-text">
                    <h4>David Walillams</h4>
                    <span>sr consultant</span>
                    <div className="team-icon">
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                <div className="team-wrapper">
                  <div className="team-img">
                    <img src={team4} alt="" />
                  </div>
                  <div className="team-text">
                    <h4>Michel Z. Jones</h4>
                    <span>CEO & Founder</span>
                    <div className="team-icon">
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-area pt-125 pb-95 cta-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-6">
                <div className="cta-text mb-30">
                  <span>do you have any project ?</span>
                  <h1>Let’s Talk About Business Soluations With Us</h1>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="cta-button text-lg-right mb-30">
                  <a className="btn btn-white btn-none" href="#">
                    <span class="btn-text">
                      contact us <i className="far fa-long-arrow-right"></i>
                    </span>{" "}
                  </a>
                  <a className="btn btn-white btn-none btn-margin" href="#">
                    <span className="btn-text">
                      join with us <i class="far fa-long-arrow-right"></i>
                    </span>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="client-area dark pt-120 pb-100 grey-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-7">
                <div className="section-title  mb-70">
                  <span className="b-sm-left-2"></span>
                  <span className="sub-t-left">our testimonials</span>
                  <h1>More Than 800+ Customer Satisfied Our Solutions</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4">
                <div className="client-say-wrapper mb-30">
                  <div className="client-say-text">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusante doloremque laudantium, totam rem
                      aperiam eaque ipsa illventore verit atis et quasi
                      architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <div className="client-rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="clientsay-name">
                      <div className="client-say-img">
                        <img src={test1} alt="" />
                      </div>
                      <div className="client-say-content">
                        <h4>Sonix Paleda Joda</h4>
                        <span>Web Designer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="client-say-wrapper mb-30">
                  <div className="client-say-text">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusante doloremque laudantium, totam rem
                      aperiam eaque ipsa illventore verit atis et quasi
                      architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <div className="client-rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="clientsay-name">
                      <div className="client-say-img">
                        <img src={test1} alt="" />
                      </div>
                      <div className="client-say-content">
                        <h4>Jeson Roy Newzi</h4>
                        <span>SR Consultant</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="client-say-wrapper mb-30">
                  <div className="client-say-text">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusante doloremque laudantium, totam rem
                      aperiam eaque ipsa illventore verit atis et quasi
                      architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <div className="client-rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="clientsay-name">
                      <div className="client-say-img">
                        <img src="assets/img/testimonial/03.png" alt="" />
                      </div>
                      <div className="client-say-content">
                        <h4>David Mexxwell</h4>
                        <span>Business manager</span>
                      </div>
                    </div>
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

export default About;
