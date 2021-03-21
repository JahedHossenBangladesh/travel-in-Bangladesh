import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Form = ({val,name,increase,setIncrease}) => {
  return (
    <>
      <div className="container mt-3 mb-4">
        <div className="row ">
          <div className="col-sm-4" style={{ marginRight: "170px" }}>
            <h6>{name}</h6>
          </div>
          <div className="col-sm-1">
            <FontAwesomeIcon icon={faMinus} onClick={() => setIncrease(increase - 1)}/>
          </div>
          <div className="col-sm-1">
            <h6>{increase}</h6>
          </div>
          <div className="col-sm-1">
            <FontAwesomeIcon icon={faPlus} onClick = {() => setIncrease(increase + 1)}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
