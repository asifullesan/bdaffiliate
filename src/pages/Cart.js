import React, { useEffect, useState } from "react";

import watch from "../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartProduct,
  getUserCart,
  updateCartProduct,
} from "../features/user/userSlice";
import Header from "../components/Header";
import Footer from "../components/Footer";

import blog1 from "../assets/img/blog/blog-1.jpg";

const Cart = () => {
  const [totalAmount, setTalAmount] = useState(null);

  const dispatch = useDispatch();
  const useCartState = useSelector((state) => state.auth.cartProducts);

  useEffect(() => {
    dispatch(getUserCart());
  }, []);

  const deleteACartProduct = (id) => {
    dispatch(deleteCartProduct(id));
    setTimeout(() => {
      dispatch(getUserCart());
    }, 200);
  };

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < useCartState?.length; index++) {
      sum = sum + Number(useCartState[index].price);
      setTalAmount(sum);
    }
  }, [useCartState]);

  return (
    <>
      <Header />

      <main>
        <div className="breadcrumb-area pt-230 pb-235 ser-bread">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb-text text-center">
                  <h1>Cart</h1>
                  <ul className="breadcrumb-menu">
                    <li>
                      <a href="index.html">home</a>
                    </li>
                    <li>
                      <span>Cart</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      

        <div>
     
          <div className="container py-5">
          {useCartState?.length === 0 && (
          <div className="text-center fos">No Item available</div>
        )}
            {useCartState &&
              useCartState?.map((item, index) => {
                return (
                  <>
                    <div className="row">
                      <div className="col-lg-3 col-sm-12 alcenter">
                        <h3>Item</h3>
                        <div className="mt-5 ">
                          <div className="">
                            <img
                              src={item?.images}
                              className="img-fluid "
                              alt="product image"
                            />
                          </div>
                          <div className="w-75 mt-4">
                            <h4>{item?.title}</h4>
                          </div>
                        </div>
                      </div>
                      <div className="price col-lg-3 col-sm-12">
                        <h3 className="">Details</h3>
                        <h5 className=" mt-5">
                          wsfsoi wefoiehf wefoihj wefoeihwe feofiehjf wweofiwjjf
                          weogighwgowfigh wgowgiwhgwoghw gh
                        </h5>
                      </div>
                      <div className="price2 col-lg-3 ">
                        <h3>Total Price</h3>
                        <h5 className=" mt-5">$ {item?.price}</h5>
                      </div>
                      <div className="price2 col-lg-3 col-sm-12">
                        <h3>Action</h3>
                        <button
                          onClick={() => {
                            deleteACartProduct(item?._id);
                          }}
                          className="btn mt-5 mar-btn"
                          href="#"
                        >
                          <span class="btn-text">Remove item</span>{" "}
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}

            <div className="row">
              <div className="col-12 py-2 mt-4">
                <div className="d-flex justify-content-between align-items-baseline">
                  <Link to="/product" className="button"></Link>
                  <div className="d-flex flex-column align-items-end">
                    <h4>SubTotal:{totalAmount} </h4>
                    <p>Taxes and shipping calculated at checkout</p>

                    <Link to="/checkout" className="btn" href="#">
                      <span class="btn-text">
                        Check out <i class="far fa-long-arrow-right"></i>
                      </span>{" "}
                    </Link>
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

export default Cart;
