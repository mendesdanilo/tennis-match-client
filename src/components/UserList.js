import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./UserList.css";
import { getAllUsers, addFavorite } from "../api";


function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await getAllUsers();
      setUsers(response.data);
    }
    fetchUsers();
  }, []);

  const onSwipe = async (direction, id) => {
    console.log("You swiped: " + direction);
    console.log("ID " + id);
    if (direction === "right") {
      await addFavorite(id);
    }
  };

  return (
    <div>
      <div className="tinderCards">
        {users.map((user) => (
          //console.log(user.username, user.imageUrl)
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
          //<NavLink to={`/users/${user._id}`}>{user.username}</NavLink>
        ))}
      </div>
    </div>
  );
}

export default UserList;
