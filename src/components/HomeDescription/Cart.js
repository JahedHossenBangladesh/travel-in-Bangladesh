import {
  faArrowRight,


  faChevronDown, faChevronUp,

  faStar
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react';
import { Collapse } from "react-bootstrap";



const Cart = () => {

const [open, setOpen] = useState(true);
    return (
      <div className="container border mb-3" style={{ height: "450px" }}>
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
          <div className="col-sm-10 p-2">
            <h6>3 Guests</h6>
          </div>
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
            <div className="row ">
              <div className="col-sm-10 text-secondary border-bottom">
                <p> $34 * 4</p>
              </div>
              <div className="col-sm-2 text-secondary border-bottom">
                <p> $124</p>
              </div>
              <hr />
              <div className="col-sm-10 text-secondary border-bottom">
                {" "}
                <p> Clearning fee </p>
              </div>
              <div className="col-sm-2 text-secondary border-bottom">$12</div>
              <hr />
              <div className="col-sm-10 text-secondary border-bottom ">
                Service free
              </div>
              <div className="col-sm-2 text-secondary border-bottom">
                <p> $24 </p>
              </div>
              <hr />
              <div className="col-sm-10">
                <h6>Total</h6>
              </div>
              <div className="col-sm-2 ">
                
                <h6>$167</h6>
              </div>
            </div>
          </div>
        </Collapse>
        <div>
          <button type="submit" className="searchBtn mb-2">
            Reserve
          </button>
        <br/>
        <p className="text-secondary">you can not change yet</p>
        </div>
      </div>
    );
};

export default Cart;