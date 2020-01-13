import React from "react";

const CardHorizontal = ({ agencyImg, title, summary, lastUpdated }) => {
  return (
    <div className="card">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={agencyImg} alt="agency" className="img-fluid" />
        </div>
        <div className="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{summary}</p>
            <p class="card-text">
              <small class="text-muted">{lastUpdated}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHorizontal;
