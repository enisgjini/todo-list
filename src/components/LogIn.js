import React from "react";
import "../App.css";
import { useAuth0 } from "@auth0/auth0-react";

const LogIn = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <button
        className="form-button"
        id="log-in"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </button>
    )
  );
};

export default LogIn;
