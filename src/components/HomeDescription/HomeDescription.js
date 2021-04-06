import React from 'react';
import Nav from '../Map/Nav/Nav';
import './HomeDescription.css';
import HotelDetail from './HotelDetail';
import HotelPhoto from './HotelPhoto';
const HomeDescription = () => {
    return (
      <>
        <Nav />
        <HotelPhoto />
    {/* <br/>
    <br/>
    <br/>
    <br/> */}
          <HotelDetail />
        
      </>
    );
};

export default HomeDescription;