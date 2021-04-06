import React from 'react';
import Sidebar from '../Home/Sidebar/Sidebar';

const HotelDetail = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6"></div>
                <div className="col-sm-6">
                    <Sidebar title = {"$34/night"} ratetting={"4.9(20 peoples)"}/>
                </div>
            </div>
        </div>
    );
};

export default HotelDetail;
