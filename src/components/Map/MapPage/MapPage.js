import React from 'react';
import DivisionHotel from '../DivisionHotel/DivisionHotel';
import HotelDetails from '../HotelDetails/HotelDetails';
import Nav from '../Nav/Nav';

const MapPage = () => {
    return (
      <>
        <Nav />
        <div className="container border-top ">
          <div className="row ">
            <div className="col-sm-7 " >
              <DivisionHotel />
              <HotelDetails />
            </div>
            <div className="col-sm-5">This is Map</div>
          </div>
        </div>
      </>
    );
};

export default MapPage;