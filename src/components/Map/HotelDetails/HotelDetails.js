import React, { useState } from 'react';
import fakeData from "../../../FakeData/FakeData";
import HotelInfo from './HotelInfo';


export default function HotelDetails() {
    const [info,setInfo] = useState(fakeData);
    return (
      <div className="container">
        <div className="row" >
          {info.map((information) => (
            <HotelInfo key={information.key} infos={information}></HotelInfo>
          ))}
        </div>
      </div>
    );
}
