import React from "react";

export default function About(props) {
  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "dark" ? "#17253a" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2 className="my-4">About Us</h2>
        <div
          className={`accordion bg-body-tertiary-${props.mode} bg-${props.mode}`}
          id="accordionExample"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{
                  backgroundColor: props.mode === "dark" ? "#17253a" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                <b>My Self</b>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: props.mode === "dark" ? "#17253a" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                I am Shivraj Santosh Kolwankar. I am pursuing Diploma in
                Information Technology from Government Polytechnic Mumbai
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{
                  backgroundColor: props.mode === "dark" ? "#17253a" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                <b>App Info</b>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: props.mode === "dark" ? "#17253a" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                This Website will help to manage the text as per your need Like
                Converting the text to Upper Case,Removing Extra Spaces,etc.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{
                  backgroundColor: props.mode === "dark" ? "#17253a" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                <b>Technologies Used</b>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: props.mode === "dark" ? "#17253a" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                This website is created using <b>React Js</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// SRaj*01@skajed