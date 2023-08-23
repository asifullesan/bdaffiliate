import { Link, Navigate, useNavigate } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import blog1 from "../assets/img/blog/b1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { emailVerification, registerUser } from "../features/user/userSlice";
import * as yup from "yup";
import { useEffect } from "react";

let signUpSchema = yup.object().shape({
  firstName: yup.string().required("First Name is Required"),
  lastName: yup.string().required("Last Name is Required"),
  email: yup
    .string()
    .nullable()
    .email("Email should be valid")
    .required("Email is Required"),
  mobile: yup.string().required("Mobile No. is Required"),
  password: yup.string().required("Password is Required"),
});

const SignUp = () => {
  const authState = useSelector((state) => state);


  console.log(authState);
  const { user, isError, isSuccess, isLoading, message } = authState.auth;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
     

      
      // setTimeout(() => {
      //   if (isLoading === true) {
      //         navigate("/email-verification");
      //       } else {
      //         navigate(" ");
      //       }
      // }, 5000);
      formik.resetForm();
    },
  });

  const email = useSelector((state) => state?.auth?.createUser?.email);
  useEffect(() => {
    if(isSuccess === true){
      dispatch(emailVerification({email:email}));
      console.log({email:email});
    }
    
    
  }, [email]);


  // console.log(email);


  // const authState = useSelector((state) => state);

  // const { user, isError, isSuccess, isLoading, message } = authState.auth.VERIFY;

  useEffect(() => {
    if (isSuccess === true) {
      navigate("/email-verification");
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
                  <h2>Register Your Account</h2>
                  <div className="appointment-wrapper contact-form-page mt-4">
                    <form
                      className="appointment-form"
                      onSubmit={formik.handleSubmit}
                    >
                      <div className=" mb-30">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="Your First Name Here"
                          value={formik.values.firstName}
                          onChange={formik.handleChange("firstName")}
                          onBlur={formik.handleBlur("firstName")}
                        />
                      </div>
                      <div className=" mb-30">
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Your Last Name Here"
                          value={formik.values.lastName}
                          onChange={formik.handleChange("lastName")}
                          onBlur={formik.handleBlur("lastName")}
                        />
                      </div>
                      <div className=" mb-30">
                        <input
                          type="tel"
                          name="mobile"
                          placeholder="Your Phone Here"
                          value={formik.values.mobile}
                          onChange={formik.handleChange("mobile")}
                          onBlur={formik.handleBlur("mobile")}
                        />
                      </div>

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
                            Sign Up <i className="far fa-long-arrow-right"></i>
                          </span>{" "}
                          <span className="btn-border"></span>
                        </button>
                      </div>
                    </form>

                    <div className="mt-4">
                      <p>
                        If you have any account please
                        <Link to="/login">
                          <span className="reg-t"> Log-In</span>
                        </Link>
                      </p>
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

export default SignUp;
