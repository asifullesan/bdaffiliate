import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

const Gallery = () => {
  return (
    <>
      <Header />
      <main className="">
        <div className="breadcrumb-area pt-230 pb-235 about-bread-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb-text text-center">
                  <h1>Our gallery</h1>
                  <ul className="breadcrumb-menu">
                    <li>
                      <Link to="/">home</Link>
                    </li>
                    <li>
                      <span>Gallery</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>


    <div>
        <h3 style={{textAlign: "center", paddingTop: "200px", paddingBottom: "400px"}}>Gallery will coming soon...</h3>
    </div>

      
      
      
       

         
      </main>

      <Footer />
    </>
  );
};

export default Gallery;
