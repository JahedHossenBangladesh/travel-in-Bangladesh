import React from 'react';

const InfoGest = () => {
    return (
      <>
        <p>252,stays Apr 13-17 3 guests</p>
        <h5>Stay in Dhaka Division</h5>
        <div className="row">
          <div className="col-sm-12">
            <button
              type="button"
              style={{ borderRadius: "25px" }}
              className="btn btn-outline-secondary rounded-pill mr-1"
            >
              Cancellation flexibility
            </button>
            <button
              type="button"
              style={{ borderRadius: "25px" }}
              className="btn btn-outline-secondary rounded-pill mr-1"
            >
              Type of place
            </button>
            <button
              type="button"
              style={{ borderRadius: "25px" }}
              className="btn btn-outline-secondary rounded-pill mr-1"
            >
              price
            </button>
            <button
              type="button"
              style={{ borderRadius: "25px" }}
              className="btn btn-outline-secondary rounded-pill mr-1 "
            >
              Instant Book
            </button>
            <button
              type="button"
              style={{ borderRadius: "25px" }}
              className="btn btn-outline-secondary rounded-pill mr-1 "
            >
              More Filters
            </button>
          </div>
        </div>
      </>
    );
};

export default InfoGest;