import React from "react";
import { getAllUsers } from "../api";
import { NavLink } from "react-router-dom";

class UserList extends React.Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const response = await getAllUsers();
    //console.log("test", response);
    this.setState({
      users: response.data.allUsers,
    });
  }

  render() {
    return (
      <>
        <h3>List of Users</h3>
        <div>
          {this.state.users.map((user) => {
            return (
              <div key={user._id}>
                <NavLink to={`/users/${user._id}`}>{user.username}</NavLink>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default UserList;
