import './StartMy.css'
import React,{ useState} from 'react'
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect'

export default function Start(props) {
  
  const [state]=useState({

    title:"Welcome To",
    titleTwo:"TextUtils",
    titleThree:"TextUtils will",
    image:"images/sp.png",
  });
  
  return (
    <>
      <div className="container outer">
        <div className="container welText" id="welcomeStart">
          <h2>
            <div
              className="title"
              style={{ color: props.mode === "dark" ? "white" : "#0116b4" }}
            >
              {state.title}
            </div>
            <div
              className="titleTwo"
              style={{ color: props.mode === "dark" ? "#FEBE28" : "#67098f" }}
            >
              <b>{state.titleTwo}</b>
            </div>
            <div
              className="titleThree"
              style={{ color: props.mode === "dark" ? "#01ACB6" : "#6c76ab" }}
            >
              {state.titleThree}
            </div>
          </h2>
          <div
            className="text"
            style={{
              color: props.mode === "dark" ? "rgb(228, 228, 13)" : "#7482e7",
            }}
          >
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 35,
                strings: [
                  "Manage your text as your need",
                  "Convert text to Upper Case",
                  "Convert text to Lower Case",
                  "Remove Extra spaces",
                ],
              }}
            />
          </div>
        </div>
        <Link to="/home">
          <button type="button" class="btn btn-outline-primary letsTryBtn">
            Let's Try
          </button>
        </Link>
      </div>
    </>
  );
}
