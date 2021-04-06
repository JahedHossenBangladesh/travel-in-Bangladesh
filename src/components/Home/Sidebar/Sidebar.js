import { faChevronDown, faChevronUp, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Form from "./Form/Form";
import "./Sidebar.css";
const crypto = require("crypto");

const id = crypto.randomBytes(16).toString("hex");

// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar(props) {

const[increaseAdult,setIncreaseAdult] = useState(0);
const[increaseChild,setIncreaseChild] = useState(0);
const [increaseBaby, setIncreaseBaby] = useState(0);
const [open, setOpen] = useState(true);

  function getDate() {
    var today = new Date();

    document.getElementById("date").value =
      today.getFullYear() +
      "-" +
      ("0" + (today.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + today.getDate()).slice(-2);
  }
  const { register, handleSubmit, errors, control } = useForm();
  const onSubmit = (data) => console.log(data);

  const title = "Where do you want to go";
  // console.log(errors);

  return (
    <>
      <h5 className="mt-3 mb-3">{props.title}</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        { props.form ?
          <select ref={register} name="locationSelect">
            <option value="cows-bazar">cows-bazar</option>
            <option value="Sylhet">Sylhet 1</option>
            <option value="Bandorbon">Bandorban</option>
            <option value="Sundorbon">Sundorbon</option>
            <option value="Rajshahi">Rajshahi</option>
          </select> : ''
        }
        {props.ratetting ?
        <p>
              <FontAwesomeIcon icon={faStar} color="green" /> {props.ratetting}
            </p> : ''}
        <div className="container">
          <div className="row mb-2">
            <div className="col-12 col-sm-5 pl-0 ml-.5 mr-.5">
              <input
                className="pl-4 pr-4 pt-4 pb-2 border"
                type="date"
                id="start"
                name="trip-start"
                placeholder="start"
                onLoad="getDate()"
                ref={register({ required: true })}
              />
            </div>
            <div className="col-12 col-sm-3 ml-4">
              <input
                className="pl-4 pr-4 pt-4 pb-2 border"
                type="date"
                id="start"
                name="trip-end"
                onLoad="getDate()"
                ref={register({ required: true })}
              />
            </div>
          </div>
        </div>

        <div className="container ">
          <div className="row border">
            <div className="col-sm-12 border">
              <p className="text-secondary">Guests</p>

              <div className="container">
                <div className="row ">
                  <div className="col-sm-10">
                    <div className="input-group">
                      <input
                        className="form-control  
                input-sm"
                        type="none"
                        ref={register}
                        name="adult"
                        value={`${increaseAdult} ADULTS,`}
                        style={{
                          border: "none",
                          marginRight: "-118px",
                          fontWeight: "bold",
                        }}
                        ref={register}
                      />
                      <input
                        className="form-control  
                input-sm"
                        type="none"
                        ref={register}
                        name="child"
                        value={`${increaseChild + increaseBaby} CHILD`}
                        style={{ border: "none", fontWeight: "bold" }}
                        ref={register}
                      />
                    </div>
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
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row border">
            <div className="col-sm-12">
              <Collapse in={open}>
                <div id="example-collapse-text">
                  <Form
                    increase={increaseAdult}
                    setIncrease={setIncreaseAdult}
                    name="ADULT"
                  />
                  <Form
                    increase={increaseChild}
                    setIncrease={setIncreaseChild}
                    name="CHILD"
                  />
                  <Form
                    increase={increaseBaby}
                    setIncrease={setIncreaseBaby}
                    name="BABIES"
                  />
                  <div className="container">
                    <div className="row mb-2">
                      <div className="col-sm-9"></div>
                      <div className="col-sm-3">
                        <button
                          type="button"
                          class="btn btn-outline-success border-3 bold"
                        >
                          Apply
                        </button>
                        <input
                          type="hidden"
                          id="custId"
                          name="custId"
                          ref={register}
                          value={id}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>
          </div>
        </div>

        <Link to="/mapPage">
          <button type="submit" className="searchBtn">
            <FontAwesomeIcon icon={faSearch} className="pr-1" />
            Search
          </button>
        </Link>
      </form>
    </>
  );
}
