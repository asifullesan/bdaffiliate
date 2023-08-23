import { Link, Navigate, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import con from "../images/cong.png";

const EmailVerify = () => {
 



  return (
    <>
     

      <main className="mt-5 pt-5">
      <div className="container mt-5  mb-5">
   <div className="row">
        <div className="col-lg-6 mx-auto">
            <div className="successPay">
                <img className="w-100 con-img" src={con} alt=""/>
                <div className="pay-s-text">
                    <h3>User Register Successful</h3>
                    <h5 className="mt-4">Please check your Email to verify your email account</h5>
                </div>
            </div>
        </div>
     </div>
   </div>

      </main>

   
    </>
  );
};

export default EmailVerify;
