import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Nav = () => {
    return (
      <>
        <div className="container ">
          <div className="row">
         
              <ul
                className="nav mt-1 "
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  paddingRight: "250px",
                }}
              >
                <li className="item">
                  <a className="navbar-brand" href="#">
                    <span className="font-styling ">Aircnc</span>
                  </a>
                </li>
              </ul>

              <ul
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingRight: "170px",
                }}
                className="nav mt-3 "
              >
                <li className="item">
                  <p
                    style={{ fontSize: "12px" }}
                    className="pl-3 pr-3 pt-2 pr-0 pb-2  font-weight-bold border"
                  >
                    Dhaka Division, Bangladesh
                  </p>
                </li>
                <li className="item ml-2">
                  <p
                    style={{ fontSize: "12px" }}
                    className=" pl-3 pr-3 pt-2 pr-0 pb-2 font-weight-bold  border"
                  >
                    apr 13-17
                  </p>
                </li>
                <li className="item ml-2">
                  <p
                    style={{ fontSize: "12px" }}
                    className="pl-3 pr-3 pt-2 pb-2 pr-0 font-weight-bold border"
                  >
                    3 Guests
                    <FontAwesomeIcon
                      icon={faSearch}
                      color="green"
                      className="ml-1"
                    />
                  </p>
                </li>
              </ul>
              <ul
                style={{ display: "flex", justifyContent: "end" }}
                className="nav mt-3 "
              >
                <li>
                  <p className="nav-link  font-weight-bold  ">Help</p>
                </li>
                <li>
                  <p className="nav-link  font-weight-bold  ">Login</p>
                </li>
                <li className="">
                  <button
                    type="button"
                    style={{ borderRadius: "25px" }}
                    className="btn ml-1 btn-success rounded-pill"
                  >
                    Sign up
                  </button>
                </li>
              </ul>
            
          </div>
        </div>
      </>
    );
};

export default Nav;