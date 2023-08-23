import { Link, useNavigate } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import blog1 from "../assets/img/blog/b1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import * as yup from "yup";
import { loginUser } from "../features/user/userSlice";
import { useEffect } from "react";

let loginSchema = yup.object().shape({
  
  email: yup
    .string()
    .email("Email should be valid").required("Password is Required")
    .required("Email is Required"),
  password: yup.string().required("Password is Required"),
});



const Login = () => {


  const navigate = useNavigate()


  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
      
    },
  });


  const authState = useSelector((state) => state);

  const { user, isError, isSuccess, isLoading, message } = authState.auth;

  useEffect(() => {
    if (isLoading === true) {
      navigate("/");
    } else {
      navigate(" ");
    }
  }, [user, isError, isSuccess, isLoading]);






  return (
    <>
      <Header />

      <main>
        <section className="login-bg cta-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto ">
                <div className="log">
                    <h2>Login Your Account</h2>
                  <div className="appointment-wrapper contact-form-page mt-5">
                    <form className="appointment-form"  onSubmit={formik.handleSubmit} >
                     
                      <div class=" mb-30">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email Here"
                          value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                        />
                      </div>
                      <div class=" mb-30">
                        <input
                          type="password"
                          name="password"
                          placeholder="Your Password"
                          value={formik.values.password}
                          onChange={formik.handleChange("password")}
                          onBlur={formik.handleBlur("password")}
                        />
                      </div>


                      <div className="contact-btn contact-2-btn text-center">
                        <button className="btn" type="submit">
                          <span className="btn-text">
                            Log In{" "}
                            <i className="far fa-long-arrow-right"></i>
                          </span>{" "}
                          <span className="btn-border"></span>
                        </button>
                      </div>
                    </form>

                  <div className="mt-4">
                  <p>If you don't have any account <Link to="/register"><span className="reg-t"> Register Now</span></Link></p>
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

export default Login;
