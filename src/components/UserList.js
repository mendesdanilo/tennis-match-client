import React from "react";
import { getAllUsers } from "../api";
import { NavLink } from "react-router-dom";

class UserList extends React.Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const response = await getAllUsers();
    console.log("test", response);
    this.setState({
      users: response.data.allUsers,
    });
  }

  render() {
    return (
      <>
        <h3>List of Users</h3>
        <ul>
          {this.state.users.map((user) => {
            return (
              <li key={user._id}>
                <NavLink to={`/users/${user._id}`}>{user.username}</NavLink>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default UserList;