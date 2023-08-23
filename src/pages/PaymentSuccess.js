import { Link, useParams } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import con from "../images/cong.png";
import { useEffect, useState } from "react";

const PaymentSuccess = () => {


 const tranId = useParams()
//  console.log(tranId);


  return (
    <>
      <Header />

      <main className="bor">

   <div className="container mt-5  mb-5">
   <div className="row">
        <div className="col-lg-6 mx-auto">
            <div className="successPay">
                <img className="w-100 con-img" src={con} alt=""/>
                <div className="pay-s-text">
                    <h2>Payment Successful</h2>
                    <p>Transaction-ID : {tranId.tranId}</p>
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

export default PaymentSuccess;
