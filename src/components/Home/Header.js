import React, { Component } from "react";
import routeImg from "../../assets/route.png";
import Card from "../utils/Card";

class Header extends Component {
  render() {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-md-3 mx-auto">
            <Card
              routeImg={routeImg}
              title="Accra - Kumasi"
              lastUpdated="Last updated 3 mins ago"
            />
          </div>
          <div className="col-md-3 mx-auto">
            <Card
              routeImg={routeImg}
              title="Accra - Ho/Hohoe/Lome"
              lastUpdated="Last updated 3 mins ago"
            />
          </div>
          <div className="col-md-3 mx-auto">
            <Card
              routeImg={routeImg}
              title="Accra - North/Wa/Navrongo"
              lastUpdated="Last updated 3 mins ago"
            />
          </div>
          <div className="col-md-3 mx-auto">
            <Card
              routeImg={routeImg}
              title="Accra - Sunyani/Takoradi"
              lastUpdated="Last updated 3 mins ago"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
