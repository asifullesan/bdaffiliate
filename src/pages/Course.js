import { Link } from "react-router-dom";
import blog1 from "../assets/img/blog/blog-1.jpg";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import BlogCard from "../components/BlogCard";
import moment from "moment/moment";
import { getCourses } from "../features/course/courseSlice";
import CourseCard from "../components/CourseCard";

const Course = () => {
  const courseState = useSelector((state) => state?.course?.courses);
  console.log(courseState);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllCourse();
  }, []);
  const getAllCourse = () => {
    dispatch(getCourses());
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
                  <h1>Courses </h1>
                  <ul className="breadcrumb-menu">
                    <li>
                      <a href="index.html">home</a>
                    </li>
                    <li>
                      <span>courses</span>
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
           courseState?.length === 0 && <div className="text-center fos">No course available</div>
          }
          <div className="row">

        
            {courseState?.map((item, index) => {
              return (
               
                  <div key={index} className="col-xl-4 col-lg-4 col-md-6 mb-30">
                    <CourseCard
                      id={item?._id}
                      title={item?.title}
                      description={item?.description}
                      prise={item?.price}
                      totalrating={item?.totalrating}
                      images={item?.images[0]?.url}
                    //   date={moment((item?.createdAt)).format('MMMM Do YYYY, h:mm a')}
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

export default Course;
