import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../App.css"

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button className="buttons-of-form" onClick={() => logout()}>
        Log Out <i class="fi fi-rr-exit"></i>
      </button>
    )
  );
};

export default LogoutButton;
