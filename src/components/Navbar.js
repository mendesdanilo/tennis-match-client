import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ loggedInUser }) {
  return (
    <>
      {loggedInUser && <p>Welcome {loggedInUser.username}</p>}
      <ul>
        <li>
          <NavLink activeStyle={{ color: "red" }} exact to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color: "red" }} exact to="/signup">
            Signup
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
