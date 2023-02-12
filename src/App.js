import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar.js";
import Alert from "./Components/Alert.js";
import InputBox from "./Components/InputBox.js";
import About from "./Components/About.js";
import Start from "./Components/Start.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alertText, setAlertText] = useState(null);
  const showAlert = (message, type) => {
    setAlertText({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlertText(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");

      document.body.style.background = "#17253a";
      showAlert("Dark Mode Enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light Mode Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alertText} />
        <Routes>
          <Route exact path="/" element={<Start mode={mode} />} />
          <Route
            exact
            path="/home"
            element={
              <InputBox mode={mode} showAlert={showAlert} alert={alertText} />
            }
          />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
