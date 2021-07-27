import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../api";
import SportsTennisIcon from "@material-ui/icons/SportsTennis";
import "./Navbar.css";

function Navbar({ loggedInUser, setLoggedInUser }) {
  const logoutUser = async () => {
    await logout();
    setLoggedInUser(null);
  };

  return loggedInUser ? (
    <>
      <nav class="navbar navbar-light bg-light">
        <div>
          <h6>Welcome {loggedInUser.username} !</h6>
        </div>
        <NavLink className="nes-btn is-primary btn-sm" to="/profile">
          My Profile
        </NavLink>
        <NavLink className="nes-btn is-primary btn-sm" to="/favorites">
          Favorites
        </NavLink>
        <NavLink className="nes-btn is-primary btn-sm" to="/matches">
          Matches
        </NavLink>
        <NavLink to="/">
          <button className="nes-btn is-primary btn-sm" onClick={logoutUser}>
            Logout
          </button>
        </NavLink>
      </nav>
    </>
  ) : (
    <>
      <nav className="navbar navbar-light bg-light ">
        <img className="nav-tennis" alt="" src="/images/tennis1.png" />
        <form className="form-inline ms-auto">
          <NavLink className="nes-btn is-primary btn-sm" exact to="/login">
            Login
          </NavLink>
          <NavLink className="nes-btn is-primary btn-sm" exact to="/signup">
            Signup
          </NavLink>
        </form>
      </nav>
    </>
  );
}
export default Navbar;
