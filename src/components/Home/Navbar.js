import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container">
          <Link className="navbar-brand" href="#">
            shoppy <i className="fab fa-twitter mr-3"></i>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mt-lg-0">
              <li className="nav-item active mr-4">
                <Link className="nav-link" href="#">
                  Login <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link type="button" className="btn btn-info" href="#">
                  Post your ad
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
