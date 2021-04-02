import React from 'react';
import DivisionHotel from '../DivisionHotel/DivisionHotel';
import Nav from '../Nav/Nav';

const MapPage = () => {
    return (
      <>
        <Nav />
        <div className="container border-top ">
          <div className="row mt-3 ">
            <div className="col-sm-7 " >
              <DivisionHotel />
            </div>
            <div className="col-sm-5">This is Map</div>
          </div>
        </div>
      </>
    );
};

export default MapPage;