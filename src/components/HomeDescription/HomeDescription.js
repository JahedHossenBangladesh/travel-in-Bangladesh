import React from 'react';
import Nav from '../Map/Nav/Nav';
import './HomeDescription.css';
import HotelDetail from './HotelDetail';
import HotelPhoto from './HotelPhoto';
const HomeDescription = () => {
    return (
      <div style= {{height:"2000px"}}>
        <div>
          <Nav />
        </div>
        <div>
          <HotelPhoto />
        </div>
        <div className= "mt-5"  style={{marginTop:"1800px"}}>
          <HotelDetail />
        </div>
      </div>
    );
};

export default HomeDescription;