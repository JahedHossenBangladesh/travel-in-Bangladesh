import React from 'react';

export default function HotelPhoto() {
    return (
      
        <div className="containerImg">
          <div className="img1 ml-1 mr-0">
            <img
              src="https://i.imgur.com/LtjDSVN.jpg"
              alt="building image"
              style={{ height: "500px", width: "750px" }}
            />
          </div>
          <div className="img2 ml-0">
            <img
              src="https://i.imgur.com/AX8MJv6.jpg "
              alt="room image"
              style={{ height: "500px", width: "850px" }}
            />
          </div>
        </div>
      
    );
}
