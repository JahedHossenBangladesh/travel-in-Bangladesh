import {
  faArrowRight,


  faChevronDown, faChevronUp, faStar
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react';
import { Collapse } from "react-bootstrap";



const Cart = () => {

const [open, setOpen] = useState(true);
    return (
      <div className="container border">
        <h6>$34/night</h6>
        <p className="text-secondary">
          <FontAwesomeIcon icon={faStar} color="green" /> 4.9(20 reviews)
        </p>
        <p>Date</p>
        <div className="row pl-3">
          <div className="col-sm-10 border">
            <h5 className="text-secondary">
              4/12/2021
              <span className="pl-5 pr-5 pt-5 pd-5">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
              8/12/2021{" "}
            </h5>
          </div>
          <div className="col-sm-1"></div>
        </div>
        <p>Guests</p>
        <div className="row border ml-1 mr-1">
          <div className="col-sm-10">3 Guests</div>
          <div className="col-sm-2">
            <FontAwesomeIcon
              icon={open ? faChevronUp : faChevronDown}
              size="1x"
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            />
          </div>
        </div>
        <Collapse in={open}>
          <div className="container">
            <div className="row">
              <div className="col-sm-10">$34 * 4</div>
              <div className="col-sm-2">$124</div>
              <hr/>
              <div className="col-sm-10">$34 * 4</div>
              <div className="col-sm-2">$124</div>
              <hr/>
              <div className="col-sm-10">$34 * 4</div>
              <div className="col-sm-2">$124</div>
              <hr/>
              <div className="col-sm-10">$34 * 4</div>
              <div className="col-sm-2">$124</div>
            </div>
          </div>
        </Collapse>
      </div>
    );
};

export default Cart;