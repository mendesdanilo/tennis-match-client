import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../api";
import "./Navbar.css";

function Navbar({ loggedInUser, setLoggedInUser }) {
  const logoutUser = async () => {
    await logout();
    setLoggedInUser(null);
  };

  return loggedInUser ? (
    <>
      <nav class="navbar navbar-light bg-light">
        <nav>
          <p>Welcome {loggedInUser.username} !</p>
        </nav>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <NavLink to="/favorites">Matches</NavLink>
        <NavLink to="/">
          <button onClick={logoutUser}>Logout</button>
        </NavLink>
      </nav>
    </>
  ) : (
    <>
      <nav class="navbar navbar-light bg-light">
        <form className="form-inline">
          <NavLink className="btn btn-outline-primary" exact to="/login">
            Login
          </NavLink>
          <NavLink className="btn btn-outline-primary" exact to="/signup">
            Signup
          </NavLink>
        </form>
      </nav>
    </>
  );
}
export default Navbar;
