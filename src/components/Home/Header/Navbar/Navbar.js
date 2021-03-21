import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            {" "}
            <span className="font-styling ml-3">Aircnc</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto ms-auto ml-auto me-auto">
              <li className="nav-item ">
                <a className="nav-link ml-5 font-weight-bold " href="#">
                  Host your Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  ml-5 font-weight-bold " href="#">
                  Host your experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  ml-5 font-weight-bold" href="#">
                  Help
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  ml-5 font-weight-bold  " href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  ml-5 font-weight-bold " href="#">
                  <button
                    type="button"
                    className="btn btn-success rounded-pill"
                    style={{ borderRadius: "25px" }}
                  >
                    Sign up
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
}
