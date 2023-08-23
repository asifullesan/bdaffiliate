import { Link } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import Footer from "../components/Footer";
import { createQuery } from "../features/contact/contactSlice";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";

import * as yup from "yup";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

let enquirySchema = yup.object().shape({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  name: yup.string().required("Name is Required"),
  subject: yup.string().required("Subject is Required"),
  message: yup.string().required("Message is Required"),
});

const Contact = () => {
  const defaultProps = {
    center: {
      lat: 22.837525227042217,
      lng: 89.53100114481398,
    },
    zoom: 20,
  };

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
        <div className="breadcrumb-area pt-230 pb-235 contact-bread">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb-text text-center">
                  <h1>Contact Us</h1>
                  <ul className="breadcrumb-menu">
                    <li>
                      <a href="index.html">home</a>
                    </li>
                    <li>
                      <span>Contact Us</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="map-area">
          <div id="contact-map" className="contact-page-map">
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            ></GoogleMapReact>
          </div>
        </section>

        <section
          className="contact-info-area"
          data-background="assets/img/bg/bg-map.html"
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="contact text-center mb-30 data-bg">
                  <i className="fal fa-envelope-open"></i>
                  <h3>Mail Here</h3>
                  <p> bdaffiliateikhulnazone@gmail.com</p>
                  <p>www.infotorun.net</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="contact text-center mb-30 data-bg">
                  <i className="fal fa-map-marker-alt"></i>
                  <h3>Visit Here</h3>
                  <p> 151/1, Mujgunni R/A </p>
                  <p>Khulna </p>
                </div>
              </div>
              <div className="col-xl-4  col-lg-4 col-md-4 ">
                <div className="contact text-center mb-30 data-bg">
                  <i className="fal fa-phone"></i>
                  <h3>Call Us Now</h3>
                  <p>01911-788323</p>
                  <p>01711-396109</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="contact-2-area pt-120 pb-130">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
                <div className="section-title text-center ml-50 mr-50 mb-75">
                  <span className="border-left-1"></span>
                  <span>contact us</span>
                  <span className="border-right-1"></span>
                  <h1>Don't Hesitate To Contact Us</h1>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="appointment-wrapper contact-form-page">
                <form
                  className="appointment-form"
                  onSubmit={formik.handleSubmit}
                >
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-box user-icon mb-30">
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name Here"
                          value={formik.values.name}
                          onChange={formik.handleChange("name")}
                          onBlur={formik.handleBlur("name")}
                        />
                        <div className="error">
                          {formik.touched.name && formik.errors.name}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div class="form-box email-icon mb-30">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Here"
                          value={formik.values.email}
                          onChange={formik.handleChange("email")}
                          onBlur={formik.handleBlur("email")}
                        />
                        <div className="error">
                          {formik.touched.email && formik.errors.email}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div class="form-box date-icon mb-30">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          value={formik.values.subject}
                          onChange={formik.handleChange("subject")}
                          onBlur={formik.handleBlur("subject")}
                        />
                        <div className="error">
                          {formik.touched.subject && formik.errors.subject}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-box message-icon mb-30">
                        <textarea
                          name="message"
                          cols="30"
                          rows="10"
                          placeholder="Write message"
                          value={formik.values.message}
                          onChange={formik.handleChange("message")}
                          onBlur={formik.handleBlur("message")}
                        />
                        <div className="error">
                          {formik.touched.message && formik.errors.message}
                        </div>
                      </div>
                      <div className="contact-btn contact-2-btn text-center">
                        <button className="btn" type="submit">
                          <span className="btn-text">
                            send message{" "}
                            <i className="far fa-long-arrow-right"></i>
                          </span>{" "}
                          <span className="btn-border"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Contact;
