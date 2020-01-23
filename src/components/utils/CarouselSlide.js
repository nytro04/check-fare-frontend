import React, { Component } from "react";
import CarouselItem from "./CarouselItem";

class CarouselSlide extends Component {
  state = {
    carousel1: {
      imgNum: 1,
      subtitle: "Latest phones",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, a."
    },
    carousel2: {
      imgNum: 2,
      subtitle: "Latest laptops",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, a."
    },
    carousel3: {
      imgNum: 3,
      subtitle: "Latest computers",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, a."
    }
    // carousel3: {
    //   imgNum: 3,
    //   subtitle: "Latest iphone",
    //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, a."
    // },
  };
  render() {
    const { carousel1, carousel2, carousel3 } = this.state;
    return (
      <div className="carousel slide" id="myCarousel" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          {/* <li data-target="#myCarousel" data-slide-to="3"></li> */}
        </ol>

        <div className="carousel-inner">
          <CarouselItem
            active="active"
            imgNum={carousel1.imgNum}
            subtitle={carousel1.subtitle}
            text={carousel1.text}
          />
          <CarouselItem
            imgNum={carousel2.imgNum}
            subtitle={carousel2.subtitle}
            text={carousel2.text}
          />
          <CarouselItem
            imgNum={carousel3.imgNum}
            subtitle={carousel3.subtitle}
            text={carousel3.text}
          />
        </div>
      </div>
    );
  }
}

export default CarouselSlide;
