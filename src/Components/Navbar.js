import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary-${props.mode} bg-${props.mode}`}
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
          >
            TextUtils
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "black",
              borderColor: props.mode === "dark" ? "white" : "black",
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active mx-4"
                  to="/home"
                  style={{ color: props.mode === "dark" ? "white" : "black" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-4"
                  to="/about"
                  style={{ color: props.mode === "dark" ? "white" : "black" }}
                >
                  About
                </Link>
              </li>
            </ul>

            {/* Change mode */}
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              } mx-4`}
            >
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {`${
                  props.mode === "dark"
                    ? "Enable Light Mode"
                    : "Enable Dark Mode"
                }`}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
