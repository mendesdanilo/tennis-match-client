import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ loggedInUser }) {
  return (
    <>
      <div>
        <div>
          <NavLink activeStyle={{ color: "red" }} exact to="/login">
            Login
          </NavLink>
        </div>
        <div>
          <NavLink activeStyle={{ color: "red" }} exact to="/signup">
            Signup
          </NavLink>
        </div>
        {loggedInUser && <p>Welcome {loggedInUser.username}</p>}
      </div>
    </>
  );
}

export default Navbar;
