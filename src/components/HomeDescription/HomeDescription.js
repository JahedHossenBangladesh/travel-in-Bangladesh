import React from 'react';
import Nav from '../Map/Nav/Nav';
import './HomeDescription.css';
import HotelDetail from './HotelDetail';
import HotelPhoto from './HotelPhoto';
const HomeDescription = () => {
    return (
      <>
      <Nav/>
      <HotelPhoto/>
      <div className="container">
          <div className="row">
              <div className="col-sm-12">
                  <HotelDetail/>
              </div>
          </div>
      </div>
      </>
    
    );
};

export default HomeDescription;