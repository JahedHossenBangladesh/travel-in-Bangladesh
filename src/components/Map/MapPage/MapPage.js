import React from 'react';
import DivisionHotel from '../DivisionHotel/DivisionHotel';
import Nav from '../Nav/Nav';

const MapPage = () => {
    return (
        <>
         <Nav/>   
         <div className="container">
             <div className="row">
                 <div className="col-sm-6 border">
                     <DivisionHotel/>
                 </div>
                 <div className="col-sm-6 border">
                     This is Map
                 </div>
             </div>
         </div>
        </>
    );
};

export default MapPage;