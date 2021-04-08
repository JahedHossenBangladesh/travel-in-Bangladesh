import React from 'react';
import Cart from './Cart';

const HotelDetail = () => {
    return (
      <div style={{ marginTop: "310px" }}>
        {/* style={{ border: "2px solid black" }} */}
        <div className="container ">
          <div className="row">
            <div className="col-sm-6"></div>
            <div className="col-sm-6">
              <div>
                <Cart/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HotelDetail;
