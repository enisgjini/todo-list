/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import LogoutButton from "./LogoutButton";
import logo from "../assets/logo.png";
import "../App.css";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const { user } = useAuth0();

  return (
    <nav className="navbar">
      <img src={logo} alt="" className="navbar-logo" />

      <div className="navbar-menu">
        <a href="#" className="navbar-link">
          <input id="toggler" type="checkbox" />
          <label for="toggler">
            <img src={user.picture} alt={user.name} className="navbar-avatar" />
          </label>
          <div className="navbar-avatar-dropdown">
            <span>{user.name}</span>
            <span>{user.email}</span>
            
            <LogoutButton />
          </div>
        </a>
      </div>
    </nav>
  );
}
