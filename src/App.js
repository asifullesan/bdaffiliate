import React from "react";

import "./assets/css/bootstrap.min.css";
import "./assets/css/fontawesome-all.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/main.css";
import "./assets/css/meanmenu.css";
import "./assets/css/responsive.css";
import "./assets/css/slick.css";
import "./assets/css/themify-icons.css";
import "./assets/css/owl.carousel.min.css";
import "./App.css";
import "./assets/css/animate.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import SingleBlog from "./pages/SlingleBlog";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Pricing from "./pages/Pricing";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Course from "./pages/Course";
import SingleCourse from "./pages/SingleCourse";
import PaymentSuccess from "./pages/PaymentSuccess";
import EmailVerify from "./pages/EmailVerify";
import PaymentFailed from "./pages/PaymentFailed";

function App() {
  return (
    <>
       
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/course/:id" element={<SingleCourse />} />
          <Route path="/payment/success/:tranId" element={<PaymentSuccess />} />
          <Route path="/payment/failed" element={<PaymentFailed />} />
          <Route path="/email-verification" element={<EmailVerify />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
