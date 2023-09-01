import { Link, useLocation, useNavigate } from "react-router-dom";
import blog1 from "../assets/img/blog/blog-1.jpg";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import moment from "moment/moment";
import { addRating, getACourse, getCourses } from "../features/course/courseSlice";
import CourseCard from "../components/CourseCard";
import { ImCheckboxChecked } from "react-icons/im";
import ReactStars from "react-rating-stars-component";
import { addProdToCart } from "../features/user/userSlice";
import { toast } from "react-toastify";

const SingleCourse = () => {
  const courseState = useSelector((state) => state?.course?.singleCourse);
  const images = courseState?.images[0]?.url;
  // console.log(images);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const getCourseId = location.pathname.split("/")[2];

  useEffect(() => {
    getCourse();
  }, []);
  const getCourse = () => {
    dispatch(getACourse(getCourseId));
  };

  const uploadCart = () => {
    try {
      dispatch(
        addProdToCart({
          itemId: courseState?._id,
          price: courseState?.price,
          title: courseState?.title,
          images,
          // details: courseState?.,.
        })
      );
      navigate("/checkout");
    } catch (error) {}
  }



  const [star, setStar] = useState(null)
  const [comment, setComment] = useState(null)
  

  const addRatingToCourse = () => {
    if(star === null) {
      toast.error("Please add star rating")
      return false
    }
    else if(comment === null) {
      toast.error("Please write a review")
      return false
    }
    else {
      dispatch(addRating({star:star, comment:comment, productId:getCourseId}))
    
    }
   
  }



  return (
    <>
      <Header />

      <main className="bor">
        <section className="blog-area pt-80 pb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-sm-12">
                <div className=" d-flex justify-content-between">
                  <h3>{courseState?.title}</h3>
                  <div className="llrr">
                      <ReactStars
                        count={5}
                        size={20}
                        value={courseState?.totalrating}
                        edit={false}
                       
                        className="ms-4"
                        activeColor="#ffd700"
                      />
                       ({courseState?.totalrating})
                    </div>
                   
                </div>
                <div className="d-flex">
                  <div className="co-info-box ">
                    <p>Duration</p>
                    <h5>{courseState?.duration}</h5>
                  </div>
                  <div className="co-info-box ">
                    <p>Lectures</p>
                    <h5>{courseState?.lectures}</h5>
                  </div>
                  <div className="co-info-box ">
                    <p>Projects</p>
                    <h5>{courseState?.projects}+</h5>
                  </div>
                </div>
                <div className="mt-3">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: courseState?.description,
                    }}
                  ></p>
                </div>
                <div className="d-flex">
                  <div className="price-mar">
                    <h4>৳ {courseState?.price}</h4>
                  </div>
                  <button
                    onClick={() => {
                      uploadCart(courseState?._id);
                    }}
                    className="btn mt-3 mar-btn"
                    href="#"
                  >
                    <span class="btn-text">
                      Buy Now<i class="far fa-long-arrow-right"></i>
                    </span>{" "}
                  </button>
                </div>
              </div>
              <div className="col-sm-12 col-lg-5 ">
                <div className="img-box mt-4">
                  <img
                    className="w-100"
                    src={courseState?.images[0]?.url}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-7">
                <div className="mt-5">
                  <h3>Course Overview</h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: courseState?.overview,
                    }}
                  ></p>
                </div>

                <div className="cou-curry-box">
                  <h3>Course Curriculum</h3>

                  <div className="mt-4">
                    <div className="cur-info-grid">
                      <div className="d-flex cur-info">
                        <ImCheckboxChecked className="cur-icon" />
                        <p>Professional Presentation</p>
                      </div>
                      <div className="d-flex cur-info">
                        <ImCheckboxChecked className="cur-icon" />
                        <p>Professional Presentation</p>
                      </div>
                      <div className="d-flex cur-info">
                        <ImCheckboxChecked className="cur-icon" />
                        <p>Professional Presentation</p>
                      </div>
                      <div className="d-flex cur-info">
                        <ImCheckboxChecked className="cur-icon" />
                        <p>Professional Presentation</p>
                      </div>
                      <div className="d-flex cur-info">
                        <ImCheckboxChecked className="cur-icon" />
                        <p>Professional Presentation</p>
                      </div>
                      <div className="d-flex cur-info">
                        <ImCheckboxChecked className="cur-icon" />
                        <p>Professional Presentation</p>
                      </div>
                      <div className="d-flex cur-info">
                        <ImCheckboxChecked className="cur-icon" />
                        <p>Professional Presentation</p>
                      </div>
                      <div className="d-flex cur-info">
                        <ImCheckboxChecked className="cur-icon" />
                        <p>Professional Presentation</p>
                      </div>
                      <div className="d-flex cur-info">
                        <ImCheckboxChecked className="cur-icon" />
                        <p>Professional Presentation</p>
                      </div>
                      <div className="d-flex cur-info">
                        <ImCheckboxChecked className="cur-icon" />
                        <p>Professional Presentation</p>
                      </div>
                      <div className="d-flex cur-info">
                        <ImCheckboxChecked className="cur-icon" />
                        <p>Professional Presentation</p>
                      </div>
                      <div className="d-flex cur-info">
                        <ImCheckboxChecked className="cur-icon" />
                        <p>Professional Presentation</p>
                      </div>
                      <div className="d-flex cur-info">
                        <ImCheckboxChecked className="cur-icon" />
                        <p>Professional Presentation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 review-from">
                <h5>Write a Review</h5>

                <div className="appointment-wrapper contact-form-page">
                  <div
                    className="appointment-form"
                    
                  >
                    <div>
                      <ReactStars
                        count={5}
                        size={25}
                        value={0}
                        edit={true}
                        onChange={(e) => {
                          setStar(e);
                        }}
                        className="ms-4"
                        activeColor="#ffd700"
                      />
                    </div>

                    <div className="mt-4">
                      <div className="form-box message-icon mb-30">
                        <textarea
                          name="message"
                          cols="40"
                          rows="10"
                          placeholder="Write comments"
                          onChange={(e) => {
                            setComment(e.target.value);
                          }}
                         
                        />
                       
                      </div>
                      <div className="contact-btn contact-2-btn text-center">
                        <button onClick={addRatingToCourse} className="btn" type="button">
                          <span className="btn-text">
                            Submit Review{" "}
                            <i className="far fa-long-arrow-right"></i>
                          </span>{" "}
                          <span className="btn-border"></span>
                        </button>
                      </div>
                    </div>
                  </div>
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

export default SingleCourse;
