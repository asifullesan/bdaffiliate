import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const CourseCard = (props) => {
  const { id, title, description, prise, images, totalrating } = props;
  return (
    <div className="blog-wrapper blog-2-wrapper">
      <div className="blog-img">
        <a href="blog-details.html">
          <img src={images} alt="" />
        </a>
      </div>
      <div className="mt-3 d-flex justify-content-between">
        <div className="d-flex">
          <div classNames="rrrrr">
            <ReactStars
              count={5}
              size={20}
              value={totalrating}
              edit={false}
              activeColor="#ffd700"
            />
          </div>
          <p className="ms-3">({totalrating})</p>
        </div>

        <div>
          <h6> ৳ {prise}</h6>
        </div>
      </div>
      <div className="blog-text">
        <h3>{title}</h3>
        <p
          dangerouslySetInnerHTML={{
            __html: description?.substr(0, 120) + "...",
          }}
        ></p>

        <Link to={"/course/" + id}>
          {" "}
          <span className="blog-button">
            read more <i class="far fa-long-arrow-right"></i>
          </span>{" "}
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
