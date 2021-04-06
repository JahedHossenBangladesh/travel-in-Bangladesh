import React from 'react';
import Sidebar from '../Home/Sidebar/Sidebar';

const HotelDetail = () => {
    return (
      <div style={{marginTop:"200px"}}>
        <div className="container " style={{border:"2px solid black"}}>
            <div className="row">
                <div className="col-sm-6"></div>
                <div className="col-sm-6">
                    <Sidebar title = {"$34/night"} ratetting={"4.9(20 peoples)"}/>
                </div>
            </div>
        </div>
        </div>
    );
};

export default HotelDetail;
