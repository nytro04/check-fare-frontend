import React from "react";
import { Link } from "react-router-dom";

const CarouselItem = ({ imgNum, subtitle, text, active }) => {
  return (
    <div className={`carousel-item ${active} carousel-image-${imgNum}`}>
      <div className="container">
        <div className="carousel-caption d-none d-sm-block text-left mb-5">
          <h2 className="display-3">{subtitle}</h2>
          <p className="lead">{text}</p>
          <Link to="/shop" className="btn btn-info">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
