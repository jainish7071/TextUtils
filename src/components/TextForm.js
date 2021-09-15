import React, { useState } from "react";

export default function TextForm(props) {
  const wordCounter = (line) => {
    let arr = line.split(" ");
    let count = 0;
    arr.forEach((element) => {
      if (element) count++;
    });
    return count;
  };

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLowClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleClearClick = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("Text Cleared !", "success");
  };

  const handleCapClick = () => {
    let newtext = "";
    let arr = text.toLowerCase().split(" ");
    arr.forEach((element) => {
      newtext += element.charAt(0).toUpperCase() + element.substring(1) + " ";
    });
    setText(newtext.substr(0, newtext.length - 1));
    props.showAlert("Converted to Capitalized!", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text = "new text"; // wrong way to set the text
  // setText("new text"); // correct wat to set the text
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#181549" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary me-2" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCapClick}>
          Convert To Capitalize
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy to Clipboard
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remoce Extra Spaces
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your Text summary</h2>
        <p>
          {wordCounter(text)} words and {text.length} characters
        </p>
        <p>{0.008 * wordCounter(text)} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Something into text box above to preview it here"}
        </p>
      </div>
    </>
  );
}
