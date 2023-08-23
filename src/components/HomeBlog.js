import React from "react";
import { Link } from "react-router-dom";

const HomeBlog = (props) => {
  const { id, title, description, date, images, author } = props;
  return (
    <div className="blog-wrapper">
      <div className="blog-img">
        <a href="blog-details.html">
          <img src={images} alt="" />
        </a>
      </div>
      <div className="blog-meta">
        <span>
          {" "}
          <i className="far fa-user"></i> {author}
        </span>
        <span>
          {" "}
          <i className="fal fa-calendar-alt"></i> {date}
        </span>
        <span>
          {" "}
          <i className="far fa-thumbs-up"></i> (10)
        </span>
      </div>
      <div className="blog-text">
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML=
          {{ __html: description?.substr(0, 150) + "..." }}>
          
        </p>
        <Link to={"/blog/" + id}>
          {" "}
          <span className="blog-button">
            read more <i className="far fa-long-arrow-right"></i>
          </span>{" "}
        </Link>
      </div>
    </div>
  );
};

export default HomeBlog;
