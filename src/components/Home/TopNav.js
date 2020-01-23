import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="header">
      <div className="container pt-3">
        <div className="header__top">
          <div className="header__top--contact">
            <p className="mr-3">
              <span className="font-weight-bold mr-2">PHONE:</span> 0549970041
            </p>
            <p>
              <span className="font-weight-bold mr-2">EMAIL: </span>
              nytro04@gmail.com
            </p>
          </div>
          <div className="header__top--social">
            <Link to="/cart">
              <i className="fas fa-shopping-cart mr-3"></i>
            </Link>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter mr-3"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook mr-3"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram mr-3"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
