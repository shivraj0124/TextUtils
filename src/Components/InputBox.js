import React, { useState } from "react";

export default function InputBox(props) {
  const handleOnclickUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    text.length === 0
      ? props.showAlert("No Text to Convert Upper Case", "warning")
      : props.showAlert("Converted to upper Case", "success");
  };

  const handleOnclickLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    text.length === 0
      ? props.showAlert("No Text to Convert Lower Case", "warning")
      : props.showAlert("Converted to Lower Case", "success");
  };

  const handleOnclickClear = () => {
    let newText = "";
    setText(newText);
    text.length === 0
      ? props.showAlert("No Text to Clear", "warning")
      : props.showAlert("Cleared", "success");
  };

  const handleCopy = () => {
    let textT = document.getElementById("myBox");
    textT.select();
    navigator.clipboard.writeText(textT.value);
    text.length === 0
      ? props.showAlert("No Text to Copy", "warning")
      : props.showAlert("Copy to Clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    text.length === 0
      ? props.showAlert("No Text to Remove Extra Spaces", "warning")
      : props.showAlert("Removed Extra Spaces", "success");
  };

  const [text, setText] = useState("");

  const handleOnchange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div
        className="container my-0"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-5">
          <h3 className="label">Enter Text Here</h3>
          <textarea
            className="form-control my-0"
            value={text}
            onChange={handleOnchange}
            style={{
              backgroundColor: props.mode === "dark" ? "#17253a" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleOnclickUpper}>
          Convert To UpperCase
        </button>
        <button
          className="btn btn-primary mx-1 ml-0 my-1"
          onClick={handleOnclickLower}
        >
          Convert To LowerCase
        </button>
        <button
          className="btn btn-primary mx-1 ml-0 my-1"
          onClick={handleOnclickClear}
        >
          Clear
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>

        <div
          className="container my-4"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h2>Your Text Summary</h2>
          <p>
            Total Words :{" "}
            {text.length === 0
              ? "0"
              : text.split(" ").filter((element) => {
                  return element.length > 0;
                }).length}
          </p>
          <p>Total Characters : {text.length}</p>
          <p>Time Required To read :{0.008 * text.split(" ").length}</p>
          <h2>Preview</h2>
          <p>{text.length === 0? 'Enter text to preview':text}</p>
        </div>
      </div>
    </>
  );
}
