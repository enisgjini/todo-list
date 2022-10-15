import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../App.css";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <>
        <div class="some-page-wrapper">
          <div class="row">
            <div class="column">
              <div class="blue-column">
                <div className="card">
                  <img src={user.picture} alt={user.name} />
                  <h2>Name : {user.name}</h2>
                  <table id="customers">
                    <tr>
                      <td>
                        <i class="fa-regular fa-envelope"></i> Email
                      </td>
                      <td>{user.email}</td>
                    </tr>
                    <tr>
                      <td>
                        <i class="fa-solid fa-signature"></i> Nickname
                      </td>
                      <td>{user.nickname}</td>
                    </tr>
                    <tr>
                      <td>
                        <i class="fa-solid fa-location-dot"></i> Locale
                      </td>
                      <td>{user.locale}</td>
                    </tr>
                    <tr>
                      <td>
                        <i class="fa-solid fa-arrows-rotate"></i> Updated at
                      </td>
                      <td>{user.updated_at}</td>
                    </tr>
                    <tr>
                      <td>
                        <i class="fa-solid fa-hashtag"></i> Sub
                      </td>
                      <td>{user.sub}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Profile;
