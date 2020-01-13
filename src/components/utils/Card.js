import React from "react";

const Card = ({ routeImg, title, summary, lastUpdated }) => {
  return (
    <div className="card">
      <img src={routeImg} className="card-img-top img-fluid" alt="route" />
      <div className="card-body">
        <h5 className="card-title text-info">{title}</h5>
        {/* <p className="card-text">{summary}</p> */}
      </div>
      <div className="card-footer">
        <small className="text-muted">{lastUpdated}</small>
      </div>
    </div>
  );
};

export default Card;
