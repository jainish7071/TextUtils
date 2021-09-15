import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#181549";
      showAlert("Dark Mode Has Been Enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode";
      // }, 2000);
      // setTimeout(() => {
      //   setInterval(() => {
      //     document.title = "Install TextUtils Now!";
      //   }, 2000);
      // }, 1000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Been Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      {/*<Router>*/}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch> */}
        {/*
          Why Use of exact
          /user ---> component1
          /user/home ---> component2 
          */}
        {/* <Route exact path="/about"> */}
        {/* <About /> */}
        {/* </Route> */}
        {/* <Route exact path="/"> */}
        <TextForm
          showAlert={showAlert}
          heading="Enter The Text to analyze below"
          mode={mode}
        />
        {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
