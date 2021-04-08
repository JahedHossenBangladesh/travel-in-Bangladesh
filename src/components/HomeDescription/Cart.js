import {
  faArrowRight,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
const Cart = () => {
    return (
      <div className="container border">
        <h6>$34/night</h6>
        <p className="text-secondary">
          <FontAwesomeIcon icon={faStar} color="green" /> 4.9(20 reviews)
        </p>
        <div className="row pl-3">
          
          <div className="col-sm-10 border">
            <h5 className="text-secondary">
              4/12/2021
              <span className="pl-5 pr-5">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
              8/12/2021{" "}
            </h5>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    );
};

export default Cart;