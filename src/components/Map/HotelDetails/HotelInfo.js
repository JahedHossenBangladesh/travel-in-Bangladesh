import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import './HotelInfo.css';


export default function HotelInfo(props) {

const { img, title, capacity,kitchen ,cancel, ratetting, price, total } = props.infos;
    return (
      <div className="col-sm-12 ">
        <div className="containers">
          <div className="image">
            <img src={img} alt="" style={{ width: "200px" }} />
          </div>
          <div className="hotelInfo">
            <h6>{title}</h6>
            <p className="text-secondary">
              {capacity} <br /> {kitchen}
            </p>
            <p className="text-secondary">{cancel}</p>
          </div>
          <div className="icon mt-5">
            <p>
              <FontAwesomeIcon icon={faStar} color="green" /> {ratetting}
            </p>
          </div>
          <div className="price mt-5">
            <h6>{price}</h6>
            <p className="text-secondary">{total}</p>
          </div>
        </div>

        <hr />
      </div>
    );
}
