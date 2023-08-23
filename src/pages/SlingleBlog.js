import { Link, useLocation } from "react-router-dom";
import GoogleMapReact from 'google-map-react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import blog1 from "../assets/img/blog/b1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getABlog } from "../features/blogs/blogSlice";
import moment from "moment";

const SingleBlog = () => {

    const blogState = useSelector((state) => state?.blog?.singleBlog);
 
    const dispatch = useDispatch();
    const location= useLocation();
    const getBlogId = location.pathname.split("/")[2]
  
    useEffect(() => {
      getBlog();
    }, []);
    const getBlog = () => {
      dispatch(getABlog(getBlogId));
    };
  

  return (
    <>
      <Header />

      <main className="bor">
      <section className="blog-area pt-120 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <article className="postbox post format-image mb-40">
                                <div className="postbox__thumb mb-30">
                                   
                                        <img src={blogState?.images[0]?.url} alt="blog image"/>
                                    
                                </div>
                                <div className="postbox__text p-50">
                                    <div className="post-meta mb-15">
                                        <span><i className="far fa-calendar-check"></i> {moment((blogState?.createdAt)).format('MMMM Do YYYY, h:mm a')}</span>
                                        <span><i className="far fa-user"></i>{blogState?.author}</span>
                                        <span>  <i className="far fa-thumbs-up"></i> 10</span>
                                    </div>
                                    <h3 className="blog-title">
                                      {blogState?.title}
                                    </h3>
                                    <div className="post-text mb-20">
                                        <p  dangerouslySetInnerHTML={{ __html: blogState?.description}}></p>
                                    </div>
                                  
                                </div>
                            </article>
                       
                            
                        </div>











                        {/* <div className="col-lg-4">
                            <div className="widget mb-40">
                                <div className="widget-title-box mb-30">
                                    <span className="animate-border"></span>
                                    <h3 className="widget-title">Search Objects</h3>
                                </div>
                                <form className="search-form">
                                    <input type="text" placeholder="Search your keyword..."/>
                                    <button type="submit"><i className="fas fa-search"></i></button>
                                </form>
                            </div>
                            <div className="widget mb-40">
                                <div className="widget-title-box mb-30">
                                    <span className="animate-border"></span>
                                    <h3 className="widget-title">About Me</h3>
                                </div>
                                <div className="about-me text-center">
                                    <img src="assets/img/blog/details/me.png" alt=""/>
                                    <h4>Zulia Maron Duo</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    <div className="widget-social-icon">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-behance"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="#"><i className="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="widget mb-40">
                                <div className="widget-title-box mb-30">
                                    <span className="animate-border"></span>
                                    <h3 className="widget-title">Popular Feeds</h3>
                                </div>
                                <ul className="recent-posts">
                                    <li>
                                        <div className="widget-posts-image">
                                            <a href="#"><img src="assets/img/blog/details/img1.jpg" alt=""/></a>
                                        </div>
                                        <div className="widget-posts-body">
                                            <h6 className="widget-posts-title"><a href="#">Lorem ipsum dolor sit
                                                    cing elit, sed do.</a></h6>
                                            <div className="widget-posts-meta">October 18, 2018 </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="widget-posts-image">
                                            <a href="#"><img src="assets/img/blog/details/img2.jpg" alt=""/></a>
                                        </div>
                                        <div className="widget-posts-body">
                                            <h6 className="widget-posts-title"><a href="#">Lorem ipsum dolor sit
                                                    cing elit, sed do.</a></h6>
                                            <div className="widget-posts-meta">October 24, 2018 </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="widget-posts-image">
                                            <a href="#"><img src="assets/img/blog/details/img3.jpg" alt=""/></a>
                                        </div>
                                        <div className="widget-posts-body">
                                            <h6 className="widget-posts-title"><a href="#">Lorem ipsum dolor sit
                                                    cing elit, sed do.</a></h6>
                                            <div className="widget-posts-meta">October 28, 2018 </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget mb-40">
                                <div className="widget-title-box mb-30">
                                    <span className="animate-border"></span>
                                    <h3 className="widget-title">Categories</h3>
                                </div>
                                <ul className="cat">
                                    <li>
                                        <a href="#">Lifestyle <span className="f-right">78</span></a>
                                    </li>
                                    <li>
                                        <a href="#">Travel <span className="f-right">42</span></a>
                                    </li>
                                    <li>
                                        <a href="#">Fashion <span className="f-right">32</span></a>
                                    </li>
                                    <li>
                                        <a href="#">Music <span className="f-right">85</span></a>
                                    </li>
                                    <li>
                                        <a href="#">Branding <span className="f-right">05</span></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget mb-40">
                                <div className="widget-title-box mb-30">
                                    <span className="animate-border"></span>
                                    <h3 className="widget-title">Social Profile</h3>
                                </div>
                                <div className="social-profile">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-behance"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#"><i className="fab fa-youtube"></i></a>
                                </div>
                            </div>
                            <div className="widget mb-40">
                                <div className="widget-title-box mb-30">
                                    <span className="animate-border"></span>
                                    <h3 className="widget-title">Instagram Feeds</h3>
                                </div>
                                <ul id="Instafeed"></ul>
                            </div>
                            <div className="widget mb-40">
                                <div className="widget-title-box mb-30">
                                    <span className="animate-border"></span>
                                    <h3 className="widget-title">Instagram Feeds</h3>
                                </div>
                                <div className="tag">
                                    <a href="#">Popular</a>
                                    <a href="#">desgin</a>
                                    <a href="#">usability</a>
                                    <a href="#">develop</a>
                                    <a href="#">consult</a>
                                    <a href="#">icon</a>
                                    <a href="#">HTML</a>
                                    <a href="#">ux</a>
                                    <a href="#">business</a>
                                    <a href="#">kit</a>
                                    <a href="#">keyboard</a>
                                    <a href="#">tech</a>
                                </div>
                            </div>
                            <div className="widget mb-40 p-0 b-0">
                                <div className="banner-widget">
                                    <a href="#"><img src="assets/img/blog/details/banner.jpg" alt=""/></a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
      </main>

      <Footer />
    </>
  );
};

export default SingleBlog;
