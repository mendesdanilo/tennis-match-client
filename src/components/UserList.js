import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { getAllUsers, addFavorite } from "../api";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarRateIcon from "@material-ui/icons/StarRate";
import IconButton from "@material-ui/core/IconButton";

import "./UserList.css";


function UserList() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const response = await getAllUsers();
    setUsers(response.data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const onSwipe = async (direction, id) => {
    console.log("You swiped: " + direction);
    console.log("ID " + id);
    if (direction === "right") {
      await addFavorite(id);
    }
  };

  const swipeRight = async (direction, id) => {
    console.log("You swiped: " + direction);
    console.log("ID " + id);
    if (direction === "right") {
      await addFavorite(id);
      await fetchUsers();
    }
  };

  const swipeLeft = async (direction, id) => {
    console.log("You swiped: " + direction);
    console.log("ID " + id);
    if (direction === "left") {
      await fetchUsers();
    }
  };

  return (
    <div>
      <div className="tinderCards">
        {users.map((user) => (
          <>
            <TinderCard
              key={user._id}
              className="swipe"
              onSwipe={(direction) => onSwipe(direction, user._id)}
            >
              <div
                className="card"
                style={{ backgroundImage: `url(${user.url})` }}
                preventSwipe={["up", "down"]}
              >
                <img style={{ height: "330px" }} src={user.imageUrl} />

                <h3>{user.username}</h3>
              </div>
            </TinderCard>
            <div className="swipeButtons">
              <IconButton
                onClick={() => swipeLeft("left", user._id)}
                className="left"
              >
                <CloseIcon fontSize="large" />
              </IconButton>
              <IconButton className="star">
                <StarRateIcon fontSize="large" />
              </IconButton>
              <IconButton
                onClick={() => swipeRight("right", user._id)}
                className="right"
              >
                <FavoriteIcon fontSize="large" />
              </IconButton>
            </div>
          </>
          //<NavLink to={`/users/${user._id}`}>{user.username}</NavLink>
        ))}
      </div>
    </div>
  );
}

export default UserList;
