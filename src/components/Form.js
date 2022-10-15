import React from "react";
import "../App.css";
import logo from "../assets/logo.png";
import LogIn from "./LogIn";
import LogoutButton from "./LogoutButton";
// import Navbar from "./Navbar";
import SignUp from "./SignUp";

function Form() {
  return (
    <>
      <div className="form">
        <img src={logo} alt="" className="form-logo" />
        <h1 className="form-heading">Aplikacioni per detyra ditore</h1>
        <p className="form-subtitle">
          <i>
            “ Disiplina është ura midis qëllimeve dhe arritjeve. ” <br />
            Jim Rohn
          </i>
        </p>
        <div className="form-buttons">
          <div className="row">
            <div className="column">
              <LogIn />
              <LogoutButton />
            </div>
            <div className="column">
              <SignUp />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
