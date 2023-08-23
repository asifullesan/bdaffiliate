import { Link } from "react-router-dom";
import blog1 from "../assets/img/blog/blog-1.jpg";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBlogs } from "../features/blogs/blogSlice";
import BlogCard from "../components/BlogCard";
import moment from "moment/moment";

const Blog = () => {
  const blogState = useSelector((state) => state?.blog?.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    getBlogs();
  }, []);
  const getBlogs = () => {
    dispatch(getAllBlogs());
  };

  return (
    <>
      <Header />

      <main>
        <div className="breadcrumb-area pt-230 pb-235 blg-bread">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb-text text-center">
                  <h1>Blog </h1>
                  <ul className="breadcrumb-menu">
                    <li>
                      <a href="index.html">home</a>
                    </li>
                    <li>
                      <span>Blog</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="blog-area pt-120 pb-80">
          <div className="container">
          {
           blogState?.length === 0 && <div className="text-center fos">No blog available</div>
          }
          <div className="row">
            {blogState.map((item, index) => {
              return (
               
                  <div key={index} className="col-xl-4 col-lg-4 col-md-6 mb-30">
                    <BlogCard
                      id={item?._id}
                      title={item?.title}
                      description={item?.description}
                      author={item?.author}
                      likes={item?.likes}
                      images={item?.images[0]?.url}
                      date={moment((item?.createdAt)).format('MMMM Do YYYY, h:mm a')}
                   />
                  </div>
            
              );
            })}
                </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="basic-pagination basic-pagination-2 text-center mt-60 mb-40">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-left"></i>
                      </a>
                    </li>
                    <li className="active">
                      <a href="#">01</a>
                    </li>
                    <li>
                      <a href="#">02</a>
                    </li>
                    <li>
                      <a href="#">03</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-ellipsis-h"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-double-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Blog;
