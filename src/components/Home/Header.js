import React, { Component } from "react";
import Navbar from "./Navbar";
import TopNav from "./TopNav";
import CarouselSlide from "../utils/CarouselSlide";

// import Card from "../utils/Card";

class Header extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <Navbar />
        <CarouselSlide />

        <h2>FEATURE PRODUCTS</h2>
        
      </div>
    );
  }
}

export default Header;
