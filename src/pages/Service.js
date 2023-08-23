import { Link } from "react-router-dom";
import ser1 from "../assets/img/service/ser-10.jpg";
import asbg from "../assets/img/bg/map.png";
import { createQuery, resetState } from "../features/contact/contactSlice";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";

let enquirySchema = yup.object().shape({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  name: yup.string().required("Name is Required"),
  subject: yup.string().required("Subject is Required"),
  message: yup.string().required("Message is Required"),
});

const Service = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: enquirySchema,
    onSubmit: (values) => {
      dispatch(createQuery(values));
      formik.resetForm();
    },
  });

  return (
    <>
      <Header />

      <main>
        <div className="breadcrumb-area pt-230 pb-235 ser-bread">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb-text text-center">
                  <h1>our Services</h1>
                  <ul className="breadcrumb-menu">
                    <li>
                      <a href="index.html">home</a>
                    </li>
                    <li>
                      <span>our Services</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="services-area pt-130 pb-100">
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
        </div>

        <div className="our-services-area grey-bg-2 pt-120 pb-130">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
                <div className="section-title text-center ml-50 mr-50 mb-85">
                  <span className="border-left-1"></span>
                  <span>what we do</span>
                  <span className="border-right-1"></span>
                  <h1>We provide exclusive services for your busainess</h1>
                </div>
              </div>
            </div>
            <div class="row">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="our-services-wrapper mb-30">
                  <div className="our-services-img">
                    <img src={ser1} alt="" />
                  </div>
                  <div className="our-services-content">
                    <div className="our-services-icon">
                      <i className="fal fa-gem"></i>
                    </div>
                    <div className="our-services-text">
                      <h3>Product Design</h3>
                      <p>
                        Set perspiciatis unde omnis iste natus error sit
                        voluptatem accusan tium demqu laudantium
                      </p>
                      <a href="#">
                        view more <i className="far fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="our-services-wrapper mb-30">
                  <div className="our-services-img">
                    <img src={ser1} alt="" />
                  </div>
                  <div className="our-services-content">
                    <div className="our-services-icon">
                      <i className="fal fa-gem"></i>
                    </div>
                    <div className="our-services-text">
                      <h3>Product Design</h3>
                      <p>
                        Set perspiciatis unde omnis iste natus error sit
                        voluptatem accusan tium demqu laudantium
                      </p>
                      <a href="#">
                        view more <i className="far fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="our-services-wrapper mb-30">
                  <div className="our-services-img">
                    <img src={ser1} alt="" />
                  </div>
                  <div className="our-services-content">
                    <div className="our-services-icon">
                      <i className="fal fa-gem"></i>
                    </div>
                    <div className="our-services-text">
                      <h3>Product Design</h3>
                      <p>
                        Set perspiciatis unde omnis iste natus error sit
                        voluptatem accusan tium demqu laudantium
                      </p>
                      <a href="#">
                        view more <i className="far fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="our-services-wrapper mb-30">
                  <div className="our-services-img">
                    <img src={ser1} alt="" />
                  </div>
                  <div className="our-services-content">
                    <div className="our-services-icon">
                      <i className="fal fa-gem"></i>
                    </div>
                    <div className="our-services-text">
                      <h3>Product Design</h3>
                      <p>
                        Set perspiciatis unde omnis iste natus error sit
                        voluptatem accusan tium demqu laudantium
                      </p>
                      <a href="#">
                        view more <i className="far fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="our-services-wrapper mb-30">
                  <div className="our-services-img">
                    <img src={ser1} alt="" />
                  </div>
                  <div className="our-services-content">
                    <div className="our-services-icon">
                      <i className="fal fa-gem"></i>
                    </div>
                    <div className="our-services-text">
                      <h3>Product Design</h3>
                      <p>
                        Set perspiciatis unde omnis iste natus error sit
                        voluptatem accusan tium demqu laudantium
                      </p>
                      <a href="#">
                        view more <i className="far fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="our-services-wrapper mb-30">
                  <div className="our-services-img">
                    <img src={ser1} alt="" />
                  </div>
                  <div className="our-services-content">
                    <div className="our-services-icon">
                      <i className="fal fa-gem"></i>
                    </div>
                    <div className="our-services-text">
                      <h3>Product Design</h3>
                      <p>
                        Set perspiciatis unde omnis iste natus error sit
                        voluptatem accusan tium demqu laudantium
                      </p>
                      <a href="#">
                        view more <i className="far fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-xl-12">
                <div className="services-button text-center mt-30">
                  <a className="btn" href="#">
                    <span className="btn-text">
                      view All Services{" "}
                      <i className="far fa-long-arrow-right"></i>
                    </span>{" "}
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="contact-2-area pt-130 pb-100 theme-bg ">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-7 ">
                <div className="contact-wrapper mb-30">
                  <div className="section-title section-title-white mb-25">
                    <span className="b-sm-left-2"></span>
                    <span className="sub-t-left">contact us</span>
                    <h1>
                      Don't Hesitate To <br /> Contact Us
                    </h1>
                  </div>
                  <form onSubmit={formik.handleSubmit} id="contact-form">
                    <div className="row">
                      <div className="col-xl-6 mb-10">
                        <div className="form-2-box user-icon mb-10">
                          <input
                            className="name"
                            placeholder="Full Name Here"
                            type="text"
                            value={formik.values.name}
                            onChange={formik.handleChange("name")}
                            onBlur={formik.handleBlur("name")}
                          />
                          <div className="error-message">
                            {formik.touched.name && formik.errors.name}
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 mb-10">
                        <div className="form-2-box email-2-icon mb-10">
                          <input
                            className="email"
                            placeholder="Email Address"
                            type="email"
                            value={formik.values.email}
                            onChange={formik.handleChange("email")}
                            onBlur={formik.handleBlur("email")}
                          />
                           <div className="error-message">
                          {formik.touched.email && formik.errors.email}
                        </div>
                        </div>
                      </div>
                      <div className="col-xl-12 mb-35">
                        <div className="form-2-box sub-icon mb-10">
                          <input
                            name="subject"
                            placeholder="Subject"
                            type="text"
                            value={formik.values.subject}
                            onChange={formik.handleChange("subject")}
                            onBlur={formik.handleBlur("subject")}
                          />
                           <div className="error-message">
                          {formik.touched.subject && formik.errors.subject}
                        </div>
                        </div>
                      </div>
                      <div className="col-xl-12 mb-30">
                        <div className="form-2-box message-2-icon mb-10">
                          <textarea
                            name="message"
                            cols="30"
                            rows="10"
                            placeholder="Message"
                            value={formik.values.message}
                            onChange={formik.handleChange("message")}
                            onBlur={formik.handleBlur("message")}
                          />
                           <div className="error-message">
                          {formik.touched.message && formik.errors.message}
                        </div>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <button class="btn" type="submit">
                          <span className="btn-texts">
                            send message{" "}
                            <i className="far fa-long-arrow-right"></i>
                          </span>{" "}
                          <span class="btn-border"></span>
                        </button>
                      </div>
                    </div>
                    <p className="form-message"></p>
                  </form>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5">
                <div className="map-img mb-30">
                  <img src={asbg} alt="" />
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

export default Service;
